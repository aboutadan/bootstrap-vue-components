# VButton

A drop-in replacement for `<button class="btn btn-primary">` with typed variants, sizes, and a slot for content.

## Basic usage

<div class="demo">
  <VButton>Default</VButton>
  <VButton variant="secondary">Secondary</VButton>
  <VButton variant="success">Success</VButton>
  <VButton variant="danger">Danger</VButton>
</div>

```vue
<VButton>Default</VButton>
<VButton variant="secondary">Secondary</VButton>
<VButton variant="success">Success</VButton>
<VButton variant="danger">Danger</VButton>
```

## Variants

`variant` accepts the standard Bootstrap colors plus `link` and `outline-*` variants.

<div class="demo">
  <VButton variant="primary">Primary</VButton>
  <VButton variant="warning">Warning</VButton>
  <VButton variant="info">Info</VButton>
  <VButton variant="dark">Dark</VButton>
  <VButton variant="link">Link</VButton>
  <VButton variant="outline-primary">Outline</VButton>
  <VButton variant="outline-danger">Outline danger</VButton>
</div>

```vue
<VButton variant="link">Link</VButton>
<VButton variant="outline-primary">Outline</VButton>
```

## Sizes

<div class="demo">
  <VButton size="sm">Small</VButton>
  <VButton>Default</VButton>
  <VButton size="lg">Large</VButton>
</div>

```vue
<VButton size="sm">Small</VButton>
<VButton size="lg">Large</VButton>
```

## Block

Adds the `w-100` utility so the button fills its container.

<div class="demo">
  <VButton block variant="primary">Block button</VButton>
</div>

```vue
<VButton block variant="primary">Block button</VButton>
```

## Disabled

<div class="demo">
  <VButton disabled>Disabled</VButton>
  <VButton variant="danger" disabled>Also disabled</VButton>
</div>

```vue
<VButton disabled>Disabled</VButton>
```

## Props

| Prop       | Type                      | Default     | Description                                                |
| ---------- | ------------------------- | ----------- | ---------------------------------------------------------- |
| `variant`  | `BootstrapButtonVariant`  | `"primary"` | Button color: `primary`, `secondary`, ..., `link`, `outline-*` |
| `size`     | `"sm" \| "lg"`            | —           | Bootstrap button size                                      |
| `disabled` | `boolean`                 | `false`     | Disables the button                                        |
| `type`     | `"button" \| "submit" \| "reset"` | `"button"`  | Native HTML button type                            |
| `block`    | `boolean`                 | `false`     | Adds `w-100` so the button fills its container             |

## Events

| Event   | Payload      | Description           |
| ------- | ------------ | --------------------- |
| `click` | `MouseEvent` | Fires on user click   |

<style scoped>
.demo {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 1rem 0;
}
</style>
