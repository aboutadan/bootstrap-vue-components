# bootstrap-custom-vue-ui

A Vue 3 component library built on Bootstrap's SCSS — without Bootstrap's JavaScript. All interactivity is handled with pure Vue reactivity, so the only runtime dependency is Vue itself.

> **Note:** This is a work in progress. The library is functional but not feature-complete, and documentation is still being written. Things may change and some components may be underdocumented for now.

## Requirements

- **Vue** `^3.5.0`
- **Bootstrap CSS** — bring your own via npm, CDN, or use the bundled SCSS (see [Styles](#styles))

The tooltip and popover directives are **optional** and require `bootstrap` + `@popperjs/core` if used. See [Directives](#directives) below.

## Installation

```bash
npm install bootstrap-custom-vue-ui
```

### Global Registration (Plugin)

```js
import { createApp } from "vue";
import BootstrapVueComponents from "bootstrap-custom-vue-ui";

const app = createApp(App);
app.use(BootstrapVueComponents);
app.mount("#app");
```

This registers every component globally so you can use them directly in templates.

### Tree-Shakeable Imports

```js
import { VButton, VCard, VModal } from "bootstrap-custom-vue-ui";
```

Import only what you need and register components locally or globally.

## Styles

The components rely on Bootstrap's CSS classes but **don't ship their own styles**. You provide Bootstrap CSS however you prefer:

**Option A — Your own Bootstrap install (recommended)**

```bash
npm i bootstrap@5.3.8 bootstrap-icons
```

```scss
// your app's main stylesheet
@import "bootstrap/scss/bootstrap";
@import "bootstrap-icons/font/bootstrap-icons.css";
```

**Option B — Use the bundled SCSS**

This package vendors Bootstrap's SCSS source as a convenience. If you don't already have Bootstrap in your project, you can import it directly:

```scss
@import "bootstrap-custom-vue-ui/src/assets/scss/style.scss";
```

## Components

### Cards

| Component     | Description                                                     |
| ------------- | --------------------------------------------------------------- |
| `VCard`       | Card container — props: `variant`, `border`, `noBody`, `imgSrc` |
| `VCardHeader` | Card header — props: `tag`                                      |
| `VCardBody`   | Card body — props: `title`, `subtitle`                          |
| `VCardFooter` | Card footer                                                     |

```vue
<template>
  <v-card variant="primary" img-src="/hero.jpg">
    <v-card-body title="Card Title" subtitle="Subtitle">
      Some content goes here.
    </v-card-body>
    <v-card-footer>
      <v-button>Action</v-button>
    </v-card-footer>
  </v-card>
</template>
```

### Forms

| Component     | Description                                                                                                             |
| ------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `VInput`      | Text input — props: `modelValue`, `type`, `label`, `placeholder`, `size`, `isValid`, `helpText`, `disabled`, `readonly` |
| `VTextarea`   | Textarea — props: `modelValue`, `label`, `rows`, `placeholder`, `isValid`, `helpText`                                   |
| `VCheckbox`   | Checkbox — props: `modelValue`, `value`, `label`, `inline`, `indeterminate`, `disabled`                                 |
| `VRadio`      | Radio button — props: `modelValue`, `value`, `name`, `label`, `inline`, `disabled`                                      |
| `VSelect`     | Select dropdown — props: `modelValue`, `options`, `placeholder`, `multiple`, `size`, `label`                            |
| `VSwitch`     | Toggle switch — props: `modelValue`, `label`, `disabled`                                                                |
| `VInputGroup` | Input group wrapper — props: `size`, `prepend`, `append`                                                                |

```vue
<template>
  <v-input
    v-model="email"
    type="email"
    label="Email Address"
    placeholder="you@example.com"
    :is-valid="emailValid"
    help-text="We'll never share your email."
  />

  <v-select
    v-model="role"
    label="Role"
    :options="['Admin', 'Editor', 'Viewer']"
  />

  <v-checkbox v-model="agreed" label="I agree to the terms" />

  <v-switch v-model="notifications" label="Enable notifications" />
</template>
```

All form components support `isValid` (true/false/null) and `helpText` for validation feedback via the `useValidation` composable.

### Modals & Overlays

| Component         | Description                                                                            |
| ----------------- | -------------------------------------------------------------------------------------- |
| `VModal`          | Modal dialog — props: `modelValue`, `size`, `centered`, `scrollable`, `staticBackdrop` |
| `VModalHeader`    | Modal header with close button — props: `title`, `closeButton`                         |
| `VModalFooter`    | Modal footer                                                                           |
| `VOffcanvas`      | Slide-in panel — props: `modelValue`, `title`, `placement`, `backdrop`, `scroll`       |
| `VToast`          | Toast notification — props: `modelValue`, `title`, `variant`, `autohide`, `delay`      |
| `VToastContainer` | Positions toasts — props: `position`                                                   |

```vue
<template>
  <v-button @click="showModal = true">Open Modal</v-button>

  <v-modal v-model="showModal" size="lg" centered>
    <v-modal-header title="Confirm Action" />
    <div class="modal-body">
      <p>Are you sure you want to proceed?</p>
    </div>
    <v-modal-footer>
      <v-button variant="secondary" @click="showModal = false">Cancel</v-button>
      <v-button @click="confirm">Confirm</v-button>
    </v-modal-footer>
  </v-modal>
</template>

<script setup>
import { ref } from "vue";
const showModal = ref(false);
</script>
```

```vue
<!-- Toast example -->
<template>
  <v-toast-container position="top-end">
    <v-toast v-model="showToast" title="Success" variant="success">
      Your changes have been saved.
    </v-toast>
  </v-toast-container>
</template>
```

### Interactive

| Component        | Description                                                                  |
| ---------------- | ---------------------------------------------------------------------------- |
| `VButton`        | Button — props: `variant`, `size`, `small`, `disabled`, `type`, `block`      |
| `VButtonGroup`   | Button group — props: `size`, `vertical`                                     |
| `VCollapse`      | Collapsible content — props: `modelValue`, `horizontal`                      |
| `VAccordion`     | Accordion container — props: `flush`, `alwaysOpen`                           |
| `VAccordionItem` | Accordion panel — props: `title`, `show`                                     |
| `VCarousel`      | Carousel — props: `modelValue`, `controls`, `indicators`, `fade`, `interval` |
| `VCarouselItem`  | Carousel slide — props: `imgSrc`, `caption`                                  |

```vue
<template>
  <v-accordion flush>
    <v-accordion-item title="Section One" show>
      Content for section one.
    </v-accordion-item>
    <v-accordion-item title="Section Two">
      Content for section two.
    </v-accordion-item>
  </v-accordion>
</template>
```

### Data Display

| Component        | Description                                                                                             |
| ---------------- | ------------------------------------------------------------------------------------------------------- |
| `VTable`         | Data table — props: `items`, `fields`, `striped`, `bordered`, `hover`, `small`, `responsive`, `variant` |
| `VListGroup`     | List group — props: `flush`, `horizontal`, `numbered`                                                   |
| `VListGroupItem` | List group item — props: `active`, `disabled`, `variant`, `href`, `to`                                  |

```vue
<template>
  <v-table :items="users" :fields="['name', 'email', 'status']" striped hover>
    <template #cell(status)="{ value }">
      <v-badge :variant="value === 'active' ? 'success' : 'secondary'">
        {{ value }}
      </v-badge>
    </template>
  </v-table>
</template>
```

### Feedback

| Component      | Description                                                                                  |
| -------------- | -------------------------------------------------------------------------------------------- |
| `VAlert`       | Alert — props: `modelValue`, `variant`, `dismissible`, `icon`                                |
| `VBadge`       | Badge — props: `variant`, `pill`, `tag`                                                      |
| `VProgress`    | Progress bar — props: `value`, `variant`, `striped`, `animated`, `stacked`                   |
| `VProgressBar` | Individual bar (inside stacked VProgress) — props: `value`, `variant`, `striped`, `animated` |
| `VSpinner`     | Loading spinner — props: `type`, `variant`, `size`                                           |
| `VPlaceholder` | Placeholder skeleton — props: `cols`, `variant`, `size`, `animation`                         |

### Navigation

| Component          | Description                                                                      |
| ------------------ | -------------------------------------------------------------------------------- |
| `VNavbar`          | Responsive navbar — props: `brand`, `expand`, `bg`, `variant`, `fixed`, `sticky` |
| `VNav`             | Nav container — props: `pills`, `underline`, `fill`, `justified`, `vertical`     |
| `VNavItem`         | Nav link — props: `href`, `to`, `active`, `disabled`                             |
| `VDropdown`        | Dropdown menu — props: `text`, `variant`, `direction`, `split`, `menuAlign`, `small`, `borderNone` |
| `VDropdownItem`    | Dropdown menu item — props: `href`, `to`, `active`, `disabled`, `header`         |
| `VDropdownDivider` | Dropdown divider                                                                 |
| `VBreadcrumb`      | Breadcrumb — props: `divider`                                                    |
| `VBreadcrumbItem`  | Breadcrumb link — props: `href`, `to`, `active`                                  |
| `VTabs`            | Tab container — props: `modelValue`, `pills`, `fill`                             |
| `VTab`             | Tab panel — props: `title`, `disabled`                                           |
| `VPagination`      | Pagination — props: `modelValue`, `totalPages`, `size`, `limit`, `align`         |

## Composables

```js
import { useId, useValidation } from "bootstrap-custom-vue-ui";
```

| Composable                          | Description                                                                                                                |
| ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `useId(prefix?)`                    | Generates unique IDs (e.g. `'input-1'`, `'input-2'`). Used internally for form labels and accessibility.                   |
| `useValidation(isValid, helpText?)` | Returns `validationClass` (`is-valid` / `is-invalid` / `''`) and `feedbackType` computed refs for form validation styling. |

## Directives

The tooltip and popover directives are **not** included in the default plugin install. They depend on Bootstrap's JS and Popper, so consumers opt in explicitly.

**Additional peer dependencies for directives only:**

```bash
npm install bootstrap @popperjs/core
```

**Registration:**

```js
import vTooltip from "bootstrap-custom-vue-ui/directives/tooltip";
import vPopover from "bootstrap-custom-vue-ui/directives/popover";

app.directive("tooltip", vTooltip);
app.directive("popover", vPopover);
```

**Usage:**

```vue
<button v-tooltip="'Save your work'">Save</button>
<button v-tooltip:bottom="'Bottom tooltip'">Hover</button>

<button v-popover="{ title: 'Help', content: 'Details here' }">Info</button>
<button v-popover:right="'Simple popover text'">More</button>
```

## Contributing & Feedback

Have a suggestion, found a bug, or want to request a feature? Feel free to open an issue on GitHub.

## License

MIT
