# Changelog

All notable changes to this project are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
