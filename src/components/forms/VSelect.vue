<script setup lang="ts">
import { computed, toRef } from 'vue'
import { useId } from '../../composables/useId'
import { useValidation } from '../../composables/useValidation'

type OptionItem = string | { value: string | number; text: string }

const props = defineProps<{
  modelValue?: string | number | string[]
  options?: OptionItem[]
  placeholder?: string
  multiple?: boolean
  size?: 'sm' | 'lg'
  disabled?: boolean
  label?: string
  id?: string
  isValid?: boolean | null
  helpText?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string | number | string[]]
}>()

const selectId = computed(() => props.id ?? (props.label ? useId('select') : undefined))
const { validationClass, feedbackType } = useValidation(toRef(props, 'isValid'), toRef(props, 'helpText'))

const normalizedOptions = computed(() =>
  (props.options ?? []).map(o => typeof o === 'string' ? { value: o, text: o } : o)
)

function onChange(event: Event) {
  const el = event.target as HTMLSelectElement
  if (props.multiple) {
    const values = Array.from(el.selectedOptions, o => o.value)
    emit('update:modelValue', values)
  } else {
    emit('update:modelValue', el.value)
  }
}
</script>

<template lang="pug">
div
  label.form-label(v-if="label" :for="selectId") {{ label }}
  select(:id="selectId" :class="['form-select', size && `form-select-${size}`, validationClass]" :value="multiple ? undefined : modelValue" :multiple="multiple" :disabled="disabled" @change="onChange")
    option(v-if="placeholder" value="" disabled :selected="!modelValue") {{ placeholder }}
    option(v-for="opt in normalizedOptions" :key="opt.value" :value="opt.value" :selected="multiple && Array.isArray(modelValue) ? modelValue.includes(String(opt.value)) : undefined") {{ opt.text }}
  div(v-if="helpText" :class="feedbackType") {{ helpText }}
</template>
