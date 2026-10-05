# Mark 2 hero explorations

Open `/mark-2?hero=progress`. The three labelled buttons switch in place; Previous and Next cycle with wraparound. Links are shareable and a refresh keeps the chosen variant. Keyboard activation uses native buttons and pressed-state semantics. Nothing cycles automatically.

- `hero=progress`: outcome-first. Familiar headline with shorter supporting copy, strong scan hierarchy, explicit remit and two clear paths.
- `hero=operator`: person-first. First-person experience, a portrait with a name panel, direct contact language and a link from operating accountability to evidence.
- `hero=priority`: situation-first. User-controlled Strategy/Performance/Growth choices update the explanation, CTA wording and portrait caption. Choice adds relevant information rather than decorative motion. All CTAs reach the existing contact section; no enquiries are transmitted.

Broad split layout, Switzer, near-black/warm-grey/orange palette, compact highlight blocks and grey labelled portraits are retained. Credentials stay consistent to support comparison. A short 5px transition orients the hero switch; content is never hidden and reduced-motion disables the transition. No new dependencies.

Source: `src/components/HeroExplorations.tsx`, `src/styles/hero-explorations.css`. MarkTwo imports this module instead of its original Opening function. Sections from Relevance through Conversation are unchanged, verified by source comparison. The previous hero source is backed up in workspace work/hero-baseline.

Verification: production build passes; all three at 320, 390, 768 and 1440px have no horizontal overflow and one H1. Priority click and Enter activation update the correct heading and CTA. Numbered selectors and cycle arrows work. Original Mark 1 and earlier route logic remains intact.
