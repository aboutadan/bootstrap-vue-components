<template lang="pug">
.input-container
  v-label(v-if="label" :for="inputId") {{ label }}
  input(:id="inputId" :class="['form-control', size && `form-control-${size}`, validationClass]" :type="type ?? 'text'" :value="form[name]" :placeholder="placeholder" :disabled="disabled" :readonly="readonly" @input="onInput")
  div(v-if="helpText" :class="feedbackType") {{ helpText }}
</template>

<script setup lang="ts">
import { computed, inject, toRef, type PropType } from "vue";
import { useValidation } from "../../composables/useValidation";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  type: String,
  placeholder: String,
  disabled: Boolean,
  readonly: Boolean,
  size: String as PropType<"sm" | "lg">,
  label: String,
  id: String,
  isValid: {
    type: Boolean as PropType<boolean | null | undefined>,
    default: undefined,
  },
  helpText: String,
});

const form = inject<Record<string, any>>("form", {});

const inputId = computed(
  () =>
    props.id ??
    (props.label
      ? `input-${props.label.toLowerCase().replace(/\s+/g, "-")}`
      : undefined),
);

const { validationClass, feedbackType } = useValidation(
  toRef(props, "isValid"),
  toRef(props, "helpText"),
);

function onInput(event: Event) {
  form[props.name] = (event.target as HTMLInputElement).value;
}
</script>

<style lang="scss" scoped>
.input-container:has(.form-control:focus) {
  .form-label {
    color: var(--bs-primary);
  }
}
</style>
