<script setup lang="ts">
import { computed, toRef, inject, type PropType } from "vue";
import { useId } from "../../composables/useId";
import { useValidation } from "../../composables/useValidation";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  value: String,
  label: String,
  inline: Boolean,
  indeterminate: Boolean,
  disabled: Boolean,
  id: String,
  isValid: {
    type: Boolean as PropType<boolean | null | undefined>,
    default: undefined,
  },
  helpText: String,
});

const form = inject<Record<string, any>>("form", {});

const checkId = computed(() => props.id ?? useId("check"));
const { validationClass, feedbackType } = useValidation(
  toRef(props, "isValid"),
  toRef(props, "helpText")
);

const isChecked = computed(() => {
  const formValue = form[props.name];
  if (Array.isArray(formValue)) {
    return props.value !== undefined && formValue.includes(props.value);
  }
  return !!formValue;
});

function onChange(event: Event) {
  const checked = (event.target as HTMLInputElement).checked;
  const formValue = form[props.name];
  if (Array.isArray(formValue) && props.value !== undefined) {
    const arr = [...formValue];
    if (checked) arr.push(props.value);
    else arr.splice(arr.indexOf(props.value), 1);
    form[props.name] = arr;
  } else {
    form[props.name] = checked;
  }
}
</script>

<template lang="pug">
div(:class="['form-check', inline && 'form-check-inline']")
  input(:id="checkId" :class="['form-check-input', validationClass]" type="checkbox" :checked="isChecked" :disabled="disabled" :indeterminate="indeterminate" @change="onChange")
  v-label(v-if="label" check :for="checkId") {{ label }}
  div(v-if="helpText" :class="feedbackType") {{ helpText }}
</template>
