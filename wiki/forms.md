# Forms

## Important Pattern

The form components in this library do not currently use `v-model`. They read and write through an injected `form` object keyed by each component's `name` prop.

```vue
<script setup lang="ts">
import { provide, reactive } from "vue";

const form = reactive({
  email: "",
  role: "",
  bio: "",
  agree: false,
});

provide("form", form);
</script>

<template>
  <v-input name="email" label="Email" />
  <v-select name="role" label="Role" :options="['Admin', 'Editor']" />
  <v-textarea name="bio" label="Bio" />
  <v-checkbox name="agree" label="I agree" />
</template>
```

## Validation

All field controls accept:

- `isValid`: `true`, `false`, or `undefined`
- `helpText`: helper, valid, or invalid message text

Use `undefined` when a field has no validation state yet.

```vue
<v-input
  name="email"
  label="Email"
  :is-valid="emailValid"
  help-text="Enter a valid email address."
/>
```

## VInput

Text-like input bound to `form[name]`.

Props:

- `name` required
- `type`
- `placeholder`
- `disabled`
- `readonly`
- `size`: `"sm" | "lg"`
- `label`
- `id`
- `isValid`
- `helpText`

```vue
<v-input
  name="email"
  type="email"
  label="Email"
  placeholder="you@example.com"
/>
```

## VTextarea

Textarea bound to `form[name]`.

Props:

- `name` required
- `placeholder`
- `disabled`
- `readonly`
- `rows`
- `label`
- `id`
- `isValid`
- `helpText`

```vue
<v-textarea
  name="notes"
  label="Notes"
  :rows="5"
/>
```

## VSelect

Select control bound to `form[name]`.

Props:

- `name` required
- `options`: array of strings or `{ value, text }`
- `placeholder`
- `multiple`
- `size`: `"sm" | "lg"`
- `disabled`
- `label`
- `id`
- `isValid`
- `helpText`

```vue
<v-select
  name="role"
  label="Role"
  :options="[
    { value: 'admin', text: 'Admin' },
    { value: 'editor', text: 'Editor' }
  ]"
/>
```

## VCheckbox

Checkbox bound to `form[name]`.

Behavior:

- If `form[name]` is a boolean, the checkbox toggles that boolean.
- If `form[name]` is an array and `value` is provided, the checkbox adds/removes `value` in that array.

Props:

- `name` required
- `value`
- `label`
- `inline`
- `indeterminate`
- `disabled`
- `id`
- `isValid`
- `helpText`

```vue
<v-checkbox name="agree" label="I agree to the terms" />

<v-checkbox
  name="tags"
  value="featured"
  label="Featured"
/>
```

## VRadio

Radio input bound to `form[name]`.

Props:

- `name` required
- `value` required
- `label`
- `inline`
- `disabled`
- `id`
- `isValid`
- `helpText`

```vue
<v-radio name="plan" value="basic" label="Basic" />
<v-radio name="plan" value="pro" label="Pro" />
```

## VSwitch

Switch-style checkbox bound to `form[name]`.

Props:

- `name` required
- `label`
- `disabled`
- `id`
- `isValid`
- `helpText`

```vue
<v-switch name="notifications" label="Enable notifications" />
```

## VLabel

Small wrapper for Bootstrap label markup.

Props:

- `for`
- `check`: use `form-check-label`
- `size`: `"sm" | "base"`

```vue
<v-label for="email">Email</v-label>
<v-label check for="agree">I agree</v-label>
```

## VInputGroup

Wrapper for Bootstrap input groups. Use the `label`, `prepend`, and `append` slots around your control.

Props:

- `size`: `"sm" | "lg"`
- `prepend`
- `append`

```vue
<v-input-group prepend="@">
  <template #label>Username</template>
  <input class="form-control" />
</v-input-group>
```
