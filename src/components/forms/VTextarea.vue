<script setup lang="ts">
import { computed, inject, toRef, type PropType } from "vue";
import { useValidation } from "../../composables/useValidation";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  placeholder: String,
  disabled: Boolean,
  readonly: Boolean,
  rows: [Number, String] as PropType<number | string>,
  label: String,
  id: String,
  isValid: {
    type: Boolean as PropType<boolean | null | undefined>,
    default: undefined,
  },
  helpText: String,
});

const form = inject<Record<string, any>>("form", {});

const textareaId = computed(
  () =>
    props.id ??
    (props.label
      ? `textarea-${props.label.toLowerCase().replace(/\s+/g, "-")}`
      : undefined),
);

const { validationClass, feedbackType } = useValidation(
  toRef(props, "isValid"),
  toRef(props, "helpText"),
);

function onInput(event: Event) {
  form[props.name] = (event.target as HTMLTextAreaElement).value;
}
</script>

<template lang="pug">
.input-container
  v-label(v-if="label" :for="textareaId") {{ label }}
  textarea(:id="textareaId" :class="['form-control', validationClass]" :value="form[name]" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" :rows="rows ?? 3" @input="onInput")
  div(v-if="helpText" :class="feedbackType") {{ helpText }}
</template>

<style lang="scss" scoped>
.input-container:has(.form-control:focus) {
  .form-label {
    color: var(--bs-primary);
  }
}
</style>
