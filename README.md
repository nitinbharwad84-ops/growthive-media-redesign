# GrowthiveMedia — Website

Presentation build for **GrowthiveMedia**, an AI and technology influencer
marketing agency. The site explains what the agency does, how a campaign is
run, and gives brands and creators two clearly separate ways to get in touch.

> **Status:** client-facing demo. Forms validate in the browser and hand the
> visitor a prefilled email; **nothing is transmitted or stored by the site**
> until a delivery integration is configured. See *Pending client items*.

---

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npx tsc --noEmit   # type check
```

No environment variables are required for the demo build.

---

## What the site is

| Route | Purpose |
|---|---|
| `/` | The full narrative: hero, format library, five services, the four-step process, brand enquiry, creator application |
| `/services` | The five campaign models in depth, with the format mix and how a campaign is scoped |
| `/process` | The four steps, each with what we need from you and what you get back |
| `/showcase` | The video formats we build: long-form deep dives, dedicated videos, integrations, cut-downs, multi-creator waves |
| `/creators` | The creator programme and the application form |
| `/contact` | Labelled inboxes, the enquiry route and the answers that come up first |
| `/privacy` | Privacy policy **draft**, pending review by the agency and its legal counsel |

Every header and footer link resolves to a real page. There are no stub
routes and no dead buttons.

---

## Design system

A single dark theme, built on the approved direction in
`docs/GROWTHIVEMEDIA_PRD.md` and `docs/DESIGN_DECISIONS.md`: a deep-void base
with a violet accent, restrained surfaces and one clear focal object per frame.

Tokens live in `src/app/globals.css` as HSL triples, mapped in
`tailwind.config.ts`:

| Token | Value | Use |
|---|---|---|
| `--background` | `#08080C` | Void base |
| `--surface-1` | `#101017` | Section alternation |
| `--surface-2` / `--card` | `#151522` | Cards, bento tiles, form panels |
| `--primary` | `#8B5CF6` | Violet accent, CTAs, focus ring |
| `--accent` | `#C4B5FD` | Lavender highlights |
| `--muted-foreground` | `#94A3B8` | Body copy |
| `--border` | hairline | 1px rules and card strokes |

Motion is CSS only, plus the stageshow kit's own primitives. No animation
library is installed. `prefers-reduced-motion` is honoured in CSS and by the
kit.

---

## Stageshow visuals

The product imagery is authored with the [Stageshow](https://github.com/stageshow)
kit (v1.1.1, MIT), vendored into `src/stageshow/kit`:

| Scene | Kind | Where it appears |
|---|---|---|
| `campaign-architecture` | Live animated scene | Hero — brief → match → plan → live |
| `creator-match` | Still | Showcase — the segment a campaign is aimed at |
| `flight-plan` | Still | Showcase — how formats are scheduled |
| `brief-review` | Still | Process — the brief everything starts from |

The stills are filmed from the running site into `public/stageshow/` with:

```bash
node scrollcraft/film-stills.mjs http://localhost:3000
```

The kit's own rules are respected: kit parts are used rather than lookalikes,
kit geometry is never reshaped from outside, the frames keep to three to seven
real strings, and no borrowed product identity appears anywhere.

---

## Forms

Both forms validate in the browser (`src/lib/validations.ts`), announce errors
through a live region, move focus to the first field that needs attention, and
keep `aria-invalid` / `aria-describedby` in step with each field.

On a valid submission the site says plainly that nothing was sent or stored,
then offers a `mailto:` link to `hello@growthivemedia.in` with the visitor's
answers already filled in. **No form claims to have delivered an email.**

---

## Verification

`scrollcraft/qa.mjs` runs the browser sweep used for this build: every route at
1440 / 768 / 390, a link audit over every internal link, horizontal-overflow
checks, console and network error capture, and both forms' error and success
paths.

```bash
node scrollcraft/qa.mjs http://localhost:3000
```

Screenshots are written to `docs/screenshots/`.

Two focused scripts cover what the sweep does not:

```bash
node scrollcraft/check-scene.mjs http://localhost:3000   # hero beats + reduced-motion poster
node scrollcraft/check-menu.mjs http://localhost:3000    # drawer open, Escape, focus return, navigation
node scrollcraft/contrast.mjs                            # WCAG ratios from the token values
```

`contrast.mjs` computes contrast from `src/app/globals.css` rather than from a
sampled screenshot, so a token change is caught before it reaches the page.

Type check and production build are the other two gates:

```bash
npx tsc --noEmit --incremental false
npm run build
```

`npm run lint` is **not** available: ESLint is not configured in this
repository, and adding it was out of scope for the re-wrap.

---

## Pending client items

Nothing below is faked on the site; each is either omitted or marked as
pending.

| Item | Status on the site | Needed for production |
|---|---|---|
| Logo | Uses the supplied `public/images/logo-icon.png` | A vector SVG for crisp rendering |
| Creator footage | Neutral designed format tiles | Licensed footage or approved stock |
| `500+` collaborations / `80+` network figures | **Not published** — PRD §5.3 requires substantiation | Client confirmation and evidence |
| View and reach figures | **Not published** anywhere | Client approval if ever used |
| Social profiles | Omitted — no verified URLs supplied | Confirmed profile URLs |
| Email delivery | Demo state + `mailto:` fallback | Resend / SendGrid / SMTP credentials |
| Privacy policy | Clearly marked draft | Approved legal copy |
| Email roles | Labelled as "Campaign enquiries" and "Agency contact" | Confirmation that the two addresses have distinct roles |

---

## Stack

Next.js 15 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS 3.4 ·
lucide-react · stageshow kit (vendored)

Author: **Nitin Bharwad** — <nitinbharwad84@gmail.com>
