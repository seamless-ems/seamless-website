# Seamless Events — Marketing Website

## Stack
React + TypeScript + Vite + React Router + Tailwind CSS (arbitrary values throughout). No backend — contact form posts to `VITE_API_URL/mail/contact`.

## Dev
```
npm run dev
```
Runs on port 5173 (falls back to 5174 if taken).

## Brand tokens (use these, not one-offs)
| Token | Value |
|---|---|
| Accent | `#4e5ca6` |
| Accent hover | `#3d4a8f` |
| Accent light bg | `#eef0f9` |
| Accent border | `#c8cde8` |
| Ink | `#111827` |
| Muted text | `#6b7280` |
| Page bg | `#faf8f5` |
| Border | `#e5e7eb` |

## North star
Notion / Stripe / Linear — premium, restrained, confident. No unnecessary decoration.

## Key components
- `Wordmark` — always use this for the brand name. Never write the two spans by hand. Accepts `size` prop (default 22, modals/footer use 18).
- `Footer` — shared across all pages. Contains: Contact · Log in · Privacy Policy · Terms & Conditions · © year.
- `DocLayout` — wraps all legal pages (Privacy, Terms, Cookie). Includes nav + footer.
- `Features` / `CTA` / `Benefits` — used on both Learn More and (via shared components) the main product flow.

## Pages & routes
| Route | File | Notes |
|---|---|---|
| `/` | `pages/Index.tsx` | Hero + Footer |
| `/learn-more` | `pages/LearnMore.tsx` | Features → CTA → Benefits → Footer |
| `/contact` | `pages/ContactForm.tsx` | Standalone card, no shared nav |
| `/privacy-policy` | `pages/PrivacyPolicy.tsx` | DocLayout |
| `/terms` | `pages/Terms.tsx` | DocLayout |
| `/cookie-policy` | `pages/CookiePolicy.tsx` | DocLayout |

## Nav conventions
**Hero nav (homepage):** See Pricing (outlined border) · Try Now (filled). Log in lives in the footer only.
**Learn More nav:** Book a Demo (outlined border) · Try Now (filled). No Log in in nav.
**DocLayout nav:** Try Now (filled) only.
**Mobile (homepage):** Hamburger → Pricing · Book a Demo. No Log in in hamburger.

Visual hierarchy rule: text link < outlined border < filled. Never two buttons at the same visual weight competing.

## Hero slideshow
7 slides, 4200ms interval, scale+fade transition (750ms). `animate-border-pulse` on the card. Badge sits `bottom-[-16px] right-7` — outside the image wrap, inside the card div.

## Calendly link
`https://calendly.com/james-ruleyproductions/seamless-events` — used for all "Book a Demo" CTAs. Constant `CALENDLY` in `Hero.tsx`.

## CSS keyframes (in `index.css`)
- `animate-border-pulse` — slow glow on hero slideshow card
- `animate-border-glow` — glow on pricing card
- `modal-in` — entry animation for modals (`animate-[modal-in_0.2s_ease]`)
- `.doc-wrap` — prose styles for legal page content

## Decisions & rationale
- **Log in in footer only** — marketing site audience is new prospects; existing customers will find it. Keeps nav uncluttered.
- **Mobile CTA = Book a Demo** — desktop-first product; prospects on mobile want to talk, not sign up.
- **Learn More is a text link, not a button** — secondary body CTA should not compete with the primary action button.
- **No hamburger on Learn More** — mobile nav is Logo · Try Now only, clean enough without a drawer.
- **`Wordmark` component** — single source of truth for brand name rendering across 7+ locations.
