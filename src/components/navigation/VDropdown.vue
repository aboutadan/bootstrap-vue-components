<script setup lang="ts">
import { ref } from "vue";
import { useClickOutside } from "../../composables/useClickOutside";
import type { BootstrapButtonVariant } from "../../types";

const props = defineProps<{
  text?: string;
  variant?: BootstrapButtonVariant;
  direction?: "up" | "end" | "start";
  split?: boolean;
  menuAlign?: "end";
  small?: boolean;
  borderNone?: boolean;
}>();

const emit = defineEmits<{
  show: [];
  hide: [];
}>();

const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

function toggle() {
  isOpen.value = !isOpen.value;
  if (isOpen.value) emit("show");
  else emit("hide");
}

function close() {
  if (!isOpen.value) return;
  isOpen.value = false;
  emit("hide");
}

useClickOutside(dropdownRef, () => close());

const dirClass: Record<string, string> = {
  up: "dropup",
  end: "dropend",
  start: "dropstart",
};
</script>

<template lang="pug">
div(ref="dropdownRef" :class="[split ? 'btn-group' : 'dropdown', direction && dirClass[direction]]")
  button(v-if="split" type="button" :class="[`btn btn-${variant ?? 'primary'}`, { 'btn-sm': small }]")
    slot(name="button-text") {{ text }}
  button(type="button" :class="[ `btn btn-${variant ?? 'primary'}`, { 'btn-sm': small, 'border-0': borderNone }, 'dropdown-toggle', split && 'dropdown-toggle-split', isOpen && 'show', ]" @click="toggle")
    template(v-if="!split")
      slot(name="button-text") {{ text }}
  ul(:class="['dropdown-menu', menuAlign === 'end' && 'dropdown-menu-end', isOpen && 'show']" data-bs-popper="static")
    slot
</template>
