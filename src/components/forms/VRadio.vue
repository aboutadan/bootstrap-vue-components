<script setup lang="ts">
import { computed, toRef } from 'vue'
import { useId } from '../../composables/useId'
import { useValidation } from '../../composables/useValidation'

const props = defineProps<{
  modelValue?: string | number
  value: string | number
  name?: string
  label?: string
  inline?: boolean
  disabled?: boolean
  id?: string
  isValid?: boolean | null
  helpText?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const radioId = computed(() => props.id ?? useId('radio'))
const { validationClass, feedbackType } = useValidation(toRef(props, 'isValid'), toRef(props, 'helpText'))
</script>

<template lang="pug">
div(:class="['form-check', inline && 'form-check-inline']")
  input(:id="radioId" :class="['form-check-input', validationClass]" type="radio" :name="name" :value="value" :checked="modelValue === value" :disabled="disabled" @change="emit('update:modelValue', value)")
  label.form-check-label(v-if="label" :for="radioId") {{ label }}
  div(v-if="helpText" :class="feedbackType") {{ helpText }}
</template>
