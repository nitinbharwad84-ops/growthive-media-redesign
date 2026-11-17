// Check the live hero scene: the beats must actually run, the loop must
// return to the start, and under reduced motion the poster must hold.
//
//   node scrollcraft/check-scene.mjs [baseUrl]

import { chromium } from "playwright-core";

const baseUrl = process.argv[2] ?? "http://localhost:3005";
const CHROME = process.env.CHROME_PATH ?? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

async function readBeat(page) {
  return page.evaluate(() => {
    const stage = document.querySelector('[data-scene="campaign-architecture"] .ss-stage');
    if (!stage) return null;
    const panel = stage.querySelector('.ca-title');
    const cursor = stage.parentElement?.querySelector('.ss-cursor');
    return {
      beat: panel ? panel.textContent : null,
      cursorIdle: cursor ? cursor.hasAttribute('data-idle') : null,
    };
  });
}

async function main() {
  const browser = await chromium.launch({ executablePath: CHROME });

  // Motion on
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.waitForTimeout(300);

  const timeline = [];
  for (let i = 0; i < 14; i += 1) {
    timeline.push({ t: i * 700, ...(await readBeat(page)) });
    await page.waitForTimeout(700);
  }
  console.log("== live scene timeline ==");
  for (const entry of timeline) console.log(`${String(entry.t).padStart(5)}ms  ${entry.beat}  cursorIdle=${entry.cursorIdle}`);

  const beats = [...new Set(timeline.map((entry) => entry.beat))];
  console.log("\ndistinct beats:", beats.join(" -> "));
  await context.close();

  // Reduced motion: the poster must hold and the cursor must stay hidden
  const reduced = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    reducedMotion: "reduce",
  });
  const reducedPage = await reduced.newPage();
  await reducedPage.goto(baseUrl, { waitUntil: "networkidle" });
  // The kit settles on its poster a beat after mount; sample after that, so
  // the check reads the held frame and not the server-rendered first frame.
  await reducedPage.waitForTimeout(1500);
  const first = await readBeat(reducedPage);
  await reducedPage.waitForTimeout(4000);
  const later = await readBeat(reducedPage);
  console.log("\n== reduced motion ==");
  console.log("poster beat:", first.beat, "| after 4s:", later.beat, "| held:", first.beat === later.beat);
  await reduced.close();

  await browser.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
