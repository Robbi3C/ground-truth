# Decisions and services

Key decisions about how the site is built, hosted and run, and the third-party services it depends on. Update this when something changes.

Last updated: 2 November 2026.

## Services and accounts

| What | Service | Notes |
|---|---|---|
| Hosting | **Vercel** | Deploys automatically on every push to `main` on GitHub. Routing config in `vercel.json`. |
| Source code | **GitHub**: `Robbi3C/ground-truth` | `main` is the live branch. |
| Domain / DNS | **Cloudflare** | Primary domain `groundtruthconsulting.co` (see README for Vercel setup). |
| Contact form | **Formspree**, free plan | Endpoint `https://formspree.io/f/mljjoebo`. Account login is the **rcowellai** email address. 50 submissions a month on the free plan. |
| Email | `rob@groundtruthconsulting.co` | A forwarding address only. Mail forwards to Robert's personal Gmail. It has no mailbox or calendar of its own. |
| Booking | Not set up yet | See "Booking calls" below. |

## Stack

- React, TypeScript and Vite. A static site with no backend and no environment variables.
- Routing is handled by hand in `src/App.tsx` (`/`, `/work`, `/work/<slug>`, `/contact`). Any new route also needs a rewrite in `vercel.json`, or a direct visit returns a 404 on Vercel.
- Icons: `lucide-react`.
- Dialogs: `@radix-ui/react-dialog`, which handles behaviour only and comes with no styling. Chosen for reliable focus handling, Esc and outside-click closing, and scroll locking on iOS, without imposing any styling.
- Fonts are self-hosted in `public/fonts/` (Switzer, Plus Jakarta Sans for the logo).
- Colour: the Oat & Petrol palette, dark by default, with a light/dark toggle. Palette values live in `src/styles/tokens.css` and `src/styles/palettes.css`.
- Accent (`--orange`, name kept from the original palette) is a different shade in each mode, because one shade can't read well on both backgrounds:
  - Dark mode: **#61ADB7**. Chosen 2 November 2026 as a slightly calmer version of the original #5BB4C0, which felt too bright and youthful. The deep light-mode petrol, the midpoint #64A9B3 and more muted options (sea glass, dusty petrol, sage, brass) were also tried and rejected.
  - Light mode: **#1D5A6B** (deep petrol).
  - Text on the accent must stay readable (at least 4.5 : 1). In dark mode it is near-black text on the accent (about 7 : 1). Don't use the deep petrol in dark mode: near-black text on it drops to about 2.4 : 1.

## Contact flow

- **Every "Let's talk" link points to `/contact`.** On the site, a click opens a slide-in panel instead of navigating, so visitors keep their place. On phones the panel is full screen. Direct visits, shared links and Ctrl/Cmd-clicks open the standalone `/contact` page. One form component serves both (`src/components/contact/`).
- **Short form first:** name and work email are required. Company, "What would you like help with?" (Ongoing advisory / A defined project / Fractional or interim / Not sure yet) and "What's going on?" are optional. This is kept short to maximise completion; the optional fields help with screening.
- **Why not a plain email link:** many visitors use webmail, so a mail link often opens nothing. It also gives no prompt for what to write and can't be measured.
- **Why not an embedded form builder** (Typeform, Tally, HubSpot): they load in an iframe, look off-brand and load slowly, and behave badly on mobile.
- **On submit:** Formspree emails the enquiry to the account address with the subject "New enquiry from [name]". Replying replies to the sender. Submissions are also kept in the Formspree dashboard. A hidden honeypot field filters spam bots. The visitor sees an on-page thank-you ("I'll be in touch within one working day"). No confirmation email is sent, because that is a paid Formspree feature.
- **Copy tone:** plain and understated. Avoid salesy reassurance lines.
- Email and LinkedIn stay visible under the form and in the homepage close for people who prefer them.

## Booking calls (deferred)

Plan, when ready: offer "book a 20-minute call" on the form's thank-you screen and as a small link under the form.

- **Booking tool:** Calendly (recommended because executives recognise it and it's reliable; the free plan covers one meeting type). Cal.com is the alternative.
- **Calendar:** rob@ has no calendar, and connecting the personal Gmail calendar would likely expose that address on client invites. Fix for free: create a **free Google account using `rob@groundtruthconsulting.co` as the login** (no Gmail address needed), share the Gmail calendar to it so clashes are checked, and connect Calendly to that account. Google Workspace (paid) was rejected on cost.
- **Email replies** to enquiries currently go out from the personal Gmail. Gmail's "Send mail as" can fix this, but it may need outgoing-mail (SMTP) details from the forwarding provider.

## Layout decisions

- **No "Let's talk" in the phone header.** The header doesn't stay on screen as you scroll, and the hero button sits just below it, so a header button would only duplicate it. If a persistent mobile call to action is wanted later, use a header that reappears on scroll-up, not a floating button.
- **Header back links are hidden on phones** (≤560px). They overflowed next to the theme toggle, and the logo already links home.
- **Section backgrounds alternate down the homepage** (dark hero, charcoal services, dark case studies, charcoal About, accent close). Two neighbouring sections with the same background each add their own padding, which doubles the gap. Keep neighbouring backgrounds different, or separate them with a divider line, as the case study pages do.

## Open items

- Booking link (see above).
- Optional: "Let's talk" links in the services section could pre-select the matching help option in the form.
- Before public launch: remove `noindex, nofollow` from `index.html` and confirm career figures and case outcomes (see README).
