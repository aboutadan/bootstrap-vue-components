<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { Modal } from 'bootstrap'

const props = defineProps<{
  modelValue?: boolean
  size?: 'sm' | 'lg' | 'xl'
  centered?: boolean
  scrollable?: boolean
  staticBackdrop?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const modalRef = ref<HTMLElement | null>(null)
let bsModal: Modal | null = null

onMounted(() => {
  if (!modalRef.value) return
  bsModal = new Modal(modalRef.value, {
    backdrop: props.staticBackdrop ? 'static' : true,
    keyboard: !props.staticBackdrop,
  })

  modalRef.value.addEventListener('hidden.bs.modal', () => {
    emit('update:modelValue', false)
  })

  if (props.modelValue) {
    bsModal.show()
  }
})

watch(() => props.modelValue, (show) => {
  if (!bsModal) return
  if (show) bsModal.show()
  else bsModal.hide()
})

onBeforeUnmount(() => {
  bsModal?.dispose()
})
</script>

<template lang="pug">
div.modal.fade(ref="modalRef" tabindex="-1")
  div(:class="[ 'modal-dialog', size && `modal-${size}`, centered && 'modal-dialog-centered', scrollable && 'modal-dialog-scrollable', ]")
    div.modal-content
      slot
</template>
