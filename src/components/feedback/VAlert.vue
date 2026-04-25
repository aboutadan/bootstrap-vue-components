<script setup lang="ts">
import { computed, ref, watch } from "vue";
import type { BootstrapVariant } from "../../types";

const props = withDefaults(
  defineProps<{
    modelValue?: boolean;
    variant?: BootstrapVariant;
    dismissible?: boolean;
    icon?: string;
  }>(),
  {
    modelValue: true,
    variant: "primary",
    dismissible: false,
  }
);

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();

const visible = ref(props.modelValue !== false);
const hasIcon = computed(() => Boolean(props.icon));

watch(
  () => props.modelValue,
  (v) => {
    visible.value = v !== false;
  }
);

function dismiss() {
  visible.value = false;
  emit("update:modelValue", false);
}
</script>

<template lang="pug">
div(v-if="visible" :class="[ 'alert', `alert-${props.variant}`, props.dismissible && 'alert-dismissible', hasIcon && 'd-flex align-items-start gap-2', ]" role="alert")
  i(v-if="hasIcon" :class="[`bi bi-${props.icon}`]" aria-hidden="true")
  div.flex-grow-1
    slot
  button.btn-close(v-if="props.dismissible" type="button" aria-label="Close" @click="dismiss")
</template>
