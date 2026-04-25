<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  divider?: string
}>()

const breadcrumbStyle = computed(() =>
  props.divider ? { '--bs-breadcrumb-divider': `'${props.divider}'` } : undefined,
)
</script>

<template lang="pug">
nav(:style="breadcrumbStyle" aria-label="breadcrumb")
  ol.breadcrumb
    slot
</template>
