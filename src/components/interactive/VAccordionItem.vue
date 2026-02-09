<script setup lang="ts">
import { inject, ref } from 'vue'
import { useId } from '../../composables/useId'

defineProps<{
  title?: string
  show?: boolean
}>()

const accordion = inject<{ id: string; alwaysOpen: boolean }>('accordion', { id: '', alwaysOpen: false })
const itemId = useId('acc-item')
const isOpen = ref(false)
</script>

<template lang="pug">
div.accordion-item
  h2.accordion-header
    button(:class="['accordion-button', !show && 'collapsed']" type="button" data-bs-toggle="collapse" :data-bs-target="`#${itemId}`" @click="isOpen = !isOpen")
      slot(name="title") {{ title }}
  div(:id="itemId" :class="['accordion-collapse collapse', show && 'show']" :data-bs-parent="accordion.alwaysOpen ? undefined : `#${accordion.id}`")
    div.accordion-body
      slot
</template>
