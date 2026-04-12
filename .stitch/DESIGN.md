# Design System: Thierno Portfolio

**Project ID:** `projects/6960837492132983196`
**Platform:** Web — Desktop-first, fully responsive
**Version:** 1.0 — Initial synthesis

---

## Creative North Star

This portfolio is a cinematic exhibit, not a resume. Every pixel should feel curated: the scrolling is an event, not a utility. The visual language holds two truths simultaneously — the precision of an engineer and the warmth of West African heritage. Think of it as a magazine cover that also happens to contain a CV.

The emotional register is **confident, warm, and kinetic**. The site moves like an athlete and reads like editorial. Recruiters should feel the technical rigor. Creatives should feel the identity.

---

## 1. Visual Theme & Atmosphere

**Primary Atmosphere:** Cinematic editorial — high-contrast, scroll-driven, fullscreen-section architecture.

**Mood Adjectives:**
- Warm but not soft
- Bold but not loud
- Cultural but not decorative-only
- Athletic and precise

**Aesthetic Philosophy:**
Deep near-black canvas with terracotta-to-amber warm accents. Sections snap into view as full-viewport reveals. Geometric kente-inspired SVG overlays appear at low opacity as section dividers and edge accents — present but never dominant. Typography is magazine-grade: headline type is geometric sans with wide tracking; body type creates editorial contrast through a clean serif or monospaced alternative.

**Anti-patterns to avoid:**
- Corporate blue-grey palettes
- Generic card grids with drop shadows
- Centered-text hero with stock photography
- Gradient overuse (limit to one intentional application)
- Animations that delay content access

---

## 2. Color Palette & Roles

| Token Name | Hex | Role |
|---|---|---|
| **Base Black** | `#0D0D0D` | Primary page background — deepest canvas |
| **Surface Dark** | `#111111` | Section backgrounds, card surfaces |
| **Surface Raised** | `#1A1A1A` | Elevated containers, project cards |
| **Surface Border** | `#2A2A2A` | Subtle dividers, input borders |
| **Terracotta** | `#C1440E` | Primary brand accent — headings, active states, key CTA |
| **Burnt Amber** | `#E07B39` | Secondary accent — hover transitions, icon fills, warm highlights |
| **Golden Yellow** | `#F5A623` | Tertiary accent — micro-highlights, kente pattern primary color, numbered lists |
| **Text Primary** | `#F0EBE3` | Primary heading and body text on dark backgrounds |
| **Text Secondary** | `#A89880` | Subheadings, captions, metadata labels |
| **Text Muted** | `#5C5048` | Placeholder text, deactivated elements |
| **Cobalt Blue** | `#2563EB` | Interaction accent — hover states only, never dominant |
| **Forest Green** | `#16A34A` | Active state accent — success indicators, active nav |
| **Kente Gold** | `#D4A017` | West African pattern SVG fills — decorative only |
| **Kente Red** | `#8B1A1A` | West African pattern SVG fills — decorative only |

**Color Usage Rules:**
- Terracotta (`#C1440E`) is the primary identity color. Use it for H1 text accents, underlines, and primary CTAs.
- Amber (`#E07B39`) is the energy color — use for hover glows, icon states, and warm highlights.
- Golden Yellow (`#F5A623`) is the accent color — sparingly on numbered lists, skill badges, and kente motifs.
- Cobalt and Forest Green appear ONLY on hover/active — never as static fills in visible components.
- Never use pure white (`#FFFFFF`) as a background — the warmest allowed light surface is `#F0EBE3`.

---

## 3. Typography Rules

### Font Stack

| Role | Font Family | Fallback |
|---|---|---|
| **Display / H1** | Space Grotesk | Syne, Plus Jakarta Sans, sans-serif |
| **Headings H2–H3** | Space Grotesk | Plus Jakarta Sans, sans-serif |
| **Body / Prose** | DM Serif Display | Georgia, serif |
| **Code / Mono accent** | JetBrains Mono | Fira Code, monospace |
| **Labels / Captions** | Space Grotesk | sans-serif |

**Font Choice Rationale:**
- Space Grotesk is the structural backbone — geometric, confident, with subtle character quirks that read as personality.
- DM Serif Display creates editorial contrast against the geometric headings — the combination reads like a magazine layout.
- JetBrains Mono is used for code snippets, tech stack labels, and subtle engineer identity signals.
- Alternates (if Space Grotesk is unavailable): Syne (more experimental, still editorial), Plus Jakarta Sans (safer, more corporate — last resort).

### Type Scale

| Level | Size | Weight | Letter-spacing | Usage |
|---|---|---|---|---|
| **Display** | `clamp(4rem, 8vw, 9rem)` | 800 | `-0.04em` | Hero name, section openers |
| **H1** | `clamp(2.5rem, 5vw, 5rem)` | 700 | `-0.02em` | Section titles |
| **H2** | `clamp(1.75rem, 3vw, 2.5rem)` | 600 | `-0.01em` | Sub-section headers |
| **H3** | `1.25rem` | 600 | `0em` | Card titles, component headers |
| **Body Large** | `1.125rem` | 400 | `0.01em` | Primary prose (serif) |
| **Body** | `1rem` | 400 | `0.01em` | Standard body copy |
| **Label / Caption** | `0.75rem` | 500 | `0.08em` (uppercase) | Tags, metadata, tech labels |
| **Code** | `0.875rem` | 400 | `0em` | Inline code, stack labels |

**Typography Principles:**
- Tight negative tracking on display sizes creates editorial authority.
- Uppercase labels with wide positive tracking signal data hierarchy.
- Line height for display text: `1.0–1.1`; for body: `1.6–1.7`.
- No centered body copy in paragraphs — center-alignment reserved for short display text only.

---

## 4. Spacing & Layout Grid

**Base Unit:** `8px`

| Token | Value | Usage |
|---|---|---|
| `space-1` | `8px` | Component micro-gaps |
| `space-2` | `16px` | Component internal padding |
| `space-3` | `24px` | Component external margin |
| `space-4` | `32px` | Section element gaps |
| `space-6` | `48px` | Sub-section vertical rhythm |
| `space-8` | `64px` | Section padding top/bottom |
| `space-12` | `96px` | Major section vertical gaps |
| `space-16` | `128px` | Fullscreen section internal padding |

**Grid System:**
- 12-column grid with `24px` gutters
- Max content width: `1280px` centered
- Mobile: single-column, `20px` horizontal padding
- Sections: `100vh` fullscreen snap points on desktop
- Project rail: horizontal scroll with `scroll-snap-type: x mandatory`

---

## 5. Motion Principles

**Motion Philosophy:** Scroll is the narrative engine. Every section transition is a cinematic reveal — not a gimmick, but a designed moment of arrival.

**Principles:**
1. **Scroll-driven only** — animations are tied to scroll progress, not timers.
2. **Entrance > Exit** — optimize reveal animations; exit animations should be subtle fades.
3. **Kinetic but respectful** — fast entry (300–500ms), never sluggish. Honor `prefers-reduced-motion`.
4. **Layered reveals** — text enters before images; structural elements before decorative ones.
5. **No looping animations** — except the kente pattern edge accent (which should pulse very slowly at 0.3 opacity max).

**Key Animation Specs:**
| Motion | Duration | Easing | Notes |
|---|---|---|---|
| Section snap transition | `600ms` | `cubic-bezier(0.16, 1, 0.3, 1)` | Expo ease-out |
| Text reveal (stagger) | `400ms` + `80ms` stagger | `ease-out` | Word or line by line |
| Image entrance | `500ms` | `ease-out` | Slight vertical translate up |
| Hover glow (CTA) | `200ms` | `ease` | Amber glow on terracotta button |
| Project card reveal | `450ms` | `cubic-bezier(0.16, 1, 0.3, 1)` | Scale from 0.96 to 1 |
| Cursor trail (kente) | `120ms` | `linear` | Decorative only |

---

## 6. Pattern & Texture Rules

**West African Geometric Overlay System:**

These SVG patterns are inspired by kente weave geometry and West African wax-print structure. They are design elements — atmospheric, not decorative clutter.

**Usage Rules:**
- Maximum opacity: `15%` (`0.15`)
- Default opacity: `8%–12%` (`0.08–0.12`)
- Color: `#D4A017` (Kente Gold) or `#8B1A1A` (Kente Red) — single-color SVGs only
- Never placed over body copy — use as section edge accents, dividers, or background fills
- Placement zones: right edge of hero, bottom edge of sections, footer background full coverage
- Pattern types to use: interlocking geometric diamonds, horizontal stripe systems, cross-hatch grids
- SVG `fill` only, no strokes — keeps pattern clean at low opacity
- On mobile: reduce opacity further to `6%` max

**Application by Section:**
| Section | Pattern Usage |
|---|---|
| Hero | Right-edge vertical band of diamond geometry, 10% opacity |
| About | Left-edge horizontal stripe accent, 8% opacity |
| Projects | Subtle cross-hatch on section transition divider only |
| Skills | Background fill on skill grid section, 6% opacity |
| Contact/Footer | Full background coverage with diamond pattern, 12% opacity |

---

## 7. Section Inventory

### 01 — Hero
**Layout:** Fullscreen (`100vh`), vertically centered content, left-aligned text
**Content:** Name in display type (`clamp(4rem, 8vw, 9rem)`), role tagline below in H2 weight, animated word reveal
**Visual:** Terracotta accent on first or last name word, kente diamond band on right edge, subtle grain texture on background
**CTA:** Ghost button or scroll indicator at bottom — "Explore the work" with downward chevron animation
**Sticky nav:** Fixed nav bar appears on scroll with glassmorphism blur — `backdrop-filter: blur(12px)`, `#111111` at 85% opacity

### 02 — About
**Layout:** Two-column split (portrait left, copy right) or stacked editorial (portrait full-bleed behind copy)
**Content:** Heritage narrative — Canada × Guinea, athlete × engineer duality. Short paragraphs, editorial tone.
**Visual:** Warm amber (`#E07B39`) used for a pull-quote or accent line. Portrait treated with a slight warm color-grade overlay.
**Typography:** H1 section label in muted caption style ("02 / About"), H2 headline bold, body in serif (DM Serif Display)
**Detail:** Horizontal rule in terracotta, thin (`1px`), before pull-quote

### 03 — Projects Index
**Layout:** Fullscreen horizontal scroll rail — each project fills one viewport width
**Content:** Project title (H1 size), one-line description, tech stack labels (JetBrains Mono, uppercase), CTA link
**Visual:** Dark background (`#0D0D0D`), project screenshot or mockup fills 60% of viewport, terracotta project number in display size (decorative, top-right corner)
**Interaction:** Horizontal scroll-snap, keyboard arrow support, dot pagination indicator at bottom

### 04 — Project Detail (Template)
**Layout:** Fullscreen reveal — project name hero top, then two-column content below
**Content:** Project overview, problem statement, solution highlights, tech stack grid, live link CTA
**Visual:** Accent color pulled from project branding (can override terracotta for variety), project mockup as large visual
**Detail:** Back navigation, project number breadcrumb

### 05 — Skills / Stack
**Layout:** Geometric grid — capability categories as column headers, skills as rows or badges
**Content:** Languages, Frameworks, Tools, Practices — each with proficiency signal
**Visual:** Skill badges in JetBrains Mono, golden yellow (`#F5A623`) accent on featured skills, low-opacity kente fill behind grid
**Style:** Flat, no card elevation — table-like grid feels precise and confident

### 06 — Contact / Footer
**Layout:** Fullscreen closing section with centered CTA + footer strip below
**Content:** "Let's build something." headline, email CTA, social links (GitHub, LinkedIn), copyright
**Visual:** Kente diamond pattern fills full background at 12% opacity, terracotta used on headline accent word, footer strip in `#0D0D0D`
**CTA:** Primary button — terracotta fill, amber hover glow, sharp corners (`border-radius: 2px`)

---

## 8. Component Inventory & Specs

### Navigation Bar
- Fixed position, appears on scroll past hero fold
- `backdrop-filter: blur(12px)`, background `#111111` at `85%` opacity
- Left: wordmark or initials "TB" in Space Grotesk 700
- Right: anchor links — About, Projects, Skills, Contact
- Active link: terracotta underline, `2px`, `#C1440E`
- Mobile: hamburger → fullscreen overlay nav

### Hero Block
- Display name: Space Grotesk 800, `clamp(4rem, 8vw, 9rem)`, tight tracking `-0.04em`
- Tagline: Space Grotesk 400, H2 size, text secondary color `#A89880`
- CTA: ghost button with terracotta border, transparent fill, hover fills terracotta
- Kente accent: SVG right-edge band, `10%` opacity, `#D4A017`

### Project Card (Horizontal Rail)
- Full-viewport width (`100vw`), full-height (`100vh`)
- Background: `#111111`, project image fills right 55% of viewport
- Left panel: project number (display size, muted), title (H1), description (body serif), stack labels (mono), CTA link
- Stack label: `#F5A623` text, `#1A1A1A` background pill, JetBrains Mono, uppercase, `0.08em` tracking
- Scroll indicator: horizontal arrow animation on entry

### Skill Badge
- Background: `#1A1A1A`
- Border: `1px solid #2A2A2A`
- Text: JetBrains Mono 500, uppercase, `0.08em` tracking
- Featured badge: golden yellow `#F5A623` text, same dark surface
- Shape: sharp corners or very slightly rounded (`border-radius: 4px`)

### Contact CTA Button
- Primary: background `#C1440E`, text `#F0EBE3`, hover: background `#E07B39` with `0 0 24px rgba(224,123,57,0.4)` glow
- Shape: `border-radius: 2px` — sharp-edged, confident
- Padding: `16px 40px`, uppercase, `0.08em` tracking, Space Grotesk 600
- Size: minimum `56px` tall

### Section Label (Number / Name)
- Format: "01 / Hero" or "01"
- Font: JetBrains Mono, caption size `0.75rem`, uppercase, `0.12em` tracking
- Color: `#5C5048` (muted) — present but not competing
- Position: top-left of section, `space-4` from edge

---

## 9. Do's and Don'ts

### Do
- Use scroll-snap for section transitions on desktop
- Use terracotta as the identity anchor in every section
- Keep kente patterns at or below 12% opacity
- Use JetBrains Mono for any text that signals "technical" (stack labels, section numbers, code)
- Maintain generous vertical whitespace — sections should breathe
- Use DM Serif Display for any prose that needs editorial warmth
- Let the dark background do the heavy lifting — fewer elements, more impact

### Don't
- Use light backgrounds anywhere in the primary sections
- Add drop shadows to cards (use border + opacity instead)
- Use centered body paragraphs
- Animate on a timer (only scroll-driven or interaction-triggered)
- Use pure white text — use `#F0EBE3` for warmth
- Stack too many accent colors in one section — one accent color per section maximum
- Use gradient backgrounds except for one intentional application (e.g., hero subtle radial warm glow)

---

## 6. Design System Notes for Stitch Generation

When generating screens in Stitch, include this block verbatim in every prompt:

```
DESIGN SYSTEM (REQUIRED):
- Platform: Web, Desktop-first
- Background: Base Black (#0D0D0D), Surface Dark (#111111)
- Primary Accent: Terracotta (#C1440E) — headings, CTAs, underlines
- Secondary Accent: Burnt Amber (#E07B39) — hover states, warm highlights
- Tertiary Accent: Golden Yellow (#F5A623) — skill badges, kente motifs
- Text Primary: Warm Off-White (#F0EBE3)
- Text Secondary: Warm Taupe (#A89880)
- Display Font: Space Grotesk, weight 800, tracking -0.04em
- Heading Font: Space Grotesk, weight 600-700
- Body Font: DM Serif Display (serif), weight 400
- Mono Font: JetBrains Mono — for stack labels, section numbers, code
- Styles: Sharp corners (border-radius 2-4px max), no drop shadows, flat elevation
- Pattern: Low-opacity West African geometric SVG overlay (kente-inspired diamonds), max 12% opacity, color #D4A017
- Atmosphere: Cinematic, editorial, dark, warm, kinetic, confident
```
