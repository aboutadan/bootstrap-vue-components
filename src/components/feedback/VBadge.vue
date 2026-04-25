<script setup lang="ts">
import type { BootstrapVariant } from "../../types";

defineProps<{
  variant?: BootstrapVariant;
  pill?: boolean;
  tag?: string;
}>();
</script>

<template lang="pug">
component(:is="tag ?? 'span'" :class="[ 'badge', `bg-${variant ?? 'primary'}`, (variant ?? 'primary') === 'light' ? 'text-dark' : 'text-white', pill && 'rounded-pill', ]")
  slot
</template>
