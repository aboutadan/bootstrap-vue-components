<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue?: string
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  rows?: number | string
  label?: string
  id?: string
  isValid?: boolean | null
  helpText?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const textareaId = computed(() => props.id ?? (props.label ? `textarea-${props.label.toLowerCase().replace(/\s+/g, '-')}` : undefined))

const validationClass = computed(() => {
  if (props.isValid === true) return 'is-valid'
  if (props.isValid === false) return 'is-invalid'
  return ''
})

function onInput(event: Event) {
  emit('update:modelValue', (event.target as HTMLTextAreaElement).value)
}
</script>

<template lang="pug">
div
  label.form-label(v-if="label" :for="textareaId") {{ label }}
  textarea(:id="textareaId" :class="['form-control', validationClass]" :value="modelValue" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" :rows="rows ?? 3" @input="onInput")
  div.invalid-feedback(v-if="helpText && isValid === false") {{ helpText }}
  div.valid-feedback(v-else-if="helpText && isValid === true") {{ helpText }}
  div.form-text(v-else-if="helpText") {{ helpText }}
</template>
