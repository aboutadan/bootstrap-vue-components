# Vue Conventions

## Component Structure

Always `<template> → <script> → <style>`. Never reorder.

```vue
<template>
  ...
</template>

<script setup>
...
</script>

<style scoped>
...
</style>
```

## Script

- Always `<script setup>` with Composition API. Never Options API.
- `defineProps` / `defineEmits` at the top of the script block.
- `const` over `let` for refs and computed.

```vue
<script setup>
const props = defineProps({ userId: String })
const emit = defineEmits(['updated'])

const user = ref(null)
const isLoading = ref(false)
</script>
```

## Component Naming

- PascalCase filenames: `UserCard.vue`, `OrderForm.vue`
- Suffix by role:
  - `*View.vue` — routed page component
  - `*Form.vue` / `*FormFields.vue` — form or form fields
  - `*List.vue` — list rendering sub-component
  - `*Card.vue` — card-style item
  - `*Modal.vue` — modal dialog
  - `*Drawer.vue` — drawer/offcanvas panel

## Composables

- Live in `src/composables/`. Named `use*` in camelCase.
- One concern per composable.
- Call `search_code` before creating a new composable — it may already exist.

```js
// src/composables/useUser.js
export function useUser(userId) {
  const user = ref(null)
  const isLoading = ref(false)
  // ...
  return { user, isLoading }
}
```

## State Management (Pinia)

- Stores live in `src/stores/`.
- Named `use*Store`: `useUserStore`, `useOrderStore`.
- When renaming a store, update atomically: export name, store ID string, all method names.

## Props

- Define types explicitly. Mark optional props with `?` or provide defaults.
- Avoid mutating props — emit an event to request the change.

## Reactivity

- Use `ref()` for primitives, `reactive()` for objects when the whole object is reactive.
- Prefer `computed()` over methods for derived values.
- `watch` for side effects, `watchEffect` sparingly.

## Template

- Keep logic out of templates. Extract to computed properties.
- Use `v-if` / `v-else` over ternaries in template.
- Always provide `:key` on `v-for`.
- Use `@event` shorthand, not `v-on:event`.

## Styles

- `<style scoped>` for component-specific rules.
- Global styles go in `src/assets/` or `src/styles/`.
- Use utility classes first; scoped CSS for overrides only.
