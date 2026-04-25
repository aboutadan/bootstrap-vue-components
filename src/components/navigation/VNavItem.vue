<script setup lang="ts">
defineProps<{
  href?: string;
  to?: string;
  active?: boolean;
  disabled?: boolean;
}>();

defineEmits<{
  click: [event: MouseEvent];
}>();
</script>

<template lang="pug">
li.nav-item
  router-link(v-if="to" :to="to" :class="['nav-link', active && 'active', disabled && 'disabled']" @click="$emit('click', $event)")
    slot
  a(v-else :href="href ?? '#'" :class="['nav-link', active && 'active', disabled && 'disabled']" @click="$emit('click', $event)")
    slot
</template>
