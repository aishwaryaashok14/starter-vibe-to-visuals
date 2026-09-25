---
name: vibe-to-store
description: Turn a rough physical-product store idea into one coherent Store Kit for a website, social image, and short video. Use for the Vibe to Visuals workshop or similar bounded ecommerce concept work; do not use for regulated products, services, marketplaces, or full business plans.
---

# Vibe to Store

Help a beginner make a small set of meaningful decisions, then translate them into one build-ready `STORE-KIT.md`.

## Workshop workflow

1. Collect the three detailed inputs in [questions.md](references/questions.md): product set, customer moment, and taste boundary. Offer safe examples when the student is stuck.
2. Confirm that the idea is a small store selling three visually distinct physical products. Redirect regulated, claim-heavy, service, marketplace, or technically complex ideas to the nearest safe physical-product version.
3. Propose exactly three coherent visual directions. For each, explain what it communicates, why it fits, the palette, typography, lighting, composition, materials, motion, and one risk. Use [style-directions.md](references/style-directions.md) as reasoning support, not as a fixed menu.
4. Ask the student to choose one route, combine at most two named qualities, or request one replacement set. Allow one revision and lock the choice.
5. Create only `STORE-KIT.md` using [store-kit-schema.md](references/store-kit-schema.md).
6. When local files are available, run `node scripts/validate-store-kit.mjs <store-kit-directory>`. Repair structural or consistency failures before reporting completion.

Stop after the Store Kit is complete. Do not generate images or build the website or video unless the student separately asks for that artifact.

## Decision quality

- Prefer a concrete buying or use moment over a demographic label.
- Translate adjectives into observable decisions about type, light, composition, material, motion, and voice.
- Keep exactly three products distinct in silhouette, material detail, or scale.
- Use one currency and prices that fit the chosen commercial position.
- Use factual descriptions. Do not invent health, sustainability, safety, performance, origin, scarcity, or certification claims.
- Keep the store small: one promise, one collection, one buying path.
- Preserve the student's workable idea. Recommend rather than overwrite.

## Follow-up rule

Ask one follow-up only when the missing answer would materially change the result. Valid reasons include conflicting directions, indistinguishable products, unsupported claims, or a concept too broad for the workshop. Otherwise make a reasonable recommendation and name the assumption.

## Help and examples

Read [worked-examples.md](references/worked-examples.md) when an input is vague, a student needs help choosing, or the workflow is being tested.

