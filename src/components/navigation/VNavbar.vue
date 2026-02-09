<script setup lang="ts">
import { useId } from '../../composables/useId'

defineProps<{
  brand?: string
  expand?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  bg?: string
  variant?: 'dark' | 'light'
  fixed?: 'top' | 'bottom'
  sticky?: 'top'
}>()

const collapseId = useId('navbar')
</script>

<template lang="pug">
nav(:class="[ 'navbar', expand && `navbar-expand-${expand}`, bg && `bg-${bg}`, fixed && `fixed-${fixed}`, sticky && `sticky-${sticky}`, ]" :data-bs-theme="variant")
  div.container-fluid
    a.navbar-brand(v-if="brand" href="#") {{ brand }}
    button.navbar-toggler(type="button" data-bs-toggle="collapse" :data-bs-target="`#${collapseId}`")
      span.navbar-toggler-icon
    div.collapse.navbar-collapse(:id="collapseId")
      slot
</template>
