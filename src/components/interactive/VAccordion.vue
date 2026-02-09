<script setup lang="ts">
import { provide } from 'vue'
import { useId } from '../../composables/useId'

const props = defineProps<{
  flush?: boolean
  alwaysOpen?: boolean
}>()

const accordionId = useId('accordion')

provide('accordion', {
  id: accordionId,
  alwaysOpen: props.alwaysOpen ?? false,
})
</script>

<template lang="pug">
div(:id="accordionId" :class="['accordion', flush && 'accordion-flush']")
  slot
</template>
