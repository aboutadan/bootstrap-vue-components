<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps<{
  text?: string
  variant?: string
  direction?: 'up' | 'end' | 'start'
  split?: boolean
  menuAlign?: 'end'
}>()

const emit = defineEmits<{
  show: []
  hide: []
}>()

const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

function toggle() {
  isOpen.value = !isOpen.value
  if (isOpen.value) emit('show')
  else emit('hide')
}

function close() {
  if (!isOpen.value) return
  isOpen.value = false
  emit('hide')
}

function onClickOutside(e: MouseEvent) {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
    close()
  }
}

onMounted(() => {
  document.addEventListener('click', onClickOutside, true)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside, true)
})

const dirClass: Record<string, string> = {
  up: 'dropup',
  end: 'dropend',
  start: 'dropstart',
}
</script>

<template lang="pug">
div(ref="dropdownRef" :class="[split ? 'btn-group' : 'dropdown', direction && dirClass[direction]]")
  button(v-if="split" type="button" :class="`btn btn-${variant ?? 'primary'}`")
    slot(name="button-text") {{ text }}
  button(type="button" :class="[ `btn btn-${variant ?? 'primary'}`, 'dropdown-toggle', split && 'dropdown-toggle-split', isOpen && 'show', ]" @click="toggle")
    template(v-if="!split")
      slot(name="button-text") {{ text }}
  ul(:class="['dropdown-menu', menuAlign === 'end' && 'dropdown-menu-end', isOpen && 'show']")
    slot
</template>
