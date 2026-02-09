<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { Collapse } from 'bootstrap'

const props = defineProps<{
  modelValue?: boolean
  horizontal?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const collapseRef = ref<HTMLElement | null>(null)
let bsCollapse: Collapse | null = null

onMounted(() => {
  if (!collapseRef.value) return
  bsCollapse = new Collapse(collapseRef.value, { toggle: false })

  collapseRef.value.addEventListener('shown.bs.collapse', () => emit('update:modelValue', true))
  collapseRef.value.addEventListener('hidden.bs.collapse', () => emit('update:modelValue', false))

  if (props.modelValue) bsCollapse.show()
})

watch(() => props.modelValue, (show) => {
  if (!bsCollapse) return
  if (show) bsCollapse.show()
  else bsCollapse.hide()
})

onBeforeUnmount(() => {
  bsCollapse?.dispose()
})

defineExpose({ toggle: () => bsCollapse?.toggle() })
</script>

<template lang="pug">
div(ref="collapseRef" :class="['collapse', horizontal && 'collapse-horizontal']")
  slot
</template>
