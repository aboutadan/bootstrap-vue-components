# Wiki

This folder contains usage docs for the components in `bootstrap-custom-vue-ui`.

## Start Here

- [Getting Started](./getting-started.md)
- [Forms](./forms.md)
- [Cards, Data, and Feedback](./ui-basics.md)
- [Interactive Components](./interactive.md)
- [Navigation](./navigation.md)
- [Modals and Overlays](./overlays.md)

## Notes

- The library depends on Bootstrap's CSS classes. Include Bootstrap styles in the consuming app.
- Some components use `router-link` when you pass a `to` prop. Those require Vue Router in the consuming app.
- Form controls currently read and write values through an injected `form` object, not `v-model`.
