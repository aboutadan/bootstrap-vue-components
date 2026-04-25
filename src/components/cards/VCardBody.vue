<script setup lang="ts">
defineProps<{
  title?: string;
  subtitle?: string;
}>();
</script>

<template lang="pug">
div.card-body
  h5.card-title(v-if="title") {{ title }}
  h6.card-subtitle.mb-2.text-body-secondary(v-if="subtitle") {{ subtitle }}
  slot
</template>
