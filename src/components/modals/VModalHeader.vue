<script setup lang="ts">
defineProps<{
  title?: string
  closeButton?: boolean
}>()
</script>

<template lang="pug">
div.modal-header
  h5.modal-title
    slot {{ title }}
  button.btn-close(v-if="closeButton !== false" type="button" data-bs-dismiss="modal" aria-label="Close")
</template>
