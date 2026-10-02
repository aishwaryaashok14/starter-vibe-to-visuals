# Multi-route starter-kit test run

Test date: 2 October 2026

## Current route contract

The physical-product route remains unchanged: `STORE-KIT.md` → `product-family.png` → ChatGPT Sites store → social image → video.

The software-app and service routes now use: `DESIGN.md` → Google Stitch prototype → three selected visual moments → social image → video. The three moments are selected after the prototype works; they do not limit the number of screens or states in the focused journey.

## Automated validation

Run:

```text
node tests/validate-package.mjs
```

| Area | Result | Evidence |
| --- | --- | --- |
| Physical-store preservation | Pass | The complete store-route configuration matches its pre-change SHA-256 hash. |
| Digital source file | Pass | App and service routes consistently use `DESIGN.md` and the renamed template. |
| Stitch handoff | Pass | Both routes direct students to import `DESIGN.md` into Google Stitch and build a clickable focused journey. |
| Flexible journey scope | Pass | The digital build contract requests the screens and states the journey needs and contains no fixed three-screen requirement. |
| Campaign anchors | Pass | Students select the entry point, defining interaction, and successful outcome only after the prototype works. |
| Route switching | Pass | A DOM runtime test switches store → app → service → store and checks the source label, setup instructions, build prompt, visual-reference step, and submission list. |
| Documentation parity | Pass | Project instructions, template, consistency check, README, facilitator guide, and student guide follow the same route contract. |

## Browser validation

| Check | Result |
| --- | --- |
| Software-app route renders Stitch setup and build copy | Pass |
| Service route renders the focused customer-journey prompt | Pass |
| Returning to the store restores the original product-reference prompt | Pass |
| Desktop layout has no visible overlap or clipped route content | Pass |
| 390 px mobile layout has no horizontal overflow | Pass |
| Route selector remains visible and usable below the mission text | Pass |

## Optional tool position

| Tool | Core use | Fallback or boundary |
| --- | --- | --- |
| ChatGPT Sites | Physical-product storefront | Digital fallback when Stitch is unavailable after two minutes |
| Google Stitch | App and service prototype | Use static or simulated data; do not add authentication, payments, or live integrations |
| Pomelli | Optional campaign exploration from a public website URL | Do not assume a prototype-only link will work |
| Google Flow | Optional short-video generation from approved references | Use an editor, browser loop, or three-frame animatic if access or credits fail |
| Adobe Express or similar editor | Preserve real product and interface references while composing campaign assets | Reliable fallback when generation redraws the product or interface |

The Stitch workflow is based on Google's current ability to use `DESIGN.md` as a portable design-system source and generate connected prototypes:

- [Introducing vibe design with Stitch](https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/)
- [Stitch DESIGN.md format](https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-design-md/)

## Remaining live risk

The package test does not sign into student Google accounts or create a live Stitch project. Access, account eligibility, generation time, and sharing controls can still vary in class. Preflight the exact accounts, use the two-minute switch rule, and keep ChatGPT Sites as the digital recovery route.
