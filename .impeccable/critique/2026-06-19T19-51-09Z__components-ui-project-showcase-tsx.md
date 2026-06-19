---
target: components/ui/project-showcase.tsx (Projects section)
total_score: 24
p0_count: 2
p1_count: 1
timestamp: 2026-06-19T19-51-09Z
slug: components-ui-project-showcase-tsx
---
# Projects Section — Design Critique

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|---|---|---|
| 1 | Visibility of System Status | 3 | No skeleton/placeholder while hover-preview image decodes — brief blank flash on first hover |
| 2 | Match System / Real World | 3 | "Selected Work" implies curation, but includes a project with no live link or case study |
| 3 | User Control and Freedom | 3 | No click-to-enlarge on the preview; pure trust-fall into the outbound link |
| 4 | Consistency and Standards | 2 | Pharmatrack renders identical hover/underline/arrow affordance as real links, but `href="#"` goes nowhere |
| 5 | Error Prevention | 2 | Dead link isn't disabled or visually marked — same `<a>` treatment as working rows |
| 6 | Recognition Rather Than Recall | 4 | Title, role, tags, year all visible inline — no memory burden |
| 7 | Flexibility and Efficiency | 2 | Hover-preview has no keyboard/focus equivalent — `onMouseEnter`/`onMouseLeave` only |
| 8 | Aesthetic and Minimalist Design | 3 | 15 small bordered tag pills (3 × 5 rows) add visual noise the rest of the site avoids |
| 9 | Error Recovery | 2 | Pharmatrack's dead end gives zero signal before the click; no "coming soon" state |
| 10 | Help and Documentation | n/a | Not applicable to a portfolio listing |
| **Total** | | **24/36** | **Acceptable — solid bones, real defects undercut trust** |

## Anti-Patterns Verdict

**Does this look AI-generated? No.** The lerped cursor-following preview, restrained typography, and shared `border-t` rhythm with About/Skills read as deliberate, Linear-influenced craft.

Static `detect.mjs` against the component file and the full `components/` tree returned zero findings (exit 0, `[]` both times). The live injected detector flagged `ai-color-palette` (37×, one recurring `accent` token, not 37 distinct issues) and `all-caps-body` (2×, on short uppercase labels, not paragraph body text) — both false-positive-shaped on manual review.

## Overall Impression

The interaction design is the best thing in this section. Three concrete defects sit underneath: a dead link wearing a live-link costume, three image paths that will 404 on Vercel's case-sensitive filesystem, and inconsistent screenshot framing that breaks the moment a visitor hovers.

## What's Working

- The floating cursor-preview (lerped easing, blur-to-sharp crossfade) — tasteful, non-templated.
- Typographic hierarchy via mono year/role labels without extra color.
- Systemic consistency with About/Skills/Contact (`border-t border-border`, shared padding, eyebrow+heading pattern).

## Priority Issues

**[P0] Three image paths will 404 in production.** `lib/data.ts` references lowercase `boardmate.png`, `unilend.png`, `kwartokwarta.png`; actual files are `BoardMate.png`, `UniLend.png`, `KwartoKwarta.png`. Works locally (case-insensitive FS), will break on Vercel. Fix: align casing on both sides. → `/impeccable harden`.

**[P0] Dead link wears live-link affordance.** Pharmatrack (`link: '#'`) gets full hover underline/arrow/highlight but goes nowhere. Fix: render unlinked projects as a non-interactive block with a "Private / coming soon" tag. → `/impeccable harden`.

**[P1] Screenshot inconsistency breaks the hover moment.** `HandogAral.png`/`PharmaTrack.png` are portrait phone mockups force-cropped into widescreen `aspect-video`. Fix: re-export at consistent aspect ratio or use a device-frame treatment. → `/impeccable polish`.

**[P2] Years don't sort and barely differentiate.** Four of five show `2026`; order ≠ chronology. Fix: sort by year or drop the column. → `/impeccable clarify`.

**[P2] Identical role label repeats 5×.** "Full-Stack Developer" on every row adds scan fatigue with no signal. Fix: move to the section eyebrow once; vary the per-row field. → `/impeccable clarify`.

**[P3] No keyboard equivalent for hover-preview.** `onMouseEnter`/`onMouseLeave` only. Fix: mirror with `onFocus`/`onBlur`. → `/impeccable adapt`.

## Persona Red Flags

**Jordan (First-Timer/recruiter)**: clean fast read, until the dead Pharmatrack link scroll-jumps with no warning.

**Riley (Stress Tester)**: found both real defects — the dead link and the case-mismatched paths that only pass locally.

**Casey (Mobile)**: no horizontal overflow, but inherits the same screenshot aspect-ratio cropping problem.

## Minor Observations

- `num` field on `Project` type is defined but never rendered — dead data.
- Hover arrow enters from bottom-left while title underline grows left-to-right — mismatched hover "directions."
- Tag pills pass contrast (7.85:1) but read busier than the rest of the page's restraint.
- No console errors, no overflow, no broken images detected at 1440px or 390px.

## Questions to Consider

- Does a project with no link or case study earn a place among five "selected" works?
- Why let the section's most-designed interaction surface its least art-directed assets?
- Would a confident version of this section show a year at all, given four of five share one value?
