<script setup lang="ts">
import type { BootstrapVariant } from '../../types'

defineProps<{
  type?: 'border' | 'grow'
  variant?: BootstrapVariant
  size?: 'sm'
}>()
</script>

<template lang="pug">
div(:class="[ `spinner-${type ?? 'border'}`, variant && `text-${variant}`, size && `spinner-${type ?? 'border'}-${size}`, ]" role="status")
  span.visually-hidden Loading...
</template>
