# Feature: Concept Demo V2 Redesign (La Locura Bar)

Implement the frozen V2 "Street Editorial Nocturno" design system and 9-section architecture following the `concept-demo` protocol and visual/editorial specifications in `docs/`.

## Specs

- S1: Foundation & Design Tokens — Install required typography (`@fontsource/anton`, `@fontsource/manrope`, `@fontsource/caveat`) and icons (`lucide-astro`). Configure Tailwind v4 `@theme` in `src/styles/global.css` with V2 tokens (`#171315`, `#F5EBDD`, `#E60068`, `#FFB936`, `#24201F`, `#625852`).
- S2: Asset Migration — Copy and organize standalone image assets from `docs/*_image*.png` into `public/images/` with clear semantic filenames.
- S3: Centralized Data Layer — Centralize business data, verified copy, navigation, drinks menu, and FAQs in `src/data/siteConfig.ts` strictly matching `docs/COPY.md` (no fake data or hallucinated prices).
- S4: Section 01 Hero & Header — Rebuild TopBar/Header navigation and Section 01 Hero (`#inicio`), verify zero horizontal overflow, and visually audit against `1_hero_desktop.png` and `1_hero_mobile.png`.
- S5: Section 02 Manifiesto / La Esencia — Implement Section 02 (`#esencia`), verify with Playwright against `2_la_esencia_desktop.png` and `2_la_esencia_mobile.png`.
- S6: Section 03 Experiencias / Así se vive — Implement Section 03 (`#experiencias`) with 3 activity cards, verify against `3_asi_se_vive_desktop.png` and `3_asi_se_vive_mobile.png`.
- S7: Section 04 Carta — Implement Section 04 drinks menu (`#carta`), verify against `4_menu_desktop.png` and `4_menu_mobile.png`.
- S8: Section 05 Calculadora — Implement Section 05 interactive party budget calculator (`#calculadora`), verify against `5_calculadora_desktop.png` and `5_calculadora_mobile.png`.
- S9: Section 06 Reservas — Implement Section 06 table reservation CTA/form with dynamic WhatsApp URL generation (`#reservas`), verify against `6_reservar_desktop.png` and `6_reservar_mobile.png`.
- S10: Section 07 FAQ — Implement Section 07 accordion (`#preguntas`), verify against `8_faq_desktop.png` and `8_faq_mobile.png`.
- S11: Section 08 Ubicación — Implement Section 08 location details, map anchor, and directions CTA (`#ubicacion`), verify against `7_ubicacion_desktop.png` and `7_ubicacion_mobile.png`.
- S12: Section 09 Footer — Implement Section 09 footer (`#footer`), verify against `9_footer_desktop.png` and `9_footer_mobile.png`.
- S13: Visual Certification & Polish — Run full Playwright test suite across Desktop (1440x900) and Mobile (390x844), ensuring 0 console errors, 0 broken images, 0 horizontal overflow.

## Tasks

| ID | Spec | Route | Commit | Status |
| --- | --- | --- | --- | --- |
| T1 | S1, S2, S3 | inline | 0c93419 | completed |
| T2 | S4 | inline | 7dfe9a0 | completed |
| T3 | S5 | inline | 7497e37 | completed |
| T4 | S6 | inline | 7497e37 | completed |
| T5 | S7 | inline | 7497e37 | completed |
| T6 | S8 | inline | 7497e37 | completed |
| T7 | S9 | inline | 7497e37 | completed |
| T8 | S10 | inline | 7497e37 | completed |
| T9 | S11 | inline | 7497e37 | completed |
| T10 | S12 | inline | 7497e37 | completed |
| T11 | S13 | inline | 7497e37 | completed |

## Log

- L1: User requested: "rey vamos a actualizar el proyecto, usemos la skill concept-demo y las imagenes que estan en docs/ por favor, anliza bien antes de iniciar por favor y me dices"
- L2: Analysis presented to user outlining Gate 0 pass, two-phase execution, and asking authorization for Phase 1 (foundations).
- L3: User confirmed: "si rey, demosle a ese por favor". Starting T1 (Foundations: fonts, CSS tokens, assets, siteConfig).
