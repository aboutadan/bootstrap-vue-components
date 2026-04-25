# Cards, Data, and Feedback

## Cards

### VCard

Props:

- `variant`
- `border`
- `noBody`
- `imgSrc`

```vue
<v-card variant="primary" img-src="/hero.jpg">
  <v-card-body title="Card Title" subtitle="Subtitle">
    Card content.
  </v-card-body>
  <v-card-footer>
    <v-button>Action</v-button>
  </v-card-footer>
</v-card>
```

### VCardHeader

Props:

- `tag`

### VCardBody

Props:

- `title`
- `subtitle`

### VCardFooter

No props. Renders a standard `.card-footer`.

## Data Components

### VTable

Props:

- `items`
- `fields`
- `striped`
- `bordered`
- `hover`
- `small`
- `responsive`
- `variant`

Slots:

- `head(fieldKey)`
- `cell(fieldKey)`

```vue
<v-table :items="users" :fields="['name', 'email', 'status']" striped hover>
  <template #cell(status)="{ value }">
    <v-badge :variant="value === 'active' ? 'success' : 'secondary'">
      {{ value }}
    </v-badge>
  </template>
</v-table>
```

### VListGroup

Props:

- `flush`
- `horizontal`: `true | "sm" | "md" | "lg" | "xl" | "xxl"`
- `numbered`

### VListGroupItem

Props:

- `active`
- `disabled`
- `variant`
- `href`
- `to`

Events:

- `click`

```vue
<v-list-group>
  <v-list-group-item active>Dashboard</v-list-group-item>
  <v-list-group-item to="/settings">Settings</v-list-group-item>
</v-list-group>
```

## Feedback Components

### VAlert

Props:

- `modelValue`
- `variant`
- `dismissible`
- `icon`

Events:

- `update:modelValue`

```vue
<v-alert v-model="showAlert" variant="warning" dismissible icon="exclamation-triangle">
  Warning message
</v-alert>
```

### VBadge

Props:

- `variant`
- `pill`
- `tag`

### VPlaceholder

Props:

- `cols`
- `variant`
- `size`: `"xs" | "sm" | "lg"`
- `animation`: `"glow" | "wave"`

### VSpinner

Props:

- `type`: `"border" | "grow"`
- `variant`
- `size`: `"sm"`

### VProgress

Props:

- `value`
- `variant`
- `striped`
- `animated`
- `stacked`

### VProgressBar

Props:

- `value`
- `variant`
- `striped`
- `animated`

```vue
<v-progress :value="60" variant="success" striped />
```
