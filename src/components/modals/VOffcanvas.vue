<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { Offcanvas } from 'bootstrap'

const props = defineProps<{
  modelValue?: boolean
  title?: string
  placement?: 'start' | 'end' | 'top' | 'bottom'
  backdrop?: boolean
  scroll?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const offcanvasRef = ref<HTMLElement | null>(null)
let bsOffcanvas: Offcanvas | null = null

onMounted(() => {
  if (!offcanvasRef.value) return
  bsOffcanvas = new Offcanvas(offcanvasRef.value, {
    backdrop: props.backdrop !== false,
    scroll: props.scroll ?? false,
  })

  offcanvasRef.value.addEventListener('hidden.bs.offcanvas', () => emit('update:modelValue', false))

  if (props.modelValue) bsOffcanvas.show()
})

watch(() => props.modelValue, (show) => {
  if (!bsOffcanvas) return
  if (show) bsOffcanvas.show()
  else bsOffcanvas.hide()
})

onBeforeUnmount(() => {
  bsOffcanvas?.dispose()
})
</script>

<template lang="pug">
div(ref="offcanvasRef" :class="['offcanvas', `offcanvas-${placement ?? 'start'}`]" tabindex="-1")
  div.offcanvas-header
    h5.offcanvas-title
      slot(name="title") {{ title }}
    button.btn-close(type="button" data-bs-dismiss="offcanvas" aria-label="Close")
  div.offcanvas-body
    slot
</template>
