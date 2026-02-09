<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  modelValue?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  size?: "sm" | "lg";
  label?: string;
  id?: string;
  isValid?: boolean | null;
  helpText?: string;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const inputId = computed(
  () =>
    props.id ??
    (props.label
      ? `input-${props.label.toLowerCase().replace(/\s+/g, "-")}`
      : undefined),
);

const validationClass = computed(() => {
  if (props.isValid === true) return "is-valid";
  if (props.isValid === false) return "is-invalid";
  return "";
});

function onInput(event: Event) {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
}
</script>

<template lang="pug">
div
  label.form-label(v-if="label" :for="inputId") {{ label }}
  input(:id="inputId" :class="['form-control', size && `form-control-${size}`, validationClass]" :type="type ?? 'text'" :value="modelValue" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" @input="onInput")
  div.invalid-feedback(v-if="helpText && isValid === false") {{ helpText }}
  div.valid-feedback(v-else-if="helpText && isValid === true") {{ helpText }}
  div.form-text(v-else-if="helpText") {{ helpText }}
</template>
