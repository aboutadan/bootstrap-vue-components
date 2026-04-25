<script setup lang="ts">
import { watch, onBeforeUnmount } from 'vue'
import type { BootstrapVariant } from '../../types'

const props = defineProps<{
  modelValue?: boolean
  title?: string
  variant?: BootstrapVariant
  autohide?: boolean
  delay?: number
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

let timer: ReturnType<typeof setTimeout> | null = null

function clearTimer() {
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
}

function startTimer() {
  clearTimer()
  if (props.autohide !== false) {
    timer = setTimeout(() => {
      emit('update:modelValue', false)
    }, props.delay ?? 5000)
  }
}

watch(() => props.modelValue, (show) => {
  if (show) startTimer()
  else clearTimer()
}, { immediate: true })

onBeforeUnmount(() => {
  clearTimer()
})
</script>

<template lang="pug">
div(:class="['toast', variant && `text-bg-${variant}`, modelValue && 'show']" role="alert")
  div.toast-header(v-if="title")
    strong.me-auto {{ title }}
    slot(name="header-extra")
    button.btn-close(type="button" aria-label="Close" @click="emit('update:modelValue', false)")
  div.toast-body
    slot
</template>
