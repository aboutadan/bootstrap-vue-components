<script setup lang="ts">
defineProps<{
  size?: "sm" | "lg";
  prepend?: string;
  append?: string;
}>();
</script>

<template lang="pug">
.input-container
  v-label(v-if="$slots.label")
    slot(name="label")
  div(:class="['input-group', size && `input-group-${size}`]")
    slot(name="prepend")
      span.input-group-text(v-if="prepend") {{ prepend }}
    slot
    slot(name="append")
      span.input-group-text(v-if="append") {{ append }}
</template>
