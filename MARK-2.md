> Current status: Ground Truth is the only active homepage, served at / and /mark-2. Mark 1 and its original concept components/styles have been removed. Plus Jakarta Sans is the fixed logo font. Any earlier-version descriptions below are historical.

# Mark 2 — separate homepage

Open `/mark-2` (local production preview: http://localhost:5175/mark-2).

Mark 1 remains `/?direction=combined`; original Operator, Perspective and Intervention routes are unchanged. Mark 2 has its own page module and scoped CSS, with shared font/palette tokens and the existing labelled image placeholder.

## Narrative

1. Proposition plus compact operating credentials.
2. Three buyer situations, each explaining the contribution; no second services catalogue.
3. Career-wide evidence, with a featured example, a supporting example and an endorsement within one block. Executive work can lead; factual role/context must be identified.
4. Personal background connected to working approach.
5. Flexible engagement and direct contact in one close.

Approximately 607 main-content words including placeholder guidance, versus approximately 1,188 in Mark 1. No fabricated cases, testimonials, numbers or contact details. Evidence slots remain pending until approved information is supplied. These are design-review placeholders and not publish-ready claims.

Source: `src/pages/MarkTwo.tsx` and `src/styles/mark-two.css`. The only existing page implementation change is a route branch in App.tsx. Keep Vite/SPA fallback to index.html when deploying this path. All existing assets and compiled output remain in the main project.

Validation: TypeScript and Vite production build pass; five semantic sections, one H1, valid anchor destinations; no horizontal overflow at 320, 390, 768 or 1440px. Earlier variants retain their section counts. Reduced-motion support inherited, CTA movement locally scoped.

