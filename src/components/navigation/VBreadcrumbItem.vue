<script setup lang="ts">
defineProps<{
  href?: string
  to?: string
  active?: boolean
}>()
</script>

<template lang="pug">
li(:class="['breadcrumb-item', active && 'active']" :aria-current="active ? 'page' : undefined")
  a(v-if="href && !active" :href="href")
    slot
  router-link(v-else-if="to && !active" :to="to")
    slot
  template(v-else)
    slot
</template>
