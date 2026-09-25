# Lean starter-kit test run

Test date: 25 September 2026

## What changed

The participant-facing source set now contains one written source, `STORE-KIT.md`, and one visual source, `product-family.png`. Reusable prompts remain in the guide. ChatGPT Sites is the primary website route. The HTML starter remains only as a recovery build, and JSON is not a student deliverable.

ChatGPT Projects use `PROJECT-INSTRUCTIONS.md` as Project instructions. Codex uses the included `$vibe-to-store` skill. Both routes use the same three inputs, direction choice, Store Kit structure, build prompts, and evidence gate.

## Test scenario

The custom route used:

- Product set: a focus timer, pen rest, and catch-all tray.
- Customer moment: students resetting a crowded desk before a late study session.
- Taste boundary: considered but attainable, tactile after-dark mood, and no gaming imagery.
- Chosen direction: Night Study.

The resulting test store is Dusk Desk. Its lean source and reference images are in `test-run/dusk-desk`.

## Results

| Area | Result | Evidence |
| --- | --- | --- |
| Skill structure | Pass | A structure check accepted the frontmatter, folder name, linked references, and completed instructions. |
| Soft Hours Store Kit | Pass | The deterministic validator found one source file, all required sections, three complete product rows, five colours, six campaign lines, and five avoid items. |
| Dusk Desk Store Kit | Pass | The same validator accepted the independent example without catalog, prompt-pack, or JSON files. |
| Source reduction | Pass | The four student source files became one written source. Reusable prompts moved to the guide. |
| Setup parity | Pass by inspection | Project instructions and the Codex skill use the same interview, route-choice rule, Store Kit contract, and stopping point. |
| Guide flow | Pass | Every artifact prompt reads `STORE-KIT.md`; the website prompt now creates and publishes the store through ChatGPT Sites. |
| Sites build contract | Pass by inspection | The bounded prompt requires the exact promise, three products, product view, working cart, mobile check, private publication, and explicit non-goals. |
| HTML recovery starter | Pass | The starter remains self-contained and can be completed directly from the product table if Sites is unavailable. |
| Recovery route | Pass | Soft Hours now needs only one Store Kit and one product-family image. |

## Optional tool route audit

| Route | Workshop fit | Live risk | Decision |
| --- | --- | --- | --- |
| ChatGPT Sites | Strong fit for building and publishing the complete storefront directly from the Store Kit and product reference. | Sites access must be available on the classroom accounts. New Sites start private, so Pomelli cannot use the URL unless its audience changes. | Primary website route; preflight access and preserve private sharing by default. |
| Pomelli | Strong fit for turning a public store URL into editable campaign concepts. | Its launch availability was region-limited, so it may not be accessible to every student. | Optional demonstration or student lane; never part of the core evidence gate. |
| Google Flow | Strong fit for a reference-image plus prompt video route. | Access, daily credits, peak-hour generation, and watermarks vary by account and country. | Optional lane; preflight the exact accounts and keep an assembly fallback. |
| Adobe Express | Useful for composing the social frame and assembling a short video without relying on generation. | Some generative features have separate limits or eligibility. | Free-editor fallback; the basic composition route is enough. |
| CapCut | Useful for trimming and sequencing the hook, product, and payoff frames. | AI features and availability can vary. | Use as an editor, not as a promised generation service. |
| Browser loop or three-frame animatic | Produces the required evidence without another account or generation queue. | Export may need a screen recording or may remain a browser artifact. | Reliable no-generation fallback. |

The audit used current product guidance and checked whether each route can satisfy the same artifact contract. It did not create Sites or log into student accounts. A classroom device and account preflight is still required.

Official references checked:

- [Pomelli launch and URL-to-campaign workflow](https://blog.google/innovation-and-ai/models-and-research/google-labs/pomelli/)
- [Google Flow credits](https://support.google.com/flow/answer/16526234?hl=en)
- [Google Flow country availability](https://support.google.com/flow/answer/16353544?hl=en)
- [Adobe Express plans](https://www.adobe.com/express/pricing)
- [CapCut online video editor](https://www.capcut.com/features/free-ai-video-editor)

## Remaining live risk

Sites availability, tool access, image-generation latency, and file handling can vary by student plan and classroom account. Run a short device check before the workshop and publish a simple greenlit-tool board: **available**, **optional**, and **fallback**. If Sites is unavailable, use the HTML recovery starter. If Project instructions are unavailable, paste `PROJECT-INSTRUCTIONS.md` into a normal chat and continue with the same workflow. Switch routes after two minutes without changing the required output.
