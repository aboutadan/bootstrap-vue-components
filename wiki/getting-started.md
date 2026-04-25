# Getting Started

## Install

```bash
npm install bootstrap-custom-vue-ui
```

## Register The Library

Register everything globally:

```ts
import { createApp } from "vue";
import BootstrapCustomVueUi from "bootstrap-custom-vue-ui";
import App from "./App.vue";

createApp(App).use(BootstrapCustomVueUi).mount("#app");
```

Import components individually:

```ts
import { VButton, VCard, VModal } from "bootstrap-custom-vue-ui";
```

## Include Bootstrap Styles

The components use Bootstrap class names but do not inject Bootstrap CSS for you.

```scss
@import "bootstrap/scss/bootstrap";
```

Or, if you want to consume the package's bundled SCSS entry:

```scss
@import "bootstrap-custom-vue-ui/src/assets/scss/style.scss";
```

## General Patterns

### Slots

Most container components render their content through slots.

```vue
<v-card>
  <v-card-body>
    Slot content goes here.
  </v-card-body>
</v-card>
```

### Two-Way Bindings

Interactive overlay/navigation components such as modals, tabs, pagination, toasts, and collapse use `v-model` / `update:modelValue`.

```vue
<v-modal v-model="open">
  <v-modal-header title="Example" />
  <div class="modal-body">Hello</div>
</v-modal>
```

### Router Support

Components with a `to` prop render `router-link`.

```vue
<v-nav-item to="/settings">Settings</v-nav-item>
```

If your app does not use Vue Router, use `href` instead.
