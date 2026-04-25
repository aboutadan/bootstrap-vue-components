<script setup lang="ts">
import type { BootstrapVariant } from "../../types";

defineProps<{
  value?: number;
  variant?: BootstrapVariant;
  striped?: boolean;
  animated?: boolean;
  stacked?: boolean;
}>();
</script>

<template lang="pug">
div.progress-stacked(v-if="stacked")
  slot
div.progress(v-else role="progressbar" :aria-valuenow="value ?? 0" aria-valuemin="0" aria-valuemax="100")
  div(:class="[ 'progress-bar', variant && `bg-${variant}`, striped && 'progress-bar-striped', animated && 'progress-bar-animated', ]" :style="{ width: `${value ?? 0}%` }")
    slot {{ value != null ? `${value}%` : '' }}
</template>
