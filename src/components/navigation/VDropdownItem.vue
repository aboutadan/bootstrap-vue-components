<script setup lang="ts">
defineProps<{
  href?: string
  to?: string
  active?: boolean
  disabled?: boolean
  header?: boolean
}>()

defineEmits<{
  click: [event: MouseEvent]
}>()
</script>

<template lang="pug">
li
  h6.dropdown-header(v-if="header")
    slot
  router-link(v-else-if="to" :to="to" :class="['dropdown-item', active && 'active', disabled && 'disabled']" @click="$emit('click', $event)")
    slot
  a(v-else :href="href ?? '#'" :class="['dropdown-item', active && 'active', disabled && 'disabled']" @click="$emit('click', $event)")
    slot
</template>
