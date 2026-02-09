<script setup lang="ts">
import { computed, toRef } from 'vue'
import { useId } from '../../composables/useId'
import { useValidation } from '../../composables/useValidation'

const props = defineProps<{
  modelValue?: boolean
  label?: string
  disabled?: boolean
  id?: string
  isValid?: boolean | null
  helpText?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const switchId = computed(() => props.id ?? useId('switch'))
const { validationClass, feedbackType } = useValidation(toRef(props, 'isValid'), toRef(props, 'helpText'))

function onChange(event: Event) {
  emit('update:modelValue', (event.target as HTMLInputElement).checked)
}
</script>

<template lang="pug">
div.form-check.form-switch
  input(:id="switchId" :class="['form-check-input', validationClass]" type="checkbox" role="switch" :checked="modelValue" :disabled="disabled" @change="onChange")
  label.form-check-label(v-if="label" :for="switchId") {{ label }}
  div(v-if="helpText" :class="feedbackType") {{ helpText }}
</template>
