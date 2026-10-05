---
name: Robert Cowell Advisory — homepage studies
description: Three coded expressions of an independent operator-led advisory identity.
colors:
  ink: "#0c0c0c"
  charcoal: "#151515"
  paper: "#d8d8d4"
  paper-dark: "#c8c8c3"
  muted: "#aaa9a3"
  orange: "#ff4d00"
  line-dark: "rgb(12 12 12 / 22%)"
  line-light: "rgb(216 216 212 / 20%)"
  orange-hover: "#ff6a29"
  placeholder: "#30302e"
  placeholder-copy: "#bdbdb7"
  review-surface: "#202020"
typography:
  display-operator:
    fontFamily: "Switzer, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(56px, 6.9vw, 99px)"
    fontWeight: 600
    lineHeight: 0.99
    letterSpacing: "-.04em"
  display-perspective:
    fontFamily: "Switzer, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(60px, 8.4vw, 120px)"
    fontWeight: 600
    lineHeight: 1.03
    letterSpacing: "-.04em"
  display-intervention:
    fontFamily: "Switzer, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(68px, 9vw, 132px)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-.04em"
  headline:
    fontSize: "clamp(42px, 4.2vw, 64px)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-.035em"
  title:
    fontSize: "23px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-.025em"
  body:
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.65
  hero-body:
    fontSize: "clamp(17px, 1.45vw, 20px)"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontSize: "10px"
    fontWeight: 500
    letterSpacing: ".13em"
rounded:
  review-link: "3px"
spacing:
  page-gutter: "clamp(24px, 5.6vw, 88px)"
components:
  button-primary:
    backgroundColor: "{colors.orange}"
    textColor: "{colors.ink}"
    padding: "17px 22px"
  button-primary-hover:
    backgroundColor: "{colors.orange-hover}"
  button-perspective:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "17px 22px"
  button-intervention:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "17px 0 12px"
  review-selected:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.review-link}"
    padding: "8px 14px"
---

# Design System: Robert Cowell Advisory

## Overview

**Creative North Star: "Shared design system and three homepage studies"**

This is the existing direction contract, now documented from the implemented React components and CSS. No single alternative has been selected. The three studies share direct commercial language, generous space, early credibility, Switzer typography and charcoal, warm grey and vivid orange fields. Sqwyz remains the tone and layout reference; Catalin Vintila remains the typography and palette reference. The user brief is the visual authority.

The presence is personal and practical: one independent operator and advisor. Block-colour emphasis gives the important phrases weight. Grey labelled image placeholders are deliberate review assets, required by the user. The review interface is separate from the eventual published identity.

**Key Characteristics:**

- Large uppercase statements with tight tracking and rectangular emphasis.
- Flat, generous layouts with fine rules and measured supporting copy.
- Three distinct compositions using one palette and type family.
- Labelled grey image placeholders and restrained interaction.

## Colors

### Primary

Orange supplies the headline highlights, Operator CTA, directional icons and Intervention opening field. Operator is predominantly dark; Perspective predominantly warm grey; Intervention begins with a full orange field. The orange area is intentionally different in each direction.

### Neutral

Ink provides the main dark surface and light-surface text; paper provides warm-grey backgrounds and dark-surface primary copy. Muted supplies secondary copy on dark backgrounds. Dark and light translucent rules divide the corresponding surfaces. Charcoal and paper-dark remain declared source tokens, but are not currently assigned to rendered components.

The placeholder surface and copy are subdued greys. The review-surface token records the separate review shell. Context-specific supporting greys remain in `src/styles/site.css`; they are not a new palette system.

## Typography

Switzer is hosted locally at weights 400, 500, 600 and 700, with `font-display: swap`; Helvetica Neue, Arial and sans-serif are the fallbacks. All roles inherit that family. Headlines use uppercase, tight tracking and orange or black inline rectangular marks; body copy remains sentence case.

The frontmatter records desktop role values. Hero text is capped at about 43–44 characters per line; situation descriptions at 47, accordion descriptions at 54. Credential headings use 16px on desktop and 18px on mobile. The wordmark uses 25px/600 with a small uppercase advisory descriptor; mobile reduces it to 22px.

Display sizes adapt by direction: at 760px and below Operator uses `clamp(48px, 10.9vw, 76px)`, Perspective `clamp(40px, 9.8vw, 72px)` and Intervention `clamp(47px, 12vw, 88px)`. Perspective receives a further 9.6vw adjustment below 360px. These are observed implementation values, not a uniform type scale.

## Layout

The shared container has a maximum width of 1440px and fluid page gutters from the frontmatter. Base body minimum width is 280px. Major layout breakpoints are 1100px and 760px; 360px adds compact corrections, while 1600px caps the inset Perspective proof panel at 1280px. Desktop situations use 100px top and 78px bottom padding; mobile uses 60px and 45px.

### Preserved direction contracts and built expressions

All three are persuasion surfaces containing hero, operating background and buyer situations only. Surface seed `96a5590c` records the original exploration; the user-pinned three-direction scope takes precedence over one assigned composition. No generated comps were requested.

**Operator — Strategy only matters if the business moves.** Dark personal presence, large portrait, warm-grey credibility strip. The opening places the bold orange-marked statement beside a portrait placeholder in a 1.16fr/1fr grid. Credentials follow as a compact strip and situations as two open columns. At 1100px the credibility intro separates from its grid; at 760px the hero, credentials and situations stack. The portrait changes from 4:5 to a wider 1.3 aspect ratio on mobile.

**Perspective — Clear thought produces practical progress.** Warm-grey editorial space, black type and an inset dark proof panel. The second headline line aligns right on desktop, above a three-part margin note, supporting copy and small portrait arrangement. Situations use three columns, two at 1100px, one at 760px. On mobile the headline aligns left, the small portrait stays beside the margin note, supporting copy moves beneath them, and the dark proof panel spans the viewport width.

**Intervention — A difficult priority needs decisions, ownership and delivery.** Orange opening field, black headline emphasis and a static down-right arrow. The supporting copy and delivery sequence form two columns. Dark operating experience includes a working-photo placeholder. Situations use a split heading-and-accordion layout; these groups stack at 760px and the hero arrow shrinks further at 360px.

## Elevation & Depth

The implementation has no shadows. Depth comes from alternating colour fields, inset panels, whitespace and thin rules. The sticky review bar uses z-index 10; the keyboard skip link uses 20. No blurred surfaces or raised cards are present.

## Shapes

Buttons, highlight blocks, placeholders and section panels have sharp rectangular corners. Only review navigation links use the small radius declared in the frontmatter. Lucide stroke icons supply arrows, scan marks, plus and check symbols. Headline highlights use cloned box decoration so wrapped marks retain their backgrounds.

## Components

### Calls to action

The shared CTA is a link to `#situations`, labelled “See where I can help,” with a down-right arrow. Operator uses the orange filled variant; Perspective the dark filled variant; Intervention a transparent underlined variant on orange. The arrow shifts 3px right and down on hover. Mobile links have a 52px minimum height. Focus uses the global current-colour 2px outline with 6px offset.

### Navigation and review shell

The site header links to operating background and situations; the wordmark returns to the top. Links have a minimum 44px height and underline on hover. At 760px the experience link is hidden and the situations link remains. A focus-revealed skip link precedes the review bar.

The sticky labelled review bar switches shareable `?direction=operator`, `?direction=perspective` and `?direction=intervention` routes. Selected links expose `aria-current="page"` and a check icon. The review label hides at 1100px; scope link and checks hide at 760px. The footer explains the active study and scope and links to the next study. These are review tools to remove from the eventual published site.

### Credibility and situation entries

Credentials are type-led columns with rule dividers rather than raised cards. Situation articles have a fine top rule, heading, supporting copy and decorative arrow; the articles are not clickable. Their placement and column count vary by direction as described above.

### Accordion

Intervention uses native `details` and `summary`; the first item starts open, and multiple items can remain open. A plus rotates 45 degrees when expanded. Hover brightens the summary text; keyboard focus receives the global outline. Content appears through native disclosure, with no height animation.

### Image placeholders

Grey figures contain image direction, title, caption and format label. Operator uses a large portrait; Perspective uses a small compact portrait; Intervention uses a landscape working-image placeholder. The landscape label says 16:9, but its implemented container uses a 205px minimum height rather than a fixed aspect ratio. Do not imply final photography has been supplied.

### Motion and accessibility

CTA arrow motion uses 300ms and the shared ease-out curve; accordion icons use 250ms. Review-link and button background changes use 200ms. Reduced-motion preference removes transitions and animation and changes smooth scrolling to immediate scrolling. There is no scroll-jacking, custom cursor, autoplay or content hidden on initial load beyond native closed disclosures. There are no inputs or forms in this scope.

## Do's and Don'ts

### Do:

- **Do** preserve the shared type, palette and sharp rectangular emphasis across all three studies.
- **Do** keep the direction-specific composition and responsive behavior when extending a selected study.
- **Do** retain labelled grey placeholders until real user-supplied imagery is available.
- **Do** preserve keyboard focus, native disclosure semantics and reduced-motion support.
- **Do** distinguish review controls and draft career signals from publishable site content.

### Don't:

- **Don't** replace the user-pinned reference system with a new visual world.
- **Don't** add generated or stock imagery to these studies.
- **Don't** turn static situation articles into apparent links without implementing an action.
- **Don't** invent numerical outcomes, clients, testimonials or contact details; supplied career signals require confirmation before publication.
- **Don't** treat three coded alternatives as approval of a single final direction or expansion beyond the first three sections.

## Fourth direction: Combined

The original three layouts remain available. `?direction=combined` is a full ten-section homepage, using Intervention's headline and copy with Operator's dark palette and grey portrait; Perspective's credibility component inside a warm-grey surround; and Operator's situation rows. Highlights are scoped to the combined theme with a flat orange pseudo-element inset .13em from the top and .04em from the bottom. Contact reverses this to black on orange.

Remaining sections: four open work-area rows; three explicitly pending case studies; four principles; two labelled testimonial placeholders; career narrative and working-photo placeholder; three engagement routes; orange contact close. Evidence and contact details are not fabricated. Navigation links to homepage sections.

Source: src/homepageContent.ts, src/components/HomepageContinuation.tsx and src/styles/combined.css. At 760px grids stack; at 360px long headings reduce to 28px. The fourth direction extends the type ramp deliberately with 9/10/11/12/13/14/15/16/17/18/20/22/23/24/25/26/28px supporting roles, 38–64px section headings and 58–106px hero type. Inherited neutral text tones #4b4b45 and #3a3a36 remain; #55554e serves light-surface secondary text, and #282826 is a grey testimonial-placeholder surface. These are intentional accessible neutral roles, not a new accent palette. The detector's new findings were advisory documentation differences for these size and colour values.

## Mark 2 — separate /mark-2 page
Same Switzer/charcoal/warm-grey/orange system, compact block highlights. Five sections replace ten: proposition with credentials; three situations with contribution; career-wide evidence with integrated endorsement; person plus approach; engagement plus contact. Typography and spacing use the existing visual vocabulary with 76px desktop and 50px mobile section spacing, 607 words including placeholder guidance. One large evidence image replaces repeated equal cards. All styles use m2-prefixed classes, preserving older pages. Pending case studies and endorsements are explicitly labelled. Actual executive assignments may lead selected work.


## Mark 2 hero review
Three scoped hero explorations use the same visual system: outcome-first Progress, personal Operator and interactive Your priority. Details and verification are in HERO-REVIEW.md. New scoped CSS retains inherited neutral colours (#282826 and #4b4b45) and uses #777770 only for decorative separators. Hero type scales from 41–96px depending on variant and viewport; supporting type uses 10–28px existing roles. The detector reports advisory type/palette documentation differences only. Lower-page sections are byte-identical to the previous version.

