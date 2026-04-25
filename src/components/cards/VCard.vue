<script setup lang="ts">
import type { BootstrapVariant } from "../../types";

defineProps<{
  variant?: BootstrapVariant;
  border?: string;
  noBody?: boolean;
  imgSrc?: string;
}>();
</script>

<template lang="pug">
div(:class="['card', variant && `text-bg-${variant}`, border && `border-${border}`]")
  img.card-img-top(v-if="imgSrc" :src="imgSrc")
  div.card-body(v-if="!noBody")
    slot
  slot(v-else)
</template>
