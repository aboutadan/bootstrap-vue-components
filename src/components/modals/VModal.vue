<script setup lang="ts">
import { ref, watch, onBeforeUnmount, provide, nextTick } from 'vue'

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

const visible = ref(props.modelValue ?? false)
const modalRef = ref<HTMLElement | null>(null)

function open() {
  visible.value = true
  document.body.classList.add('modal-open')
  nextTick(() => modalRef.value?.focus())
}

function close() {
  visible.value = false
  document.body.classList.remove('modal-open')
  emit('update:modelValue', false)
}

provide('modal-close', close)

function onBackdropClick(e: MouseEvent) {
  if (props.staticBackdrop) return
  if (e.target === modalRef.value) close()
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && !props.staticBackdrop) close()
}

watch(() => props.modelValue, (val) => {
  if (val) open()
  else if (visible.value) close()
})

onBeforeUnmount(() => {
  document.body.classList.remove('modal-open')
})
</script>

<template lang="pug">
div(v-if="visible")
  div.modal.fade.show.d-block(ref="modalRef" tabindex="-1" @click="onBackdropClick" @keydown="onKeydown")
    div(:class="[ 'modal-dialog', size && `modal-${size}`, centered && 'modal-dialog-centered', scrollable && 'modal-dialog-scrollable', ]")
      div.modal-content
        slot
  div.modal-backdrop.fade.show
</template>
