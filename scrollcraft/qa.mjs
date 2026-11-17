// Browser QA for the GrowthiveMedia site.
//
// Checks every route at three widths, walks every internal link, reports
// console and network failures, exercises the brand enquiry form's error
// path, and writes screenshots into docs/screenshots.
//
//   node scrollcraft/qa.mjs [baseUrl]

import { chromium } from "playwright-core";
import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const baseUrl = process.argv[2] ?? "http://localhost:3005";
const shotsDir = resolve(here, "..", "docs/screenshots");

const CHROME = process.env.CHROME_PATH ?? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const ROUTES = ["/", "/services", "/process", "/showcase", "/creators", "/contact", "/privacy"];
const WIDTHS = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "mobile", width: 390, height: 844 },
];

async function main() {
  await mkdir(shotsDir, { recursive: true });

  const browser = await chromium.launch({ executablePath: CHROME });
  const problems = [];
  const links = new Set();

  for (const size of WIDTHS) {
    const context = await browser.newContext({
      viewport: { width: size.width, height: size.height },
      deviceScaleFactor: size.width === 390 ? 2 : 1,
    });
    const page = await context.newPage();

    page.on("console", (message) => {
      if (message.type() === "error") problems.push(`[console ${size.name}] ${message.text()}`);
    });
    page.on("pageerror", (error) => problems.push(`[pageerror ${size.name}] ${error}`));
    page.on("response", (response) => {
      if (response.status() >= 400 && !response.url().includes("_next/static")) {
        problems.push(`[http ${response.status()} ${size.name}] ${response.url()}`);
      }
    });

    for (const route of ROUTES) {
      await page.goto(baseUrl + route, { waitUntil: "networkidle" });
      await page.waitForTimeout(700);

      const overflow = await page.evaluate(() => ({
        client: document.documentElement.clientWidth,
        scroll: document.documentElement.scrollWidth,
      }));
      if (overflow.scroll > overflow.client + 1) {
        problems.push(
          `[overflow ${size.name} ${route}] page is ${overflow.scroll}px wide in a ${overflow.client}px viewport`
        );
      }

      const hrefs = await page.$$eval("a[href]", (links) =>
        links.map((a) => a.getAttribute("href")).filter(Boolean)
      );
      for (const href of hrefs) {
        if (href.startsWith("/") && !href.startsWith("//")) links.add(href.split("#")[0]);
      }
    }

    // Screenshots of the home page, top and full page
    await page.goto(baseUrl + "/", { waitUntil: "networkidle" });
    await page.waitForTimeout(1200);
    await page.screenshot({ path: resolve(shotsDir, `${size.name}-hero.png`) });
    await page.screenshot({ path: resolve(shotsDir, `${size.name}-fullpage.png`), fullPage: true });

    await context.close();
  }

  // Link audit: every internal route the site links to must answer 200
  const context = await browser.newContext();
  const page = await context.newPage();
  const linkResults = [];
  for (const href of [...links].sort()) {
    const response = await page.goto(baseUrl + href, { waitUntil: "domcontentloaded" });
    linkResults.push(`${response.status()} ${href}`);
  }
  await context.close();

  // Brand enquiry form: the error path must announce and focus the first field
  const formContext = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const formPage = await formContext.newPage();
  await formPage.goto(baseUrl + "/#brand-enquiry", { waitUntil: "networkidle" });
  await formPage.waitForTimeout(500);
  await formPage.getByRole("button", { name: "Start a Campaign" }).click();
  await formPage.waitForTimeout(400);

  const formState = await formPage.evaluate(() => {
    const active = document.activeElement;
    const status = document.querySelector('[role="status"]');
    const invalid = [...document.querySelectorAll('[aria-invalid="true"]')].map((el) => el.id);
    return {
      focusedId: active ? active.id : null,
      status: status ? status.textContent : null,
      invalid,
      errorTexts: [...document.querySelectorAll('[id$="-error"]')].map((el) => el.textContent.trim()),
    };
  });

  // A valid submission must not claim delivery
  await formPage.fill("#brand-name", "Alex Rivera");
  await formPage.fill("#brand-email", "alex@example.com");
  await formPage.fill("#brand-company", "Nexus AI Labs");
  await formPage.selectOption("#brand-type", "Dedicated YouTube Videos");
  await formPage.fill("#brand-details", "Launching a code assistant for engineering teams in Q4.");
  await formPage.getByRole("button", { name: "Start a Campaign" }).click();
  await formPage.waitForTimeout(1200);

  const successState = await formPage.evaluate(() => ({
    heading: document.querySelector("h3") ? document.querySelector("h3").textContent : null,
    body: document.body.innerText,
    mailto: document.querySelector('a[href^="mailto:"]')
      ? document.querySelector('a[href^="mailto:"]').getAttribute("href").slice(0, 80)
      : null,
  }));

  await formPage.screenshot({ path: resolve(shotsDir, "desktop-form-success.png") });
  await formContext.close();

  // Creator application: same error path, plus the disclaimer
  const creatorContext = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const creatorPage = await creatorContext.newPage();
  await creatorPage.goto(baseUrl + "/creators", { waitUntil: "networkidle" });
  await creatorPage.waitForTimeout(500);
  await creatorPage.getByRole("button", { name: "Apply Now" }).click();
  await creatorPage.waitForTimeout(400);
  const creatorState = await creatorPage.evaluate(() => ({
    focusedId: document.activeElement ? document.activeElement.id : null,
    invalid: [...document.querySelectorAll('[aria-invalid="true"]')].map((el) => el.id),
    disclaimer: document.body.innerText.includes("does not guarantee acceptance"),
  }));
  await creatorContext.close();

  await browser.close();

  console.log("\n== link audit ==");
  console.log(linkResults.join("\n"));

  console.log("\n== brand form: error path ==");
  console.log(JSON.stringify(formState, null, 2));

  console.log("\n== brand form: valid submit ==");
  console.log("heading:", successState.heading);
  console.log("mailto:", successState.mailto);
  // A negated sentence is not a delivery claim: "Nothing has been sent" must
  // not read as "it has been sent". Drop the negated sentences before the
  // claim test, then check the honesty statement separately.
  const withoutNegations = successState.body.replace(/[^.]*\bnothing\b[^.]*\./gi, "");
  console.log(
    "claims delivery?:",
    /sent to your email|we have received|has been sent|email sent/i.test(withoutNegations)
  );
  console.log(
    "says nothing was sent?:",
    /nothing (was |has been )?(emailed|stored|sent)/i.test(successState.body)
  );

  console.log("\n== creator form: error path ==");
  console.log(JSON.stringify(creatorState, null, 2));

  console.log("\n== problems ==");
  console.log(problems.length ? problems.join("\n") : "none");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
