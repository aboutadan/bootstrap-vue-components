<script setup lang="ts">
import { onMounted } from "vue";
import type { BootstrapButtonVariant } from "../../types";

const props = defineProps<{
  variant?: BootstrapButtonVariant;
  size?: "sm" | "lg";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  block?: boolean;
  /** @deprecated Use `size="sm"` instead. Will be removed in v3.0. */
  small?: boolean;
}>();

defineEmits<{
  click: [event: MouseEvent];
}>();

onMounted(() => {
  if (props.small !== undefined) {
    console.warn(
      '[VButton] The `small` prop is deprecated and will be removed in v3.0. Use `size="sm"` instead.'
    );
  }
});
</script>

<template lang="pug">
button(:class="[ 'btn', { 'btn-sm': small },`btn-${variant ?? 'primary'}`, size && `btn-${size}`, block && 'w-100', ]" :type="type ?? 'button'" :disabled="disabled" @click="$emit('click', $event)")
  slot
</template>
