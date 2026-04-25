<script setup lang="ts">
defineProps<{
  size?: "sm" | "lg";
  vertical?: boolean;
}>();
</script>

<template lang="pug">
div(:class="[vertical ? 'btn-group-vertical' : 'btn-group', size && `btn-group-${size}`]" role="group")
  slot
</template>
