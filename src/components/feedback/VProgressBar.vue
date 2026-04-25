<script setup lang="ts">
defineProps<{
  value?: number
  variant?: string
  striped?: boolean
  animated?: boolean
}>()
</script>

<template lang="pug">
div.progress(role="progressbar" :style="{ width: `${value ?? 0}%` }")
  div(:class="[ 'progress-bar', variant && `bg-${variant}`, striped && 'progress-bar-striped', animated && 'progress-bar-animated', ]")
    slot {{ value != null ? `${value}%` : '' }}
</template>
