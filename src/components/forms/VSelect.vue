<template lang="pug">
.input-container
  v-label(v-if="label" :for="selectId") {{ label }}
  select(:id="selectId" :class="['form-select', size && `form-select-${size}`, validationClass]" :value="multiple ? undefined : form[name]" :multiple="multiple" :disabled="disabled" @change="onChange")
    option(v-if="placeholder" value="" disabled :selected="!form[name]") {{ placeholder }}
    option(v-for="opt in normalizedOptions" :key="opt.value" :value="opt.value" :selected="multiple && Array.isArray(form[name]) ? form[name].includes(String(opt.value)) : undefined") {{ opt.text }}
  div(v-if="helpText" :class="feedbackType") {{ helpText }}
</template>

<script setup lang="ts">
import { computed, toRef, inject, type PropType } from "vue";
import { useId } from "../../composables/useId";
import { useValidation } from "../../composables/useValidation";

type OptionItem = string | { value: string | number; text: string };

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  options: Array as PropType<OptionItem[]>,
  placeholder: String,
  multiple: Boolean,
  size: String as PropType<"sm" | "lg">,
  disabled: Boolean,
  label: String,
  id: String,
  isValid: {
    type: Boolean as PropType<boolean | null | undefined>,
    default: undefined,
  },
  helpText: String,
});

const form = inject<Record<string, any>>("form", {});

const selectId = computed(
  () => props.id ?? (props.label ? useId("select") : undefined)
);
const { validationClass, feedbackType } = useValidation(
  toRef(props, "isValid"),
  toRef(props, "helpText")
);

const normalizedOptions = computed(() =>
  (props.options ?? []).map((o) =>
    typeof o === "string" ? { value: o, text: o } : o
  )
);

function onChange(event: Event) {
  const el = event.target as HTMLSelectElement;
  if (props.multiple) {
    const values = Array.from(el.selectedOptions, (o) => o.value);
    form[props.name] = values;
  } else {
    form[props.name] = el.value;
  }
}
</script>

<style lang="scss" scoped>
.input-container:has(.form-select:focus) {
  .form-label {
    color: var(--bs-primary);
  }
}
</style>
