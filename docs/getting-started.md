# Getting Started

## Install

```bash
npm install bootstrap-custom-vue-ui
```

The library has a single required peer dependency, Vue 3.5+. If you want to use the optional `v-tooltip` and `v-popover` directives, also install `bootstrap` and `@popperjs/core`.

## Register the library

Register everything globally as a Vue plugin:

```ts
import { createApp } from "vue";
import BootstrapCustomVueUi from "bootstrap-custom-vue-ui";
import App from "./App.vue";

createApp(App).use(BootstrapCustomVueUi).mount("#app");
```

Or import components individually for tree-shaking:

```ts
import { VButton, VCard, VModal } from "bootstrap-custom-vue-ui";
```

## Include Bootstrap styles

The components use Bootstrap class names but do not inject Bootstrap CSS for you. Pick one:

**Option A — bring your own Bootstrap install (recommended).**

```bash
npm install bootstrap
```

```scss
@import "bootstrap/scss/bootstrap";
```

**Option B — use the bundled SCSS entry.**

```scss
@import "bootstrap-custom-vue-ui/src/assets/scss/style.scss";
```

## General patterns

### Slots

Most container components render their content through slots.

```vue
<v-card>
  <v-card-body>
    Slot content goes here.
  </v-card-body>
</v-card>
```

### Two-way bindings

Interactive overlays (modals, toasts) and stateful navigation (tabs, pagination, collapse) use `v-model`.

```vue
<v-modal v-model="open">
  <v-modal-header title="Example" />
  <div class="modal-body">Hello</div>
</v-modal>
```

### Router support

Components with a `to` prop render `router-link` automatically.

```vue
<v-nav-item to="/settings">Settings</v-nav-item>
```

If your app doesn't use Vue Router, use `href` instead.

## Optional directives

The `v-tooltip` and `v-popover` directives are not registered by the default plugin install — they depend on Bootstrap's JS and Popper, so they're opt-in.

```ts
import vTooltip from "bootstrap-custom-vue-ui/directives/tooltip";
import vPopover from "bootstrap-custom-vue-ui/directives/popover";

app.directive("tooltip", vTooltip);
app.directive("popover", vPopover);
```

```vue
<button v-tooltip="'Save your work'">Save</button>
<button v-popover="{ title: 'Help', content: 'Details here' }">Info</button>
```
