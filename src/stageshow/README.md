# Stageshow integration

This folder holds the GrowthiveMedia product visuals built with the
**Stageshow** skill (`stageshow` v1.1.1) — miniature, authored product UI used as
marketing illustrations: one live animated scene in the hero plus filmed stills
for the showcase, services and process sections.

## Provenance

| Item | Value |
|---|---|
| Skill | `stageshow` v1.1.1 |
| Source | `C:\Users\nitin\.claude\skills\stageshow` |
| License | MIT (see `NOTICE.md`) |
| Vendored kit | `src/stageshow/kit/` — copied verbatim, geometry untouched |

The kit is vendored rather than imported from outside the repository so that the
Next.js build resolves its CSS imports and the site stays self-contained.

## Rules that apply to everything in `scenes/`

1. **Use the kit parts; never a lookalike.** `Button`, `Card`, `Row`, `Chip`,
   `Icon`, `Window`, `Stage` and the motion primitives come from
   `src/stageshow/kit`. Do not hand-build a window, a phone frame or a bubble.
2. **Do not reshape a kit part's geometry from outside.** Restyle with tokens and
   props, not with CSS overrides that change a part's own measurements.
3. **One focal object per frame.** The eye must land on the result, not on a
   field of equal-weight cards.
4. **Restraint on words.** Three to seven real strings per frame; every other
   row is a placeholder bar. Real words only where the story is.
5. **No borrowed identities.** These are GrowthiveMedia's own surfaces. No
   third-party product marks, no sparkles, no letter-in-a-coloured-square.
6. **Motion has a cause.** Every animation answers "what just happened?".

## Scenes

| Scene | Use | Size |
|---|---|---|
| `scenes/campaign-architecture.tsx` | Live hero scene: brief → creator match → flight plan → publish → live | 720 × 340 (compact 358) |
| `scenes/creator-match.tsx` | Still: a creator-match table with one row selected | 400 × 300 |
| `scenes/flight-plan.tsx` | Still: a multi-creator wave calendar | 400 × 300 |
| `scenes/brief-review.tsx` | Still: an annotated campaign brief | 720 × 340 |

## Re-filming the stills

The stills are produced with the skill's own film pipeline so the exported PNG
matches the kit exactly:

```powershell
cd C:\Users\nitin\.claude\skills\stageshow
npm install
npm run dev                      # serves the playground with the examples catalog
node scripts/film.mjs "http://localhost:<port>/?capture=creator-match" --select '#example' --still --out creator-match.png
```

Copy the scene into `C:\Users\nitin\.claude\skills\stageshow\examples\<name>\`
first (the playground reads its catalog from `examples/`), then move the filmed
PNG back into `public/stageshow/`.

The animated scene is rehearsed with `--gate`, which prints a verdict for every
visible fault. The scene is only accepted once the gate reports
`rehearsal passed`.
