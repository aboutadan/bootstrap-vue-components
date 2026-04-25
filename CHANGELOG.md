# Changelog

All notable changes to this project are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.2.0] — 2026-04-25

### Added

- `VModal` now traps Tab/Shift+Tab focus inside the dialog while open and restores focus to the triggering element on close.
- `VModal` exposes proper ARIA: `role="dialog"`, `aria-modal="true"`, and `aria-labelledby` automatically wired to `VModalHeader`'s title id.
- New `useClickOutside` composable (also exported from the package).

### Changed

- `VModal`'s `modal-open` body class is now reference-counted, so closing one modal no longer strips the class while another modal is still open.
- `VDropdown` refactored to use `useClickOutside` instead of an inline document listener.

## [2.1.0] — 2026-04-25

### Added

- Real build pipeline: package now ships `dist/` with ESM (`.js`), CJS (`.cjs`), and TypeScript declaration files (`.d.ts`) for all components, composables, and directives.
- `peerDependenciesMeta` marks `bootstrap` and `@popperjs/core` as optional — consumers only need them if they use the tooltip/popover directives.

### Changed

- `package.json`:
  - `main` → `./dist/index.cjs`
  - `module` → `./dist/index.js`
  - `types` → `./dist/index.d.ts`
  - `exports` map updated to expose `types/import/require` triplets for `.`, `./directives/tooltip`, `./directives/popover`. The `./src/assets/scss/*` export remains source-served (consumed at consumer build time).
  - `files` allowlist: published tarball now includes only `dist/` and `src/assets/scss/` (~470kB packed).

### Internal

- Added `vite-plugin-dts` for declaration generation.
- Added `bootstrap`, `@popperjs/core`, `@types/bootstrap` as devDependencies (used only at build time for type resolution).
- `dist/` is gitignored.

## [2.0.0] — 2026-04-25

### Changed

- **Breaking:** Vendored Bootstrap SCSS moved from `src/scss/` to `src/assets/scss/` to align with conventional Vue project layout.
- **Breaking:** Public export path changed from `bootstrap-custom-vue-ui/src/scss/*` to `bootstrap-custom-vue-ui/src/assets/scss/*`.

### Migration

If you import the bundled SCSS (Option B in the README), update your import:

```diff
- @import "bootstrap-custom-vue-ui/src/scss/style.scss";
+ @import "bootstrap-custom-vue-ui/src/assets/scss/style.scss";
```

If you bring your own Bootstrap install (Option A), no changes are required.

## [1.0.0]

Initial public release.
