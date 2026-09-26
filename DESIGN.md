---
name: "Zhanibek — Живой плакат"
description: "An opaque, person-first poster wall with readable bilingual prose and real project evidence."
colors:
  oxblood: "#7a0f19"
  mustard: "#edb92f"
  moss: "#515b3d"
  slate: "#223a42"
  cream: "#f3e6d2"
  muted-foreground: "#e1c9b8"
  accent: "#9b2933"
  border: "#b97169"
  viewer-rano-background: "#10452b"
  viewer-rano-foreground: "#f1f8ef"
  viewer-rano-primary: "#c1e5a5"
  alternative-notebook-blue: "#214acb"
  alternative-notebook-paper: "#f5f3ed"
  alternative-notebook-ink: "#292c30"
  alternative-notebook-muted: "#62625f"
  alternative-editorial-forest: "#173d34"
  alternative-editorial-paper: "#f2eee6"
  alternative-editorial-rust: "#a34e2e"
  alternative-editorial-muted: "#426157"
  alternative-editorial-sage: "#d5dfd5"
typography:
  display:
    fontFamily: "Unbounded, sans-serif"
    fontSize: "clamp(1.8rem, 6.65vw, 6rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Unbounded, sans-serif"
    fontSize: "clamp(1.6rem, 3.5vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: "-0.03em"
  interests-headline:
    fontFamily: "Unbounded, sans-serif"
    fontSize: "clamp(2rem, 4.8vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  introduction:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  caption:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "0.75rem"
    lineHeight: "1.25rem"
  viewer-position:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "11px"
    fontWeight: 400
  alternative-notebook-display:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(2.8rem, 8.5vw, 6rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.04em"
  alternative-notebook-accent:
    fontFamily: "Prata, serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.02em"
  alternative-editorial-display:
    fontFamily: "Prata, serif"
    fontSize: "clamp(2.9rem, 7vw, 6rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.035em"
rounded:
  sheet: "0px"
  viewer-control: "6px"
  screenshot: "12px"
spacing:
  frame: "8px"
  frame-wide: "12px"
  sheet-inline: "20px"
  sheet-inline-sm: "36px"
  sheet-inline-lg: "48px"
  topic-inline-lg: "28px"
  story-paragraph-gap: "20px"
components:
  sheet-about:
    backgroundColor: "{colors.oxblood}"
    textColor: "{colors.cream}"
    rounded: "{rounded.sheet}"
  sheet-outside:
    backgroundColor: "{colors.mustard}"
    textColor: "{colors.oxblood}"
    rounded: "{rounded.sheet}"
  sheet-projects:
    backgroundColor: "{colors.moss}"
    textColor: "{colors.cream}"
    rounded: "{rounded.sheet}"
  button-primary:
    backgroundColor: "{colors.viewer-rano-primary}"
    textColor: "{colors.viewer-rano-background}"
    rounded: "{rounded.viewer-control}"
    padding: "8px 12px"
  button-outline:
    backgroundColor: "{colors.viewer-rano-background}"
    textColor: "{colors.viewer-rano-foreground}"
    rounded: "{rounded.viewer-control}"
    padding: "8px 12px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.viewer-rano-foreground}"
    rounded: "{rounded.viewer-control}"
    padding: "8px 12px"
  screenshot-selected:
    backgroundColor: "{colors.viewer-rano-primary}"
    textColor: "{colors.viewer-rano-background}"
    rounded: "{rounded.viewer-control}"
    padding: "8px 12px"
  topic-about:
    backgroundColor: "{colors.oxblood}"
    textColor: "{colors.cream}"
    rounded: "{rounded.sheet}"
    padding: "12px"
  project-filter:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    rounded: "{rounded.sheet}"
    padding: "0px 8px"
  project-row:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    rounded: "{rounded.sheet}"
    padding: "20px 0px"
  project-viewer:
    backgroundColor: "{colors.viewer-rano-background}"
    textColor: "{colors.viewer-rano-foreground}"
    rounded: "{rounded.sheet}"
  viewer-position:
    textColor: "{colors.muted-foreground}"
    typography: "{typography.viewer-position}"
---

# Design System: Zhanibek — Живой плакат

## Overview

**Creative North Star: "Живой плакат"**

A personal poster wall: bold lettering and whole colored sheets make the person memorable, while generous leading keeps his story easy to read. Solid ink-like colors, square edges and direct topic selection replace the rejected FRAME world; this is not a light recoloring of the old résumé-style composition.

The identity is personal, candid and readable, not recruiting or service sales. Real project screenshots support the story without becoming a substitute portrait. No portrait or certificate material has been supplied, so neither is fabricated or represented by decorative placeholders.

**Key Characteristics:**
- Opaque oxblood, mustard and moss sheets on a slate surround, with cream reading text.
- Unbounded display lettering paired with Manrope prose; mono only for viewer position.
- Square, flat poster geometry with explicit selection and visible keyboard focus.
- Immediate topic changes; motion is optional and confined to bounded gallery response.

This scan documents the approved code-led build in `src/App.tsx`, `src/index.css`, `src/fonts.css` and the project components. Development seed: `5ea71aa6`. The user chose `poster` on the local direction board; no generated comp was approved. The selection and surface contract live in `.impeccable/personal-direction-selection.json` and `.impeccable/surfaces/src-app-tsx.md`. Existing desktop/mobile captures and `.impeccable/review/poster-verification.json` are evidence, not new validation performed by this documentation pass.

## Colors

The main palette is warm, opaque and high-contrast; color belongs to whole sheets rather than decorative gradients. Frontmatter values are normative; alternative-prefixed tokens are explicitly outside the main-site palette.

### Primary
- **Oxblood:** About sheet and main reading ink on mustard; global fallback background.
- **Mustard:** Outside-code sheet, selected language underline and global fallback action/focus color.

### Secondary
- **Moss:** Projects sheet and its persistent topic tile, with cream text.
- **Slate:** Outer frame and header/footer surround; global secondary role.

### Neutral
- **Cream:** Primary reading text on oxblood, moss and slate; selection background on the poster surface.
- **Muted foreground, border and accent:** Global fallback roles. Inside a project viewer, supporting copy, rules and hover surfaces use that project's scoped palette.

### Project viewer palettes

At the user's request, the entire screenshot window follows the displayed project's colors, not the About sheet. `.project-dialog[data-project]` in `src/index.css` overrides inherited Tailwind semantic variables; `@theme` must remain non-inline so controls consume those overrides. Header, body, footer, selected device, links, focus and scrollbar share the palette. Screenshot pixels and the main poster remain unchanged. Frontmatter viewer components and sidecar specimens show RANO as the representative variant.

| Project | Surface | Text | Action | Secondary text | Hover | Border |
| --- | --- | --- | --- | --- | --- | --- |
| RANO | `#10452b` | `#f1f8ef` | `#c1e5a5` | `#c2d9c5` | `#205b3b` | `#6b9575` |
| Тенге | `#30256b` | `#f4f2ff` | `#dad3ff` | `#cdc6ef` | `#44367f` | `#8376b8` |
| Жан-Плов | `#35251b` | `#f3e6d2` | `#f4ad70` | `#d9c2ac` | `#533627` | `#a17b5d` |
| Bulbul | `#17191a` | `#efeee8` | `#d9e4e5` | `#c2c5c3` | `#303638` | `#747c7e` |
| Калории | `#eaf3eb` | `#193e29` | `#176e3d` | `#47624d` | `#d0e3d3` | `#6c8973` |

Action text uses the surface color except Calories, which uses white. Calories uses a light native color scheme; the other viewers use dark. The viewer frame switches colors immediately (`transition-none`) so project navigation does not interpolate text and surface through low-contrast intermediate colors.

### Retained comparison worlds

`design-preview.html` deliberately retains all three working directions; `?view=notebook`, `?view=editorial` and `?view=poster` isolate them. They are approved comparison artifacts, not abandoned scaffolding or permission to mix identities on the main site.

- **Notebook:** Blue ink on pale paper, dark neutral prose and muted notes use only the `alternative-notebook-*` colors. Manrope leads; Prata is reserved for the large interests fragment.
- **Editorial:** Forest and pale paper, rust links/focus, muted green copy and sage inverse copy use only the `alternative-editorial-*` colors. Prata display type and Manrope prose accompany the attributed mountain photograph.
- **Poster preview:** Shares the selected poster palette and type but remains its own comparison implementation, not the main application's full viewer.

**The Whole Sheet Rule.** Preserve the oxblood/cream, mustard/oxblood and moss/cream pairings; do not add translucent main reading surfaces or recolor project captures to fit them.

## Typography

**Display Font:** Unbounded, locally hosted at weight 800, with sans-serif fallback.
**Body Font:** Manrope Variable, locally bundled with Latin and Cyrillic coverage, with sans-serif fallback.
**Label/Mono Font:** IBM Plex Mono, locally bundled at weight 400, only for numeric viewer position.

The name is uppercase, broad and confident; prose remains uncompressed and conversational. The display, headline and interests-headline roles in frontmatter match the three actual fluid scales. Ordinary body copy uses relaxed leading; the introduction grows from its base role to 1.25rem at 640px, while the Projects introduction stays at 1.125rem. Introductory copy is capped at 36rem and the About headline at 42rem. Supporting headings use Manrope at 1.125rem/700. Project names use 1rem/700, becoming 1.25rem from 640px.

Topic titles use Unbounded/800 at `clamp(0.75rem, 2.6vw, 1.1rem)` with 1.4 leading, changing to `clamp(1.25rem, 1.8vw, 1.75rem)` at 1024px. Viewer titles use Unbounded/800 at 1.5rem, then 2.25rem from 640px, with 1.25 leading and -0.03em tracking.

Prata is not a main-site font. Its two alternative-prefixed roles describe the notebook accent and editorial display only. The notebook's 15px topic label and comparison poster's desktop 1.75rem topic title are intentional preview-local sizes. The detector's Prata/Unbounded notices and these two size notices were stale-documentation warnings, not instructions to change approved code.

**The Two Voices Rule.** Use Unbounded for the main poster's display hierarchy and Manrope for reading and controls; keep IBM Plex Mono confined to viewer position and Prata confined to retained alternatives.

## Layout

The poster shell is capped at 1600px. Outer padding is 8px, becoming 12px at 640px. Below 1024px the topic navigation is a three-column strip above a single main sheet. From 1024px the shell becomes `minmax(0, 1fr) minmax(240px, 0.36fr)` with a 12px gap: main sheet left, sticky topic stack right (12px from the top). Header and footer span both columns. The mobile shell gap remains 8px.

Main-sheet horizontal padding is 20px / 36px / 48px at base / 640px / 1024px. Top padding is 32px / 40px / 48px; bottom padding is 40px / 48px / 56px. Topic tiles use 12px / 20px / 28px padding and minimum heights of 112px, then 240px at 1024px. Tile descriptions appear only in the desktop stack; state text stays visible on mobile, and selection is never conveyed by color alone.

Biography and interests use a single reading column capped at 36rem, with 20px gaps between paragraphs. About has three paragraphs; Outside code has two. Do not restore the redundant school/university or interests subheadings and two-column details. The project list uses columns `4rem minmax(0, 1fr) 1.5rem`, then `7rem minmax(0, 1fr) 2rem` at 640px; thumbnail heights are 72px / 88px. Rows have 20px vertical padding. Optional gallery layout is one column, becoming two at 640px, with 24px horizontal and 36px vertical gaps.

The body minimum width is 320px. Layout must reflow in both languages without clipped display text or horizontal scrolling. No full-height hero is imposed. The main page is served at local port 5173; the comparison is a separate HTML entry, and Vite builds both entries.

## Elevation & Depth

Opaque color blocks and rules define depth; poster sheets, rows and the project viewer have no decorative shadow. The viewer uses a black 50% overlay, not a blurred/glass surface. Its outline source button retains the primitive's subtle `0 1px 2px 0 rgb(0 0 0 / 0.05)` shadow; this small control exception is not a sheet elevation system.

Topic selection hard-swaps the active sheet and returns scroll to the top instantly. There is no hero BlurFade. Adapted Aceternity gallery tilt is bounded to ±1.8 degrees on each axis with 1400px perspective and a 300ms ease-out transform transition. It runs only for mouse input with hover, a fine pointer and no reduced-motion preference; list mode disables it. Pointer leave/cancel or a preference change clears the transform. Updates use requestAnimationFrame and refs, not per-move React state.

The dialog primitive declares 200ms fade/zoom state classes and opts out of animation under reduced motion. The global base stylesheet declares reduced animation/transitions and automatic scrolling; utility-level color transitions may still apply. Gallery tilt has its own explicit reduced-motion gate. Main-sheet changes require no animation to communicate state. Do not add ambient animation or repeated entrance effects.

## Shapes

Main sheets, topic tiles, project covers, project viewer frame and viewer close control are square. Viewer action/device/previous/next buttons retain the primitive's 6px corner radius. Only the full screenshot inside the viewer has 12px corners. Do not carry the former 16px exhibit/dialog radius forward.

Rules are 1px current-color separators on sheets; language, category and layout selection use 2px underlines. Main navigation and compact controls have at least 44px targets. Main controls use a 2px current-color focus outline inset by 6px; project hit areas use the same outline 4px outside. Viewer heading focus uses a 2px project-action ring with a 4px project-surface offset. Viewer Button focus uses its 3px half-opacity project-action ring; retain the base offset treatment.

## Components

### Topic sheets and navigation

Tactile in color, direct in behavior. About, Outside code and Projects each retain their own pairing even when inactive. The selected tile exposes `aria-pressed`, underlines its Open label and uses a check icon where the responsive layout shows icons. Buttons control the shared main region, work by keyboard and announce the current topic. There is no animated tab carousel.

### Buttons and links

Main-site links are lightweight, underlined and square with visible current-color focus. RU/EN controls use mustard text and underline for the active language. Viewer actions, outline source links and ghost hover surfaces inherit the project palette above. Selected screenshot buttons retain their project-action fill on hover and expose `aria-pressed`. The square close control is 44px. Other viewer actions have a 44px minimum height even when the underlying primitive's default height is smaller. The primary and outline frontmatter padding describes the rendered icon-bearing links.

Only `profile.github` supplies the main public GitHub destination. Email and Telegram remain null and are not rendered; do not invent a contact form or document unused input/error components.

### Filters and project rows

Category and layout controls use `aria-pressed` plus a selected underline rather than chips or filled pills. The default is a compact five-project list; the visitor may choose a two-column gallery. Each project has one named, full-area opening button, a real screenshot and readable metadata. List/gallery selection and category filtering do not change the identity of the surrounding moss sheet.

### Screenshot gallery and viewer

Real local screenshots keep their original application palettes. The Tenge gallery cover is a top-aligned 5:4 crop of its mobile capture; list thumbnails use desktop captures. Other gallery covers show desktop captures. Desktop originals are 1440×1000; mobile originals are 390×844. Viewer mobile images are capped at 390px. Captures use WebP and explicit dimensions. Cover images use asynchronous decoding and lazy loading except for the eager, high-priority RANO cover; viewer images use normal browser loading. Local/sample data and shared authorship stay disclosed. Image provenance remains in `public/images/sources.json`.

The square viewer is capped at 92dvh and 1056px from 640px; on small screens its width leaves 24px total clearance. Header and footer do not scroll; only the body scrolls, with overscroll containment and a stable scrollbar gutter. Opening focuses the project heading. Escape/close restores the originating project button. Previous/next wrap across all five projects; changing project resets the keyed screenshot selector to desktop and recreates the scroll body. Screenshot selection, direct downloads, source links and public-site links where available remain functional. No portrait, certificate, testimonial or recruiting CTA is added.

## Do's and Don'ts

### Do:
- **Do** keep the person and truthful biography ahead of supporting project evidence.
- **Do** preserve opaque sheet pairings, square poster geometry and readable bilingual reflow down to 320px.
- **Do** show selected state in text or underline as well as color, with visible keyboard focus and 44px control targets.
- **Do** preserve original screenshot colors, source attribution, sample-data disclosure and team credit.
- **Do** retain all three comparison previews with their explicitly scoped alternative palettes and typography.

### Don't:
- **Don't** restore FRAME colors, its rounded exhibit geometry or the hero BlurFade.
- **Don't** mix Prata, notebook blue or editorial forest into the main poster identity.
- **Don't** invent biography, credentials, portraits, contact details, results or service/recruiting claims.
- **Don't** require hover or motion to read content, select topics or open projects.
- **Don't** treat the preview-local 15px and 1.75rem sizes as main-site drift or fabricate unused inputs and tonal ramps.
