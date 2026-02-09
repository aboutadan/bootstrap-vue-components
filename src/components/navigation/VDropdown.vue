<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Dropdown } from 'bootstrap'

const props = defineProps<{
  text?: string
  variant?: string
  direction?: 'up' | 'end' | 'start'
  split?: boolean
  menuAlign?: 'end'
}>()

defineEmits<{
  show: []
  hide: []
}>()

const toggleRef = ref<HTMLElement | null>(null)
let bsDropdown: Dropdown | null = null

onMounted(() => {
  if (!toggleRef.value) return
  bsDropdown = new Dropdown(toggleRef.value)
})

onBeforeUnmount(() => {
  bsDropdown?.dispose()
})

const dirClass = {
  up: 'dropup',
  end: 'dropend',
  start: 'dropstart',
}
</script>

<template lang="pug">
div(:class="[split ? 'btn-group' : 'dropdown', direction && dirClass[direction]]")
  button(v-if="split" type="button" :class="`btn btn-${variant ?? 'primary'}`")
    slot(name="button-text") {{ text }}
  button(ref="toggleRef" type="button" :class="[ `btn btn-${variant ?? 'primary'}`, 'dropdown-toggle', split && 'dropdown-toggle-split', ]" data-bs-toggle="dropdown")
    template(v-if="!split")
      slot(name="button-text") {{ text }}
</template>
