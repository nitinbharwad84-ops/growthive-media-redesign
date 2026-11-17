// Film the GrowthiveMedia stageshow stills from the running site.
//
// The scenes live in src/stageshow/scenes and are marked in the page with
// data-scene="<name>". This script screenshots each stage's own element, so
// the exported PNG is the scene as the kit draws it — not a mock-up.
//
//   node scrollcraft/film-stills.mjs [baseUrl] [outDir]
//
// Requires the dev server to be running (npm run dev).

import { chromium } from "playwright-core";
import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const baseUrl = process.argv[2] ?? "http://localhost:3000";
const outDir = resolve(here, "..", process.argv[3] ?? "public/stageshow");

const CHROME = process.env.CHROME_PATH ?? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

const SHOTS = [
  { scene: "creator-match", file: "creator-match.png", reduced: false },
  { scene: "flight-plan", file: "flight-plan.png", reduced: false },
  { scene: "brief-review", file: "brief-review.png", reduced: false },
  { scene: "campaign-architecture", file: "hero-poster.png", reduced: true },
];

async function main() {
  await mkdir(outDir, { recursive: true });

  const browser = await chromium.launch({ executablePath: CHROME });
  const page = await browser.newPage({
    viewport: { width: 1440, height: 1000 },
    deviceScaleFactor: 2,
    reducedMotion: "reduce",
  });

  const consoleErrors = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("pageerror", (error) => consoleErrors.push(String(error)));

  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);

  for (const shot of SHOTS) {
    const stage = page.locator(`[data-scene="${shot.scene}"] .ss-stage`).first();
    await stage.waitFor({ state: "visible", timeout: 15000 });
    await page.waitForTimeout(600);

    const out = resolve(outDir, shot.file);
    await stage.screenshot({ path: out });
    console.log(`filmed ${shot.scene} -> ${out}`);
  }

  await browser.close();

  if (consoleErrors.length) {
    console.log("console errors:");
    for (const error of consoleErrors) console.log("  -", error);
  } else {
    console.log("no console errors");
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
