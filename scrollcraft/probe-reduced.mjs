// Probe: what does the hero scene actually do under reduced motion?
//   node scrollcraft/probe-reduced.mjs [baseUrl]

import { chromium } from "playwright-core";

const baseUrl = process.argv[2] ?? "http://localhost:3005";
const CHROME = process.env.CHROME_PATH ?? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function readBeat(page) {
  return page.evaluate(() => {
    const stage = document.querySelector('[data-scene="campaign-architecture"] .ss-stage');
    const panel = stage?.querySelector('.ca-title');
    const cursor = stage?.parentElement?.querySelector('.ss-cursor');
    return {
      beat: panel ? panel.textContent : null,
      reducedAttr: document.querySelector('[data-scene="campaign-architecture"]')?.getAttribute('data-reduced'),
      cursorIdle: cursor ? cursor.hasAttribute('data-idle') : null,
      offscreen: stage?.hasAttribute('data-offscreen'),
    };
  });
}

async function main() {
  const browser = await chromium.launch({ executablePath: CHROME });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    reducedMotion: "reduce",
  });
  const page = await context.newPage();
  await page.goto(baseUrl, { waitUntil: "domcontentloaded" });
  for (let i = 0; i < 16; i += 1) {
    const t = i * 400;
    console.log(`${String(t).padStart(5)}ms`, JSON.stringify(await readBeat(page)));
    await page.waitForTimeout(400);
  }
  await browser.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
