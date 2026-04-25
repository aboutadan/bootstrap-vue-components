# Navigation

## VNavbar

Props:

- `brand`
- `expand`: `"sm" | "md" | "lg" | "xl" | "xxl"`
- `bg`
- `variant`: `"dark" | "light"`
- `fixed`: `"top" | "bottom"`
- `sticky`: `"top"`

```vue
<v-navbar brand="My App" bg="dark" variant="dark" expand="lg">
  <v-nav>
    <v-nav-item href="/">Home</v-nav-item>
    <v-nav-item to="/settings">Settings</v-nav-item>
  </v-nav>
</v-navbar>
```

## VNav And VNavItem

### VNav props

- `pills`
- `underline`
- `fill`
- `justified`
- `vertical`

### VNavItem props

- `href`
- `to`
- `active`
- `disabled`

Events:

- `click`

## VDropdown

Props:

- `text`
- `variant`
- `direction`: `"up" | "end" | "start"`
- `split`
- `menuAlign`: `"end"`
- `small`
- `borderNone`

Events:

- `show`
- `hide`

```vue
<v-dropdown text="Actions" variant="secondary">
  <v-dropdown-item href="/profile">Profile</v-dropdown-item>
  <v-dropdown-divider />
  <v-dropdown-item @click="logout">Logout</v-dropdown-item>
</v-dropdown>
```

## VDropdownItem And VDropdownDivider

### VDropdownItem props

- `href`
- `to`
- `active`
- `disabled`
- `header`

Events:

- `click`

### VDropdownDivider

No props.

## VBreadcrumb And VBreadcrumbItem

### VBreadcrumb props

- `divider`

### VBreadcrumbItem props

- `href`
- `to`
- `active`

```vue
<v-breadcrumb divider=">">
  <v-breadcrumb-item href="/">Home</v-breadcrumb-item>
  <v-breadcrumb-item active>Library</v-breadcrumb-item>
</v-breadcrumb>
```

## VTabs And VTab

`VTabs` provides tab registration and active index state to nested `VTab` children.

### VTabs props

- `modelValue`
- `pills`
- `fill`

Events:

- `update:modelValue`

### VTab props

- `title` required
- `disabled`

```vue
<v-tabs v-model="tabIndex">
  <v-tab title="Overview">Overview content</v-tab>
  <v-tab title="Details">Details content</v-tab>
</v-tabs>
```

## VPagination

Props:

- `modelValue`
- `totalPages` required
- `size`: `"sm" | "lg"`
- `limit`
- `align`: `"center" | "end"`

Events:

- `update:modelValue`

```vue
<v-pagination v-model="page" :total-pages="12" :limit="5" align="center" />
```
