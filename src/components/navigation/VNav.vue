<script setup lang="ts">
defineProps<{
  pills?: boolean
  underline?: boolean
  fill?: boolean
  justified?: boolean
  vertical?: boolean
}>()
</script>

<template lang="pug">
ul(:class="[ 'nav', pills && 'nav-pills', underline && 'nav-underline', fill && 'nav-fill', justified && 'nav-justified', vertical && 'flex-column', ]")
  slot
</template>
