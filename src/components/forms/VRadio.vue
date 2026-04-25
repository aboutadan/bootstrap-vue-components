<script setup lang="ts">
import { computed, toRef, inject, type PropType } from "vue";
import { useId } from "../../composables/useId";
import { useValidation } from "../../composables/useValidation";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: [String, Number] as PropType<string | number>,
    required: true,
  },
  label: String,
  inline: Boolean,
  disabled: Boolean,
  id: String,
  isValid: {
    type: Boolean as PropType<boolean | null | undefined>,
    default: undefined,
  },
  helpText: String,
});

const form = inject<Record<string, any>>("form", {});

const radioId = computed(() => props.id ?? useId("radio"));
const { validationClass, feedbackType } = useValidation(
  toRef(props, "isValid"),
  toRef(props, "helpText"),
);
</script>

<template lang="pug">
div(:class="['form-check', inline && 'form-check-inline']")
  input(:id="radioId" :class="['form-check-input', validationClass]" type="radio" :name="name" :value="value" :checked="form[name] === value" :disabled="disabled" @change="form[name] = value")
  v-label(v-if="label" check :for="radioId") {{ label }}
  div(v-if="helpText" :class="feedbackType") {{ helpText }}
</template>
