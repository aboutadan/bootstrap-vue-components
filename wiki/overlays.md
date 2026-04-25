# Modals and Overlays

## VModal

Props:

- `modelValue`
- `size`: `"sm" | "lg" | "xl"`
- `centered`
- `scrollable`
- `staticBackdrop`

Events:

- `update:modelValue`

`VModal` provides a `modal-close` function to nested `VModalHeader`.

```vue
<v-modal v-model="showModal" size="lg" centered>
  <v-modal-header title="Confirm" />
  <div class="modal-body">
    Are you sure?
  </div>
  <v-modal-footer>
    <v-button variant="secondary" @click="showModal = false">Cancel</v-button>
    <v-button>Confirm</v-button>
  </v-modal-footer>
</v-modal>
```

## VModalHeader

Props:

- `title`
- `closeButton`

## VModalFooter

No props.

## VOffcanvas

Props:

- `modelValue`
- `title`
- `placement`: `"start" | "end" | "top" | "bottom"`
- `backdrop`
- `scroll`

Events:

- `update:modelValue`

```vue
<v-offcanvas v-model="showPanel" title="Filters" placement="end">
  Panel content
</v-offcanvas>
```

## VToast

Props:

- `modelValue`
- `title`
- `variant`
- `autohide`
- `delay`

Events:

- `update:modelValue`

```vue
<v-toast-container position="top-end">
  <v-toast v-model="showToast" title="Saved" variant="success">
    Changes saved successfully.
  </v-toast>
</v-toast-container>
```

## VToastContainer

Props:

- `position`: `"top-start" | "top-center" | "top-end" | "middle-center" | "bottom-start" | "bottom-center" | "bottom-end"`
