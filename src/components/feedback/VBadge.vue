<script setup lang="ts">
defineProps<{
  variant?: string;
  pill?: boolean;
  tag?: string;
}>();
</script>

<template lang="pug">
component(:is="tag ?? 'span'" :class="[ 'badge', `bg-${variant ?? 'primary'}`, (variant ?? 'primary') === 'light' ? 'text-dark' : 'text-white', pill && 'rounded-pill', ]")
  slot
</template>
