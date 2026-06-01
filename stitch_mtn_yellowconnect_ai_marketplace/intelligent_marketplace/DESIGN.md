---
name: Intelligent Marketplace
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0edec'
  surface-container-high: '#ebe7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#4e4632'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#80765f'
  outline-variant: '#d2c5ab'
  surface-tint: '#745b00'
  primary: '#745b00'
  on-primary: '#ffffff'
  primary-container: '#ffcc00'
  on-primary-container: '#6f5700'
  inverse-primary: '#f1c100'
  secondary: '#1f5dae'
  on-secondary: '#ffffff'
  secondary-container: '#76a9ff'
  on-secondary-container: '#003c7c'
  tertiary: '#006874'
  on-tertiary: '#ffffff'
  tertiary-container: '#00e7fe'
  on-tertiary-container: '#00646e'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffe08b'
  primary-fixed-dim: '#f1c100'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#584400'
  secondary-fixed: '#d6e3ff'
  secondary-fixed-dim: '#aac7ff'
  on-secondary-fixed: '#001b3e'
  on-secondary-fixed-variant: '#00458d'
  tertiary-fixed: '#95f1ff'
  tertiary-fixed-dim: '#00daf0'
  on-tertiary-fixed: '#001f24'
  on-tertiary-fixed-variant: '#004f57'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  title-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-margin-mobile: 16px
  container-margin-desktop: 40px
  gutter: 16px
  section-gap: 48px
---

## Brand & Style
The design system embodies a "High-Trust Innovation" philosophy, merging the heritage of a pan-African telecommunications leader with the forward-looking capabilities of generative AI. The style is **Modern Corporate** with **Glassmorphic accents** specifically reserved for AI-driven features to signal intelligence and transparency.

The target audience ranges from local entrepreneurs to high-volume consumers across diverse regions. The UI evokes a sense of speed, reliability, and localized relevance. It avoids visual clutter, favoring a mobile-first hierarchy that prioritizes rapid search and secure transactions.

## Colors
The palette is anchored by the iconic **MTN Yellow**, used purposefully for primary actions and brand recognition. **MTN Blue** serves as the primary "trust" anchor, used for headers, links, and secondary buttons. 

A **Deep Slate** (#121212) is used for primary typography to ensure high contrast against the yellow. For AI features, a subtle infusion of **Electric Violet** gradients and glassmorphic blurs distinguishes automated insights from standard marketplace listings. Backgrounds remain primarily white or very light gray to maintain a "clean" and fast-loading aesthetic.

## Typography
This design system utilizes **Inter** for its exceptional legibility on mobile screens and its neutral, technical character. 

Hierarchy is established through weight rather than just size. Headlines use Bold (700) weights to provide clear structure in a content-heavy marketplace. Specialized "AI labels" use the `label-caps` style with increased letter spacing to differentiate metadata from descriptive text. Tighten letter spacing on larger display sizes to maintain a modern, "tucked" appearance.

## Layout & Spacing
The layout follows a **Fluid Grid** model based on an 8px square-grid system. 

On mobile, the system utilizes a 4-column layout with 16px side margins. On desktop, it expands to a 12-column layout with a maximum container width of 1280px. Spacing between marketplace cards is kept tight (16px) to maximize information density, while vertical sections use larger gaps (48px) to provide visual breathing room between different product categories or AI recommendations.

## Elevation & Depth
Depth is managed through **Tonal Layers** and targeted **Glassmorphism**.

1.  **Standard Surface:** White background, flat or with a 1px border (#E0E0E0).
2.  **Raised Cards:** Subtle, diffused shadow (0px 4px 12px rgba(0,0,0,0.05)) to indicate interactivity.
3.  **AI Glass:** For "AI Enhanced" sections, use a background blur (12px) with a semi-transparent white fill (80% opacity) and a thin, glowing border using a primary-to-blue gradient.
4.  **Sticky Elements:** High-elevation shadows for navigation bars and search inputs to ensure they remain the focal point during scrolling.

## Shapes
The shape language is **Rounded**, utilizing a base radius of 8px for smaller components like input fields and tags, and 16px (rounded-lg) for product cards and main containers. This approach balances the "tech-forward" efficiency of square grids with the approachability and modern feel of curved geometry. Buttons are either fully pill-shaped (for high-action CTA) or 8px rounded (for utility actions).

## Components

### Buttons
- **Primary:** MTN Yellow background, Deep Slate text, 700 weight. No border.
- **Secondary:** MTN Blue background, White text.
- **AI Action:** Gradient background (Blue to Violet), white text, with a subtle sparkle icon.

### AI Enhanced Badge
A specialized component for "AI Enhanced" listings. It features a glassmorphic background, 1px gradient border, and use of the `label-caps` typography.

### Search Bar
The central component of the marketplace. It must be prominent, featuring a 16px corner radius, a subtle inner shadow, and a high-contrast yellow "Search" button anchored to the right.

### Product Cards
Cards use a 16px radius. Images should fill the top half, with a clear blue-text price point and a secondary-color country indicator (flag icon + ISO code).

### Country Selection
A persistent, easily accessible dropdown or horizontal scroll of chips in the header, allowing users to switch contexts instantly. Active states use the MTN Yellow underline.

### Input Fields
Soft-gray backgrounds (#F5F5F5) with 8px corner radius. Focused states switch the border to MTN Blue for high visibility and trust.