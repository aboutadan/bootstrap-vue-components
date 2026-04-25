<script setup lang="ts">
defineProps<{
  type?: 'border' | 'grow'
  variant?: string
  size?: 'sm'
}>()
</script>

<template lang="pug">
div(:class="[ `spinner-${type ?? 'border'}`, variant && `text-${variant}`, size && `spinner-${type ?? 'border'}-${size}`, ]" role="status")
  span.visually-hidden Loading...
</template>
