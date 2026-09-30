# Clonao Homepage Design System

Internal source of truth for the current Clonao marketing homepage. This document describes the implementation as it exists today; values below are taken from the code rather than inferred from visual references.

## Homepage composition

The homepage renders, in order:

1. Hero
2. Problem
3. How Clonao Thinks / three-card product story
4. Grounding Layer / Knowledge Sources
5. FAQ
6. Final CTA
7. Shared footer

The marketing shell supplies the sticky navbar before the page and the footer after it. The homepage itself is a React Server Component except for interactive child components.

## 1. Typography

### Typeface

- Primary typeface: Geist Sans from `geist/font/sans`.
- The font variable is attached to `<html>` and the body uses Tailwind `font-sans`.
- No Geist Mono is currently used on the homepage.
- No editorial serif is currently used in the production homepage implementation.

### Weight and tracking conventions

- Large headings: generally `font-semibold` (600).
- UI labels and navigation: usually `font-medium` (500) or `font-semibold` (600).
- Body copy: default 400 unless a component explicitly uses `font-medium`.
- Tight display tracking uses `tracking-tightest`, defined as `-0.045em`, or inline values between `-0.045em` and `-0.07em`.
- Eyebrows use uppercase `tracking-[0.22em]`.
- Footer group labels use uppercase `tracking-[0.16em]`.

### Current scale by area

| Area | Desktop | Tablet | Mobile | Alignment |
| --- | --- | --- | --- | --- |
| Hero headline | `lg:text-[4.5rem]`, `font-semibold`, `leading-[1.04]`, `tracking-tightest` | `sm:text-6xl` | `text-[2.75rem]` | Center |
| Hero body | `sm:text-lg`, `leading-8` | Same | `text-base`, `leading-7` | Center |
| Problem headline | `lg:text-6xl`, `leading-[1.06]`, `tracking-tightest` | `sm:text-5xl` | `text-4xl` | Center |
| Intelligence headline | `lg:text-[4.15rem]`, `leading-[0.98]`, `tracking-[-0.065em]` | `sm:text-5xl` | `text-4xl` | Center |
| Grounding headline | `lg:text-[4.1rem]`, `leading-[1.02]`, `tracking-[-0.06em]` | `sm:text-5xl` | `text-4xl` | Left |
| FAQ headline | `lg:text-[3.2rem]`, `leading-[1]`, `tracking-[-0.06em]` | `sm:text-5xl` | `text-4xl` | Left |
| Final CTA headline/subline | `lg:text-[2.15rem]`, `leading-[1.1]`, `tracking-[-0.045em]` | `sm:text-2xl` | `text-xl` | Right |
| Navigation | `text-sm`, `font-medium` | Hidden below `lg` | Mobile links `text-[0.9375rem]`, `font-medium` | Right / stacked mobile |
| Standard body | `sm:text-lg` where emphasized, otherwise `text-base` | Same | `text-base` | Section-specific |
| FAQ rows | `sm:text-[1.35rem]`, `leading-tight` | Same | `text-base` | Left |

The main storytelling headings are centered in Hero, Problem, and How Clonao Thinks. Grounding, FAQ, and Footer use left-oriented editorial structure. The Final CTA is currently right-aligned with `ml-auto` and `text-right`; its desktop headline is forced to one line with `lg:whitespace-nowrap`.

## 2. Color palette

### Shared CSS variables in `src/styles/globals.css`

```css
--background: 0 0% 99%;
--foreground: 222 34% 12%;
--surface: 0 0% 100%;
--primary: 222 34% 12%;
--primary-foreground: 0 0% 100%;
--secondary: 210 35% 96%;
--secondary-foreground: 222 34% 12%;
--muted: 210 27% 95%;
--muted-foreground: 216 15% 44%;
--accent: 209 97% 68%;
--accent-foreground: 222 34% 12%;
--brand: 209 97% 68%;
--brand-foreground: 222 34% 12%;
--border: 214 24% 88%;
--input: 214 24% 88%;
--ring: 209 97% 60%;
--shadow-soft: 0 12px 40px -24px hsl(222 34% 12% / 0.22);
--shadow-medium: 0 20px 55px -28px hsl(222 34% 12% / 0.24);
--radius: 0.75rem;
```

### Clonao atmospheric tokens

```css
--clonao-blue-top: #0b4dff;
--clonao-blue-upper: #2d7cff;
--clonao-blue-middle: #8ccbff;
--clonao-blue-lower: #dceeff;
--clonao-white: #f8fbfd;
```

These tokens are used by `.hero-atmosphere`. Most component-specific colors are currently inline Tailwind values rather than variables.

### Frequently used literal colors

- Primary navy/charcoal text: `#101826` and `#132238`.
- Foreground token equivalent: HSL `222 34% 12%`.
- Secondary text: `#5f7080`, `#647384`, `#657789`, `#7893a6`, and `#536273` depending on section.
- Cool white page surfaces: `#f8fbfd`, `#fbfdff`, `#fdfdfd`.
- Intelligence surface: `#f5f9fc`.
- Borders/dividers: `#d7dde3`, `#dce6ee`, `white/90`, `white/95`, and `white/[0.12]` in the footer.
- Brand blue accent: `#3977a9`, `#2563a6`, CSS brand `hsl(209 97% 68%)`.
- Connector charcoal: `#334155` at `1.15px` with `0.82` opacity.
- Footer: `#000000` with white and white-opacity text.
- Dark CTA base: `#101826` where used elsewhere.
- Metallic CTA source colors: `#54a9ef`, `#1f64a4`, `#0c3666`, with pale blue border `rgb(135 202 255 / 0.42)`.

### Source and UI accent colors

The showcase cards use source accents: LinkedIn `#0A66C2`, Website `#2563EB`, PDFs `#E53935`, Notes `#F4B400`, Videos `#FF0000`, Podcasts `#A855F7`. Diagnosis/recommendation icons use `#2563EB`, `#38BDF8`, `#8B5CF6`, and `#EF4444`.

## 3. Backgrounds and transitions

### Hero

- CSS class: `.hero-atmosphere`.
- Solid-to-atmospheric vertical gradient:
  - `#0b4dff` at 0%
  - `#2d7cff` at 24%
  - `#8ccbff` at 52%
  - `#dceeff` at 78%
  - `#f8fbfd` at 100%
- No blur, noise, blobs, or overlay is applied to the hero background itself.
- White hero typography sits over the full gradient.

### Problem

- Solid `#fdfdfd`.
- The five bento cards use five separate 1280×960 JPG gradient assets with `bg-cover bg-center`.
- Each card adds a translucent dark-blue linear overlay: `linear-gradient(155deg,rgba(8,51,88,0.08),rgba(8,51,88,0.64))`.

### How Clonao Thinks

- Solid cool surface `#f5f9fc`.
- No section gradient.
- The three showcase cards use restrained gray/blue liquid-glass gradients, `backdrop-blur-2xl`, translucent white borders, and soft shadows. Their surfaces are CSS-generated rather than image assets.

### Grounding / Knowledge Sources

- Section surface: `#f8fbfd`.
- Main diagram panel uses `/ethereal-aqua-gradient.jpg` with `bg-cover bg-center`.
- A `bg-white/10` absolute overlay softens the image.
- Panel: rounded `1.75rem`, translucent white border, and a cool blue shadow.
- The source-to-Clonao-to-Brand Graph diagram is HTML/SVG/CSS, not a screenshot.

### FAQ

- No section-specific background class; it inherits the marketing page surface/body background.
- Dividers are thin `#d7dde3` lines.
- No cards, shadows, gradients, or decorative surfaces.

### Final CTA

- Vertical CSS gradient: `#f8fbfd 0% → #e8f4fd 48% → #f8fbfd 100%`.
- CTA itself uses the shared metallic blue gradient.

### Footer

- A dedicated 6rem transition strip fades vertically from `#f8fbfd` through `#cbd2d9` and `#4a5057` to `#000000`.
- Footer content is solid black; no gradient is used inside the content area.
- Footer surfaces use white-opacity text and a subtle white divider.

There are no hard section borders between the major marketing surfaces beyond local card/divider borders. The CTA-to-footer transition is intentionally the only strong atmospheric handoff.

## 4. Images and visual assets

| Asset | Dimensions | Use | Treatment |
| --- | ---: | --- | --- |
| `/public/clonao-logo.png` | 800×800 PNG | Navbar, footer, Grounding center card | `object-contain`; navbar uses `size-9 sm:size-10`; footer uses `size-9 sm:size-10` and `brightness-0 invert`; Grounding uses a smaller responsive box |
| `/public/clonao-demo.png` | 1280×960 PNG | Hero product demo | Next/Image, priority loading, `w-full h-auto`, max width 1040px; product screenshot includes the app and founder-style face-cam presentation |
| `/public/dreamy-blue-gradient.jpg` | 1280×960 JPG | Problem card 01 | CSS `backgroundImage`, `bg-cover bg-center`, scaled 1.05 and subtly scales to 1.10 on hover |
| `/public/ethereal-aqua-gradient.jpg` | 1280×960 JPG | Problem card 02 and Grounding panel | Same card treatment; Grounding uses it as a panel background |
| `/public/lavender-blue-gradient.jpg` | 1280×960 JPG | Problem card 03 | `bg-cover bg-center`, with dark translucent overlay |
| `/public/coral-lavender-gradient.jpg` | 1280×960 JPG | Problem card 04 | Same treatment |
| `/public/pastel-aqua-gradient.jpg` | 1280×960 JPG | Problem card 05 | Same treatment |

HTML/CSS/SVG visuals:

- Problem: five image-backed editorial cards, not UI cards.
- How Clonao Thinks: three CSS liquid-glass product showcase cards with inline SVG source, diagnosis, and recommendation icons.
- Grounding: six HTML source cards, a Clonao HTML card, a Brand Graph HTML card, and responsive inline SVG connector paths.
- Grounding motion: `GroundingFlowSignals` creates tiny SVG circles and moves them with `getPointAtLength()`.
- Buttons: CSS metallic gradient and reflective pseudo-element.
- Footer transition: CSS linear gradient.

## 5. Hero breakdown

- Section is pulled under the sticky navbar with `-mt-16` and `sm:-mt-20`.
- Vertical rhythm: `pt-20 pb-12`, `sm:pt-24 sm:pb-16`, `lg:pt-28 lg:pb-20`.
- Inner layout: `marketing-container`, `flex flex-col items-center text-center`.
- Headline max width: `max-w-4xl`.
- Body max width: `max-w-xl`; centered.
- CTA sits 1.25rem below the text block on mobile and 1.5rem from `sm` upward.
- Demo max width: `1040px`, full available width, with `mt-0`; it visually sits directly below the CTA.
- Demo uses the 1280×960 PNG at responsive width and preserves aspect ratio.
- Navbar is transparent over the hero, with white logo/navigation.
- Mobile keeps the centered composition, reduces headline and demo width naturally, and replaces desktop navigation with a menu button.

## 6. Section-by-section layout

### Container

All marketing sections use `.marketing-container`, Tailwind’s centered `container w-full` utility. Container configuration is:

- default horizontal padding: `1.25rem` / 20px
- `sm`: `1.5rem` / 24px
- `lg`: `2rem` / 32px
- `2xl` container screen: `1280px`

### Problem

- Surface: `#fdfdfd`.
- Padding: `py-24`, `sm:py-28`, `lg:py-36`.
- Intro: centered `max-w-3xl`; paragraph `max-w-2xl`.
- Grid: `max-w-6xl`, `grid-cols-6`; top three cards span 2 columns each, bottom two span 3 columns each.
- Gaps: `gap-2`, `sm:gap-3`, `lg:gap-5`.
- Card heights: `min-h-[11rem]`, `sm:min-h-[14rem]`, `lg:min-h-[17rem]`.
- Card radius: `0.875rem`, `sm:1rem`, `lg:1.25rem`.
- Card padding: `p-3`, `sm:p-5`, `lg:p-8`.
- Card border: `border-white/55`; no large shadow.

### How Clonao Thinks

- Surface: `#f5f9fc`.
- Padding: `py-24`, `sm:py-28`, `lg:py-36`.
- Intro: centered `max-w-2xl`; body `max-w-xl`.
- Desktop layout: `lg:grid`, `max-w-7xl`, three equal columns, `gap-5`.
- Desktop top gap: `mt-12`, `sm:mt-14`.
- Showcase label is outside the card, centered, `2.6rem`, `sm:3rem`, `lg:3.35rem`.
- Card surface: `min-h-[24rem]`, `sm:min-h-[25rem]`, `p-5`, `sm:p-6`, `rounded-[1.625rem]`.
- Mobile: desktop cards are hidden; a normal-height sticky sequence runs in `lg:hidden` with `h-[210vh]`, a sticky `h-[70vh]` viewport, and a `max-w-xl` wrapper.

### Grounding / Knowledge Sources

- Surface: `#f8fbfd`.
- Padding: `py-24`, `sm:py-28`, `lg:py-36`.
- Copy block: `max-w-3xl`; headline/body `max-w-2xl`; left aligned.
- Diagram: `max-w-4xl`, `mt-14`, `sm:mt-16`, `min-h-[27rem]`, `sm:min-h-[30rem]`, `lg:min-h-[31rem]`.
- Diagram padding: `p-3`, `sm:p-6`, `lg:p-8`.
- Diagram radius: `1.75rem`; border `border-white/90`.
- Source cards: max width `10.5rem`, compact responsive padding, rounded `lg`/`xl`, white surface and subtle shadow.
- Clonao card: max widths `4.75rem`, `7rem`, `8.5rem`; centered in the middle grid column.
- Brand Graph card: max widths `7rem` and `11rem`; centered in the output column.
- SVG overlay is absolute and uses breakpoint-specific coordinate groups.

### FAQ

- Inherits the page surface.
- Padding: `py-24`, `sm:py-28`, `lg:py-36`.
- Heading and accordion share `max-w-5xl`; heading is left aligned.
- Accordion top gap: `mt-16`, `sm:mt-20`.
- Rows have `py-6`, `sm:py-7`, thin top/bottom dividers, and a chevron at the far right.
- One item is open initially through React state (`openIndex = 0`).

### Final CTA

- Padding: `py-28`, `sm:py-32`, `lg:py-40`.
- Content is right aligned and pushed right with `ml-auto max-w-[78rem]`.
- Headline/subline are the same compact scale: `text-xl`, `sm:text-2xl`, `lg:text-[2.15rem]`.
- CTA is directly below the subline, right aligned, `min-h-11`, `px-5`, `rounded-md`.

### Footer

- Transition strip: `h-24`.
- Content padding: `py-16`, `sm:py-20`, `lg:py-24`.
- Desktop layout: brand block on the left and navigation groups on the right, with `lg:gap-24`.
- Link groups: two columns on small screens, three columns from `sm`.
- Bottom row: `mt-16`, `sm:mt-20`, `border-t`, `pt-6`, copyright left and social icons right.
- Footer is mobile-first and stacks the brand, links, and bottom row.

## 7. Buttons

### Metallic primary CTA

Class: `.metallic-cta`.

- Hero height: `h-11` / 44px; Final CTA: `min-h-11`.
- Horizontal padding: hero `px-5`; Final CTA `px-5`.
- Radius: `rounded-md`.
- Text: `text-sm font-medium text-white`.
- Background layers:
  - `rgb(84 169 239 / 0.98)` at top
  - `rgb(31 100 164 / 0.98)` at 48%
  - `rgb(12 54 102 / 0.99)` at bottom
  - fallback `#1f64a4`
- Border: `1px solid rgb(135 202 255 / 0.42)`.
- Inset and outer shadow create the metallic depth.
- A pseudo-element creates a diagonal reflective highlight.
- Hover: `filter: brightness(1.08)`, `translateY(-1px)`, stronger shadow, highlight sweep.
- Focus: shared `focus-visible` ring, usually `#2563a6` or the global ring.

### Other button-like controls

- Mobile navbar menu: `size-10`, `rounded-md`, transparent with `hover:bg-white/10`, white icon.
- FAQ rows are semantic buttons, not visual button surfaces.
- Footer no longer has a CTA button; it only has navigation and social links.

## 8. Cards and surfaces

### Problem editorial cards

- Background is an individual gradient JPG plus a dark translucent overlay.
- `rounded-[0.875rem]` → `1rem` → `1.25rem` across breakpoints.
- Thin translucent white border.
- No standard card shadow; hover movement is the primary depth cue.
- Internal content uses white typography and large editorial titles.

### Intelligence showcase cards

- Liquid-glass surfaces are CSS gradients with cool blue-gray metallic tones.
- `border-white/80`, `backdrop-blur-2xl`, `rounded-[1.625rem]`.
- Soft section-specific shadows.
- A second absolute translucent white gradient overlay adds surface depth.
- Internal lists sit directly on the surface with subtle dividers; no nested white cards.

### Grounding cards

- Source/output cards: `bg-white/90`, white border, compact radius, soft cool shadow.
- Icon tiles: `bg-[#101826]`, white line icons, rounded `md`/`lg`.
- Clonao center card: `bg-white/70`, translucent border, `backdrop-blur-sm`, larger shadow.
- Connector layer is thin charcoal SVG.
- Particles are tiny charcoal SVG circles; Clonao and Brand Graph receive a subtle CSS scale pulse.

## 9. Navbar

- Component: `MarketingNavbar` in the shared marketing shell.
- Sticky: `sticky top-0 z-50 w-full`.
- Height: `h-16` / 64px; `sm:h-20` / 80px.
- Background: transparent; border is transparent.
- Logo link: white, `text-xl`, `font-semibold`, `tracking-[-0.045em]`.
- Logo image: `/clonao-logo.png`, `size-9` mobile and `size-10` from `sm`.
- Desktop navigation: visible at `lg` and above, `gap-7`, `text-sm font-medium`, white at 80% opacity and white on hover/active.
- Current route uses `aria-current="page"` and white text.
- There is no scroll-state color change or scroll listener in the current navbar implementation; it remains transparent.
- Mobile: desktop links hidden below `lg`; menu button is visible with `aria-expanded`, `aria-controls`, Escape handling, and close-on-navigation behavior.
- Mobile menu links are stacked, white at 75% opacity, with subtle white dividers and `py-3.5`.

## 10. Footer

- Component: `Footer`, rendered by `MarketingShell` on every marketing route.
- Transition is a separate 6rem gradient strip from pale surface to black.
- Main background: `#000000`.
- Wordmark: existing logo image inverted to white with `brightness-0 invert`, paired with white `Clonao` text.
- Supporting copy: white at 55%, small, max width `xs`.
- Navigation groups are moved to the right on desktop: Product, Resources, Legal.
- Group labels are uppercase, `text-xs`, semibold, white at 45%, `tracking-[0.16em]`.
- Links are `text-sm`, white at 70%, brighter on hover.
- Bottom divider: `border-white/[0.12]`.
- Copyright and social icons use white at 40–45% opacity.
- Social icons: Instagram, LinkedIn, and inline SVG X icon.
- Mobile: brand first, navigation below, then copyright/social row; no horizontal overflow.

## 11. Spacing system

Recurring values:

- Container horizontal padding: 20px default, 24px at `sm`, 32px at `lg`.
- Common section padding: `py-24` / 96px, `sm:py-28` / 112px, `lg:py-36` / 144px.
- Hero uses a tighter top/bottom system: 80/48px default, 96/64px at `sm`, 112/80px at `lg`.
- Final CTA uses 112/128/160px vertical padding.
- Common intro-to-content gaps: `mt-12`, `mt-14`, `mt-16`, and `mt-20`.
- Common text gaps: `mt-4`, `mt-5`, `mt-6`, `mt-7`.
- Standard card gap: `gap-5` on desktop; showcase cards use `gap-8` to `gap-10` internally.
- Shared radius token is `0.75rem`, but major surfaces intentionally use explicit radii from `rounded-md` through `rounded-[1.75rem]`.
- No standalone spacing scale variables are defined; spacing is primarily Tailwind utilities.

## 12. Responsive behavior

Tailwind breakpoints used by the project:

- default/mobile: below 640px
- `sm`: 640px
- `lg`: 1024px
- `2xl`: 1280px container screen

Behavior:

- Hero headline scales from 2.75rem to 3.75rem at `sm` and 4.5rem at `lg`; demo remains fluid up to 1040px.
- Problem grid remains six logical columns but changes card height, padding, radius, and gap by breakpoint.
- Intelligence Loop is a three-column row at `lg`; below `lg`, it becomes a sticky vertical sequence with no horizontal swipe.
- Mobile Intelligence Loop uses a 210vh sequence and a 70vh sticky viewport. React state is derived from scroll position; outgoing/incoming cards use opacity and transform only.
- Grounding diagram uses three breakpoint-specific SVG coordinate groups and responsive CSS grid columns. Source cards and center/output cards shrink at mobile widths while preserving the left-to-right system relationship.
- FAQ keeps one column at every breakpoint; type, row padding, and content width scale down on mobile.
- Final CTA remains right aligned on desktop but wraps naturally on narrow screens; the desktop one-line constraint is removed by responsive wrapping below `lg`.
- Footer changes from two-column desktop brand/navigation to stacked mobile content. Link groups move from three columns at `sm` to two columns below it.
- Navbar desktop links appear at `lg`; mobile menu appears below `lg`.

## 13. Animation and interaction

### CSS

- `hero-reveal`: 700ms upward fade with cubic-bezier `(0.22, 1, 0.36, 1)`.
- Hero reveal delays: 80ms, 160ms, and 240ms.
- `stage-transition`: 300ms upward fade for changing product card content.
- Problem card hover: small upward movement and background image scale from 1.05 to 1.10.
- Problem reflection: 9-second slow diagonal reflective sweep.
- Metallic CTA: brightness, small upward movement, shadow shift, and reflective pseudo-element sweep.
- FAQ: CSS grid row/opacity transition over 300ms; chevron rotates 180 degrees.
- Grounding card pulse: 760ms scale to `1.018` when signals arrive.

### React / browser APIs

- FAQ uses React `useState` for the active accordion item.
- Intelligence Loop mobile sequence uses React state, `scroll` and `resize` listeners, and `requestAnimationFrame` throttling. It does not use a third-party animation library.
- Grounding signal particles use `requestAnimationFrame`, `SVGPathElement.getPointAtLength()`, and `IntersectionObserver`. Particles are created as SVG circles and animation pauses when the diagram is offscreen.
- Mobile navbar uses React state, `usePathname`, and a `keydown` listener for Escape.
- No Framer Motion, GSAP, or other animation library is installed.

### Reduced motion

`@media (prefers-reduced-motion: reduce)` disables hero reveals, stage transitions, problem reflection, grounding signal/card animation, and metallic CTA movement. Mobile sequence also has `motion-reduce:transition-none` on the card transitions.

## 14. Design tokens

### Colors

Reusable CSS variables are the HSL semantic tokens and five Clonao atmospheric hex tokens listed in Section 2. Component-specific values currently remain inline Tailwind values; future work should consolidate repeated literals where practical without changing the current visual output.

### Typography

- Geist Sans variable: `GeistSans.variable`.
- Tailwind `font-sans` is the primary family.
- Custom letter spacing: `tightest: -0.045em`.
- No explicit CSS typography variables are currently defined.

### Shadows

- `--shadow-soft: 0 12px 40px -24px hsl(222 34% 12% / 0.22)`.
- `--shadow-medium: 0 20px 55px -28px hsl(222 34% 12% / 0.24)`.
- Tailwind aliases: `shadow-soft`, `shadow-medium`.
- Components also use explicit cool blue-gray shadows for cards, the diagram, and the metallic CTA.

### Radius

- `--radius: 0.75rem`.
- Tailwind/shorthand usage ranges from `rounded-md` and `rounded-lg` to `rounded-xl`, `rounded-[1.25rem]`, `rounded-[1.625rem]`, and `rounded-[1.75rem]`.

### Spacing

No custom spacing variables are defined. The system uses Tailwind’s spacing scale, most visibly `mt-4/5/6/7`, `mt-12/14/16/20`, `py-24/28/36`, and the container padding values.

## Rules for future pages

Future Clonao pages must reuse the homepage’s:

- exact Geist Sans font family
- established weight, tracking, and responsive typography system
- semantic color tokens and Clonao blue palette
- hero and atmospheric gradient treatment where appropriate
- centered marketing container and its responsive horizontal padding
- section spacing rhythm
- metallic CTA button style
- editorial image-backed and liquid-glass card styles only where they fit the product story
- existing responsive navbar and mobile navigation
- shared footer and CTA-to-footer transition
- restrained animation language and reduced-motion behavior
- accessible focus states, semantic headings, and server-component-first architecture

Do not invent a separate design language for Product, How It Works, Pricing, Resources, Contact, Privacy, or Terms. Before implementing a future page, reference this document and reuse the existing components and tokens whenever possible.
