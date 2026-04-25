<script setup lang="ts">
import { inject } from 'vue'

defineProps<{
  title?: string
  closeButton?: boolean
}>()

const close = inject<() => void>('modal-close', () => {})
</script>

<template lang="pug">
div.modal-header
  h5.modal-title
    slot {{ title }}
  button.btn-close(v-if="closeButton !== false" type="button" aria-label="Close" @click="close")
</template>
