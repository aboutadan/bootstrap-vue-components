<script setup lang="ts">
import { computed, toRef, inject, type PropType } from "vue";
import { useId } from "../../composables/useId";
import { useValidation } from "../../composables/useValidation";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: String,
  disabled: Boolean,
  id: String,
  isValid: {
    type: Boolean as PropType<boolean | null | undefined>,
    default: undefined,
  },
  helpText: String,
});

const form = inject<Record<string, any>>("form", {});

const switchId = computed(() => props.id ?? useId("switch"));
const { validationClass, feedbackType } = useValidation(
  toRef(props, "isValid"),
  toRef(props, "helpText"),
);

function onChange(event: Event) {
  form[props.name] = (event.target as HTMLInputElement).checked;
}
</script>

<template lang="pug">
div.form-check.form-switch
  input(:id="switchId" :class="['form-check-input', validationClass]" type="checkbox" role="switch" :checked="form[name]" :disabled="disabled" @change="onChange")
  v-label(v-if="label" check :for="switchId") {{ label }}
  div(v-if="helpText" :class="feedbackType") {{ helpText }}
</template>
