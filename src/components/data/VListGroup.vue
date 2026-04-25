<script setup lang="ts">
defineProps<{
  flush?: boolean;
  horizontal?: boolean | "sm" | "md" | "lg" | "xl" | "xxl";
  numbered?: boolean;
}>();
</script>

<template lang="pug">
component(:is="numbered ? 'ol' : 'ul'" :class="[ 'list-group', flush && 'list-group-flush', numbered && 'list-group-numbered', horizontal === true ? 'list-group-horizontal' : (typeof horizontal === 'string' && `list-group-horizontal-${horizontal}`), ]")
  slot
</template>
