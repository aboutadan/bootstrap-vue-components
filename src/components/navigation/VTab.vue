<script setup lang="ts">
import { inject, computed, type ComputedRef } from 'vue'

const props = defineProps<{
  title: string
  disabled?: boolean
}>()

const tabs = inject<{
  id: string
  activeIndex: ComputedRef<number>
  register: (entry: { title: string; disabled?: boolean }) => number
}>('tabs')!

const index = tabs.register({ title: props.title, disabled: props.disabled })
const isActive = computed(() => tabs.activeIndex.value === index)
</script>

<template lang="pug">
div(:class="['tab-pane fade', isActive && 'show active']" role="tabpanel")
  slot
</template>
