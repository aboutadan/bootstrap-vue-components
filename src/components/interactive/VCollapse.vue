<script setup lang="ts">
const props = defineProps<{
  modelValue?: boolean
  horizontal?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

function toggle() {
  emit('update:modelValue', !props.modelValue)
}

defineExpose({ toggle })
</script>

<template lang="pug">
div(:class="['collapse', horizontal && 'collapse-horizontal', modelValue && 'show']")
  slot
</template>
