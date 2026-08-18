---
name: TechYuva Digital Campus
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#464555'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#5f5e5f'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfe0'
  on-secondary-container: '#636263'
  tertiary: '#7e3000'
  on-tertiary: '#ffffff'
  tertiary-container: '#a44100'
  on-tertiary-container: '#ffd2be'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#e5e2e3'
  secondary-fixed-dim: '#c8c6c7'
  on-secondary-fixed: '#1b1b1c'
  on-secondary-fixed-variant: '#474647'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb695'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7b2f00'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-hero:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h1:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.3'
  h2:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  h3:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style
The design system for TECHYUVA embodies **Modern Institutional Minimalism**. It moves away from traditional academic clutter toward a sophisticated, editorial-driven digital environment. The personality is intelligent and premium, reflecting the technical excellence of USICT while maintaining a sense of a vibrant, forward-thinking community.

The aesthetic utilizes a high-ratio of white space, strict alignment, and subtle depth to organize complex institutional data. It prioritizes clarity and authority, ensuring that students and faculty encounter an interface that feels both cutting-edge and dependable.

## Colors
The palette is rooted in a "Paper and Ink" philosophy. The background uses a soft off-white to reduce eye strain, while the primary text utilizes a near-black for maximum legibility and gravitas.

- **Primary Indigo (#4F46E5):** Used for primary actions and brand presence.
- **Secondary Black (#1A1A1B):** Used for headings and core UI structure.
- **Surface Neutrals:** #F8F9FA is the canvas, with #E5E7EB used for structural borders.
- **Priority Indicators:** Notice priorities follow a strict semantic hierarchy. "Very Important" notices utilize the High Priority Red, while "Normal" notices default to the muted secondary text color.

## Typography
The typographic system pairs the expressive, modern character of **Plus Jakarta Sans** for headings with the systematic efficiency of **Inter** for body content. 

Hero sections should utilize the `display-hero` tokens with tight tracking to create an editorial feel. Body text is set with generous line-heights to ensure high readability for long-form announcements and academic content. Labels for badges and metadata are condensed and uppercase to differentiate them from prose.

## Layout & Spacing
The layout follows a 12-column fluid grid on desktop and a 4-column grid on mobile. A strict 8px spacing rhythm dictates all padding and margins.

- **Editorial Columns:** Content-heavy pages (like announcements) should limit text width to 8 columns or a maximum of 720px to maintain optimal line lengths.
- **Section Spacing:** Use 80px - 120px of vertical space between major homepage sections to reinforce the minimal, premium aesthetic.
- **Card Grids:** Event discovery cards should be arranged in a 3-column layout on desktop, transitioning to a single-column stacked layout on mobile.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** rather than heavy shadows. The system uses a flat foundation with layers defined by 1px borders.

- **Resting State:** Elements sit flush on the #F8F9FA background with a 1px solid #E5E7EB border.
- **Elevated State (Hover):** When an element (like an event card) is interactive, it gains a very soft, diffused shadow: `0 4px 20px rgba(0, 0, 0, 0.04)`.
- **Primary Overlay:** Modals or dropdowns use a crisp white background (#FFFFFF) with a more defined border and the standard soft shadow to separate them from the content layer.

## Shapes
The shape language is "Soft" yet disciplined. While fully sharp corners feel too aggressive for a community platform, overly rounded "pill" shapes feel too casual.

- **Standard Radius:** 4px (0.25rem) for small components like inputs and buttons.
- **Card Radius:** 8px (0.5rem) for containers and large cards.
- **Featured Radius:** 12px (0.75rem) for hero images or primary call-outs.

## Components
Consistent component styling ensures the design system feels unified across different campus modules.

- **Buttons:** Primary buttons use the Indigo background with white text and 4px corners. Secondary buttons use a transparent background with a 1px #E5E7EB border.
- **Editorial Announcement Lists:** These should use a "border-bottom only" style, with the date and priority badge on the left and the headline taking center stage. Use a subtle hover background fill of #F1F5F9.
- **Event Cards:** Utilize a vertical stack with a fixed-aspect-ratio image at the top (16:9), followed by a 24px padded content area. 
- **Priority Badges:** Small, high-contrast labels. "Very Important" uses a red background with white text; "Normal" uses a light gray background with dark text.
- **Input Fields:** Minimalist design with a 1px border. On focus, the border color transitions to Primary Indigo with a 2px outer glow of the same color at 10% opacity.
- **Notices Container:** A full-width banner at the top of the viewport for urgent campus alerts, utilizing the semantic color palette based on priority.