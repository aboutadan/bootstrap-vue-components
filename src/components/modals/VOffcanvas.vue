<script setup lang="ts">
import { ref, watch, onBeforeUnmount } from "vue";

const props = defineProps<{
  modelValue?: boolean;
  title?: string;
  placement?: "start" | "end" | "top" | "bottom";
  backdrop?: boolean;
  scroll?: boolean;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();

const visible = ref(props.modelValue ?? false);
const showing = ref(false);
const hiding = ref(false);

function open() {
  visible.value = true;
  showing.value = true;
  setTimeout(() => {
    showing.value = false;
  }, 300);
}

function close() {
  hiding.value = true;
  setTimeout(() => {
    visible.value = false;
    hiding.value = false;
    emit("update:modelValue", false);
  }, 300);
}

function onBackdropClick() {
  close();
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === "Escape") close();
}

watch(
  () => props.modelValue,
  (val) => {
    if (val) open();
    else if (visible.value) close();
  }
);

onBeforeUnmount(() => {
  visible.value = false;
});
</script>

<template lang="pug">
div(v-if="visible")
  div(:class="['offcanvas', `offcanvas-${placement ?? 'start'}`, visible && 'show', showing && 'showing', hiding && 'hiding']" tabindex="-1" @keydown="onKeydown")
    div.offcanvas-header
      h5.offcanvas-title
        slot(name="title") {{ title }}
      button.btn-close(type="button" aria-label="Close" @click="close")
    div.offcanvas-body
      slot
  div.offcanvas-backdrop.fade.show(v-if="backdrop !== false" @click="onBackdropClick")
</template>
