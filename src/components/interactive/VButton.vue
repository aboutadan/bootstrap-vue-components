<script setup lang="ts">
defineProps<{
  variant?: string;
  size?: "sm" | "lg";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  block?: boolean;
  small?: boolean;
}>();

defineEmits<{
  click: [event: MouseEvent];
}>();
</script>

<template lang="pug">
button(:class="[ 'btn', { 'btn-sm': small },`btn-${variant ?? 'primary'}`, size && `btn-${size}`, block && 'w-100', ]" :type="type ?? 'button'" :disabled="disabled" @click="$emit('click', $event)")
  slot
</template>
