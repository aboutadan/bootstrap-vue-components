<script setup lang="ts">
import type { BootstrapButtonVariant } from "../../types";

defineProps<{
  variant?: BootstrapButtonVariant;
  size?: "sm" | "lg";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  block?: boolean;
}>();

defineEmits<{
  click: [event: MouseEvent];
}>();
</script>

<template lang="pug">
button(:class="[ 'btn', `btn-${variant ?? 'primary'}`, size && `btn-${size}`, block && 'w-100', ]" :type="type ?? 'button'" :disabled="disabled" @click="$emit('click', $event)")
  slot
</template>
