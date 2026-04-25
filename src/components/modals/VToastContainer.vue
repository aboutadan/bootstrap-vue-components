<script setup lang="ts">
defineProps<{
  position?:
    | "top-start"
    | "top-center"
    | "top-end"
    | "middle-center"
    | "bottom-start"
    | "bottom-center"
    | "bottom-end";
}>();

const positionClasses: Record<string, string> = {
  "top-start": "top-0 start-0",
  "top-center": "top-0 start-50 translate-middle-x",
  "top-end": "top-0 end-0",
  "middle-center": "top-50 start-50 translate-middle",
  "bottom-start": "bottom-0 start-0",
  "bottom-center": "bottom-0 start-50 translate-middle-x",
  "bottom-end": "bottom-0 end-0",
};
</script>

<template lang="pug">
div(:class="['toast-container position-fixed p-3', positionClasses[position ?? 'bottom-end']]")
  slot
</template>
