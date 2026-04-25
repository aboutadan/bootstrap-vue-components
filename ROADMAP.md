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

## v2.1 — Types-on-publish + library build

**Goal:** consumers `npm install` and get a real bundle with autocomplete, not raw `.vue` and `.ts` files.

- [ ] Configure Vite library mode (ESM output)
- [ ] Generate `.d.ts` files (e.g. `vite-plugin-dts`)
- [ ] Update `package.json` `main`, `module`, `types`, `exports` to point at built `dist/`
- [ ] Add `.npmignore` so we don't publish source noise
- [ ] Verify install works in a scratch project before publishing

---

## v2.2 — Modal accessibility + shared composables

**Goal:** deliver on the "better than Bootstrap JS" promise where it matters most.

- [ ] Focus trap in `VModal` (focusable elements stay inside while open)
- [ ] Restore focus to trigger element on close
- [ ] `aria-modal`, `aria-labelledby` wiring (auto-link to `VModalHeader` title)
- [ ] Reference-counted `modal-open` body class (don't strip it while another modal is open)
- [ ] Extract `useClickOutside` composable; refactor `VDropdown`, `VNavbar` to use it

---

## v2.3 — Typed variant unions

**Goal:** instant DX win — typos in `variant="primry"` become a TypeScript error.

- [ ] Define `BootstrapVariant` type (`"primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link"`)
- [ ] Apply across `VButton`, `VBadge`, `VAlert`, `VDropdown`, `VToast`, etc.
- [ ] Drop the redundant `small` prop on `VButton` in favor of `size="sm"` (deprecate first, remove in v3.0)

---

## v2.4 — Quality floor

**Goal:** the basics every published library should have.

- [ ] Add Vitest + `@vue/test-utils`
- [ ] Tests for `VButton`, `VModal`, `VDropdown` (sets the pattern for other components)
- [ ] ESLint config (Vue 3 + TypeScript)
- [ ] Prettier config (resolve current single/double quote drift)
- [ ] GitHub Actions: lint + typecheck + test on push/PR

---

## v2.5 — Docs site (later)

**Goal:** consumer-facing component reference with live examples.

- [ ] Pick a docs framework (VitePress is the obvious fit for a Vue lib)
- [ ] Auto-extract prop signatures from components (cix or vue-docgen)
- [ ] Live demo for each component
- [ ] Deploy to GitHub Pages

---

## v3.0 — Future breaking changes

**Goal:** clean up API debt accumulated by then.

- [ ] Remove deprecated `small` prop from `VButton`
- [ ] Reconsider `menuAlign?: "end"` → `menuAlign?: "start" | "end"` on `VDropdown`
- [ ] Anything else that needed a breaking change but couldn't ship in 2.x

---

## Working agreement

- One phase at a time. Don't start v2.2 work while v2.1 is half-done.
- Each phase ends with a published npm release and a `CHANGELOG.md` entry.
- This roadmap reflects intent. Git tags + `CHANGELOG.md` are the source of truth for what actually shipped.
