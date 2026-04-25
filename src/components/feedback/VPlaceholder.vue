<script setup lang="ts">
import type { BootstrapVariant } from '../../types'

defineProps<{
  cols?: number | string
  variant?: BootstrapVariant
  size?: 'xs' | 'sm' | 'lg'
  animation?: 'glow' | 'wave'
}>()
</script>

<template lang="pug">
p(v-if="animation" :class="`placeholder-${animation}`")
  slot
    span(:class="['placeholder', cols && `col-${cols}`, variant && `bg-${variant}`, size && `placeholder-${size}`]")
span(v-else :class="['placeholder', cols && `col-${cols}`, variant && `bg-${variant}`, size && `placeholder-${size}`]")
  slot
</template>
