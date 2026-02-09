<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { Toast } from 'bootstrap'

const props = defineProps<{
  modelValue?: boolean
  title?: string
  variant?: string
  autohide?: boolean
  delay?: number
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const toastRef = ref<HTMLElement | null>(null)
let bsToast: Toast | null = null

onMounted(() => {
  if (!toastRef.value) return
  bsToast = new Toast(toastRef.value, {
    autohide: props.autohide !== false,
    delay: props.delay ?? 5000,
  })

  toastRef.value.addEventListener('hidden.bs.toast', () => emit('update:modelValue', false))

  if (props.modelValue) bsToast.show()
})

watch(() => props.modelValue, (show) => {
  if (!bsToast) return
  if (show) bsToast.show()
  else bsToast.hide()
})

onBeforeUnmount(() => {
  bsToast?.dispose()
})
</script>

<template lang="pug">
div(ref="toastRef" :class="['toast', variant && `text-bg-${variant}`]" role="alert")
  div.toast-header(v-if="title")
    strong.me-auto {{ title }}
    slot(name="header-extra")
    button.btn-close(type="button" data-bs-dismiss="toast" aria-label="Close")
  div.toast-body
    slot
</template>
