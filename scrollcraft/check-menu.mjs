// Mobile navigation checks: the drawer opens, Escape closes it and returns
// focus to the toggle, and a link inside closes it too.
//
//   node scrollcraft/check-menu.mjs [baseUrl]

import { chromium } from "playwright-core";

const baseUrl = process.argv[2] ?? "http://localhost:3005";
const CHROME = process.env.CHROME_PATH ?? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function main() {
  const browser = await chromium.launch({ executablePath: CHROME });
  const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await context.newPage();
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.waitForTimeout(400);

  const toggle = page.getByRole("button", { name: "Open navigation menu" });
  await toggle.click();
  await page.waitForTimeout(300);

  const opened = await page.evaluate(() => ({
    expanded: document.querySelector('button[aria-controls="mobile-navigation"]')?.getAttribute("aria-expanded"),
    drawerVisible: !!document.querySelector("#mobile-navigation"),
    links: [...document.querySelectorAll('#mobile-navigation a')].map((a) => a.getAttribute("href")),
  }));
  console.log("after open:", JSON.stringify(opened));

  await page.keyboard.press("Escape");
  await page.waitForTimeout(300);

  const afterEscape = await page.evaluate(() => ({
    expanded: document.querySelector('button[aria-controls="mobile-navigation"]')?.getAttribute("aria-expanded"),
    drawerVisible: !!document.querySelector("#mobile-navigation"),
    focusedLabel: document.activeElement?.getAttribute("aria-label") ?? document.activeElement?.tagName,
  }));
  console.log("after Escape:", JSON.stringify(afterEscape));

  await toggle.click();
  await page.waitForTimeout(300);
  await page.click('#mobile-navigation a[href="/creators"]');
  await page.waitForTimeout(800);
  const afterNav = await page.evaluate(() => ({
    url: location.pathname,
    drawerVisible: !!document.querySelector("#mobile-navigation"),
  }));
  console.log("after nav:", JSON.stringify(afterNav));

  await browser.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
