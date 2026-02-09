<script setup lang="ts">
import { computed, toRef } from 'vue'
import { useId } from '../../composables/useId'
import { useValidation } from '../../composables/useValidation'

const props = defineProps<{
  modelValue?: boolean | string[]
  value?: string
  label?: string
  inline?: boolean
  indeterminate?: boolean
  disabled?: boolean
  id?: string
  isValid?: boolean | null
  helpText?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean | string[]]
}>()

const checkId = computed(() => props.id ?? useId('check'))
const { validationClass, feedbackType } = useValidation(toRef(props, 'isValid'), toRef(props, 'helpText'))

const isChecked = computed(() => {
  if (Array.isArray(props.modelValue)) {
    return props.value !== undefined && props.modelValue.includes(props.value)
  }
  return !!props.modelValue
})

function onChange(event: Event) {
  const checked = (event.target as HTMLInputElement).checked
  if (Array.isArray(props.modelValue) && props.value !== undefined) {
    const arr = [...props.modelValue]
    if (checked) arr.push(props.value)
    else arr.splice(arr.indexOf(props.value), 1)
    emit('update:modelValue', arr)
  } else {
    emit('update:modelValue', checked)
  }
}
</script>

<template lang="pug">
div(:class="['form-check', inline && 'form-check-inline']")
  input(:id="checkId" :class="['form-check-input', validationClass]" type="checkbox" :checked="isChecked" :disabled="disabled" :indeterminate="indeterminate" @change="onChange")
  label.form-check-label(v-if="label" :for="checkId") {{ label }}
  div(v-if="helpText" :class="feedbackType") {{ helpText }}
</template>
