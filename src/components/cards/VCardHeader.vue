<script setup lang="ts">
defineProps<{
  tag?: string;
}>();
</script>

<template lang="pug">
.card-header.fw-semibold.fs-5(:is="tag ?? 'div'")
  slot
</template>
