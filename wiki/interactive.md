# Interactive Components

## VButton

Props:

- `variant`
- `size`: `"sm" | "lg"`
- `disabled`
- `type`: `"button" | "submit" | "reset"`
- `block`
- `small`

Events:

- `click`

```vue
<v-button variant="primary" @click="save">Save</v-button>
```

## VButtonGroup

Props:

- `size`: `"sm" | "lg"`
- `vertical`

```vue
<v-button-group>
  <v-button variant="outline-primary">Left</v-button>
  <v-button variant="outline-primary">Right</v-button>
</v-button-group>
```

## VCollapse

Props:

- `modelValue`
- `horizontal`

Events:

- `update:modelValue`

```vue
<v-button @click="open = !open">Toggle</v-button>
<v-collapse v-model="open">
  <div class="card card-body">Collapsible content</div>
</v-collapse>
```

## VAccordion And VAccordionItem

`VAccordion` provides shared state to nested `VAccordionItem` components.

### VAccordion props

- `flush`
- `alwaysOpen`

### VAccordionItem props

- `title`
- `show`

```vue
<v-accordion flush>
  <v-accordion-item title="Section One" show>
    First section
  </v-accordion-item>
  <v-accordion-item title="Section Two">
    Second section
  </v-accordion-item>
</v-accordion>
```

## VCarousel And VCarouselItem

`VCarousel` provides the active index to nested `VCarouselItem` components.

### VCarousel props

- `modelValue`
- `controls`
- `indicators`
- `fade`
- `interval`

Events:

- `update:modelValue`

### VCarouselItem props

- `imgSrc`
- `caption`

```vue
<v-carousel controls indicators :interval="4000">
  <v-carousel-item img-src="/slide-1.jpg" caption="First slide" />
  <v-carousel-item img-src="/slide-2.jpg" caption="Second slide" />
</v-carousel>
```
