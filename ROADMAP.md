# Roadmap

## Vision

`bootstrap-custom-vue-ui` is a Vue 3 component library that wraps Bootstrap's CSS without pulling in Bootstrap's JavaScript. The goal is a small, idiomatic Vue package that's pleasant to install, has accurate types, and delivers better accessibility than Bootstrap's vanilla JS components — because we have full control over the implementation.

The project is a side project, not a corporate product. Quality over breadth: ship fewer components but get the basics right (build, types, a11y, tests) before adding more.

## Status

Current published version: **v2.0.0**

Phases below are sized so each one is shippable on its own. Don't move to the next phase until the current one is published.

---

## v2.0 — Layout cleanup ✓

Shipped 2026-04-25. Breaking change: vendored Bootstrap SCSS moved from `src/scss/` to `src/assets/scss/`.

- [x] Move `src/scss/` → `src/assets/scss/`
- [x] Update public export path in `package.json`
- [x] Update README + wiki import path
- [x] Bump version to 2.0.0
- [x] Document in CHANGELOG

---

## v2.1 — Types-on-publish + library build ✓

Shipped 2026-04-25. Consumers `npm install` and get ESM + CJS + `.d.ts`.

- [x] Configure Vite library mode (ESM + CJS output)
- [x] Generate `.d.ts` files (`vite-plugin-dts`)
- [x] Update `package.json` `main`, `module`, `types`, `exports` to point at built `dist/`
- [x] Use `files` allowlist in package.json (chose this over `.npmignore` — stricter)
- [x] Verify install works in a scratch project before publishing

---

## v2.2 — Modal accessibility + shared composables ✓

Shipped 2026-04-25.

- [x] Focus trap in `VModal` (focusable elements stay inside while open)
- [x] Restore focus to trigger element on close
- [x] `aria-modal`, `aria-labelledby` wiring (auto-link to `VModalHeader` title)
- [x] Reference-counted `modal-open` body class (don't strip it while another modal is open)
- [x] Extract `useClickOutside` composable; refactor `VDropdown` to use it (`VNavbar` doesn't have click-outside logic, so no refactor needed; `VOffcanvas` has similar modal patterns and could use the same a11y treatment in a later phase)

---

## v2.3 — Typed variant unions ✓

Shipped 2026-04-25.

- [x] Define `BootstrapVariant` (8 colors) and `BootstrapButtonVariant` (adds `link` + `outline-*`)
- [x] Applied to VCard, VAlert, VSpinner, VToast, VPlaceholder, VProgress, VProgressBar, VBadge, VListGroupItem, VTable, VButton, VDropdown
- [x] `small` prop on `VButton` deprecated (JSDoc + runtime warn); removal targets v3.0

---

## v2.4 — Quality floor ✓

Shipped 2026-04-25.

- [x] Add Vitest + `@vue/test-utils` + happy-dom
- [x] Tests for `VButton`, `VModal`, `VDropdown` plus `useId`, `useValidation`, `useClickOutside` (37 tests across 6 files)
- [x] ESLint flat config (Vue 3 + TypeScript) with sensible defaults for this codebase
- [x] Prettier config (double quotes + semicolons + es5 trailing commas); whole codebase reformatted in one commit
- [x] GitHub Actions: format:check + lint + typecheck + test + build on push/PR

---

## v2.5 — Docs site (minimum viable shipped)

Shipped 2026-04-25 as a scaffold. Adding component pages is incremental work — each new page is a small PR.

- [x] VitePress in `docs/`, Vue plugin registered in the theme
- [x] Landing page + Getting Started guide
- [x] **VButton** as the component-page pattern (live demos, prop table, code samples)
- [x] GitHub Pages deployment workflow (.github/workflows/deploy-docs.yml)
- [ ] Component pages for the remaining ~37 components (write incrementally; pattern is set)
- [ ] Auto-extract prop signatures (vue-docgen-api or cix `get_symbol`) — currently hand-written tables
- [ ] Repo: enable Pages with "GitHub Actions" as source (one-time UI step)

---

## v3.0 — Drop deprecated API ✓

Shipped 2026-04-25. Completes the deprecation cycle started in v2.3.

- [x] Remove deprecated `small` prop from `VButton`
- [ ] ~~Reconsider `menuAlign?: "end"` → `menuAlign?: "start" | "end"`~~ (decided not to: only `"end"` does anything in Bootstrap; making it accept `"start"` would be misleading. Left as-is.)

---

## Beyond v3.0 (no fixed schedule)

These are open follow-ups, not committed phases:

- VOffcanvas a11y: mirror v2.2's modal work (focus trap, aria, ref-counted body class)
- More component pages in the docs site (~37 remaining)
- vue-docgen-api integration so prop tables auto-generate from source
- Generic typing on VTable's `items` so cell renders are type-safe per row
- Replace internal `useId` with Vue 3.5's built-in `useId` for SSR-safe IDs (keep our export as a thin re-export for backwards compat)

---

## Working agreement

- One phase at a time. Don't start v2.2 work while v2.1 is half-done.
- Each phase ends with a published npm release and a `CHANGELOG.md` entry.
- This roadmap reflects intent. Git tags + `CHANGELOG.md` are the source of truth for what actually shipped.
