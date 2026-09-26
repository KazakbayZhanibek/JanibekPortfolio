# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

React + TypeScript, Vite, Tailwind CSS and shadcn/ui. Offered in the interview; user requested a new desktop project. The selected poster has no hero BlurFade; the adapted Aceternity UI gallery tilt remains bounded and is disabled for touch, reduced-motion and list view. No Elementor implementation.

## Users

People curious about Zhanibek as a person: his studies, story, interests and projects. This is a personal website, not a recruiting profile or sales page.

## Product Purpose

A bilingual Russian/English personal website. The user rejected the project-heavy FRAME presentation and selected the poster direction. About opens with “Учусь, пишу код, пробую новое”: three short paragraphs covering studies, the enjoyment of seeing an idea work, and the school-to-university story. Outside code uses “Иногда лучше просто выйти погулять” with two paragraphs about nature and favourite seasons. My projects introduces existing work with “Из того, что уже получилось”. The user approved this authored personal copy; do not expand it into invented achievements or additional biography. Topic controls hard-swap whole colored sheets rather than scrolling through one long page. Preserve all five projects, the compact list, optional gallery, filters and screenshot viewer/downloads. No résumé, recruitment or service sales framing.

## Evidence on Hand

Confirmed: name Жанибек (English spelling Zhanibek is provisional), age 20, third-year software engineering student at Caspian University in Almaty. Enjoys programming, walking, nature and especially mountains; favourite seasons are autumn and winter. Started coding at school and attended his first programming courses in tenth grade. Reports around three certificates and will provide them later: no public certificate count, issuer, badge, image or placeholder section is invented. User permits natural connective copy, not fabricated biographical facts. His supplied public GitHub is https://github.com/KazakbayZhanibek, centralized in `profile.github` and displayed by the main App. Email and Telegram remain null; other contact details found publicly are not approved for the contact section. Real screenshots of five projects remain included, with collaborative credit for Calorie EveryDay.

## Capabilities and Constraints

Person-first introduction, biography and interests in RU/EN. Keyboard-operable topic selection with a clear selected state. The Projects sheet preserves list/gallery, category filters, desktop/mobile screenshot switching, downloads, previous/next project navigation and focus-returning dialogs. Public website links only where inspected; local/sample captures disclosed. No portrait or certificate placeholders while materials are unavailable. Shared biography and project text live in `src/content.ts`; some topic-specific bilingual copy lives in `src/App.tsx`. Project at C:/Users/Janchik/Desktop/zhanibek-portfolio. GitHub Pages deployment at https://kazakbayzhanibek.github.io/JanibekPortfolio/ uses `.github/workflows/deploy-pages.yml` to build and publish only `dist/`; never serve raw TypeScript sources.

## Brand Commitments

The user-selected poster replaces FRAME as the current visual authority: oxblood, mustard, moss, slate and cream form whole colored sheets, with Unbounded display lettering and readable Manrope prose. The person leads; projects support the story. Solid, opaque surfaces and immediate topic changes, not atmospheric blur, metric tiles or repeated biography cards. No invented testimonials, achievements, companies or credentials.

## Product Principles

- Let visitors get to know the person and explore his projects without a recruiting or sales pitch.
- Separate confirmed biography from illustrative content.
- Prioritize a distinctive composition over decorative effects.
- Preserve readable, accessible interaction in both languages.

## Retained Alternatives and Assets

Three working alternatives are deliberately retained in `src/previews/`: notebook (personal notes), editorial (a photographic magazine composition) and poster (the chosen direction). `design-preview.html` under the site's base path compares all three; `?view=notebook`, `?view=editorial` and `?view=poster` open each alternative. Vite builds both the main `index.html` and `design-preview.html`; these are maintained previews, not abandoned scaffolding or separate websites.

Local Unbounded and Prata font files and their OFL license texts live in `public/previews/assets/`; Manrope and IBM Plex Mono are bundled from local Fontsource packages. `public/previews/sources.json` records font sources, preview captures and the Unsplash-licensed mountain photo. That stock image is only used by the editorial alternative: it is not a photograph by or of Zhanibek, and no location is asserted. The selected main poster uses no personal photograph.

Ten project captures live in `public/images/projects/`, with capture sources, sample-data disclosures and limitations in `public/images/sources.json`. The three alternative captures live in `public/previews/`. Every WebP has a neighboring `.webp.json` provenance sidecar; the stock JPEG is recorded in the preview source record. Preserve these records when replacing images.
