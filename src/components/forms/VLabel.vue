<template lang="pug">
label(:class="labelClass" :for="props.for")
  slot
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  for?: string;
  check?: boolean;
  size?: "sm" | "base";
}>();

const labelClass = computed(() => [
  props.check ? "form-check-label" : "form-label",
  props.check ? null : props.size === "base" ? null : "small",
  props.check ? null : "mb-0",
]);
</script>

<style lang="scss" scoped>
.input-container:has(.form-control:focus, .form-select:focus) {
  .form-label {
    color: var(--bs-primary);
  }
}
</style>
