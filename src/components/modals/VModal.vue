<script lang="ts">
let openModalCount = 0;

function lockModalBody() {
  if (openModalCount === 0) document.body.classList.add("modal-open");
  openModalCount++;
}

function unlockModalBody() {
  if (openModalCount === 0) return;
  openModalCount--;
  if (openModalCount === 0) document.body.classList.remove("modal-open");
}
</script>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount, provide, nextTick } from "vue";

const props = defineProps<{
  modelValue?: boolean;
  size?: "sm" | "lg" | "xl";
  centered?: boolean;
  scrollable?: boolean;
  staticBackdrop?: boolean;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();

const visible = ref(props.modelValue ?? false);
const modalRef = ref<HTMLElement | null>(null);
const labelledById = ref<string | null>(null);
let previouslyFocused: HTMLElement | null = null;

provide("modal-set-label-id", (id: string | null) => {
  labelledById.value = id;
});

const FOCUSABLE_SELECTOR =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function focusableIn(root: HTMLElement): HTMLElement[] {
  return Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
}

function open() {
  previouslyFocused = document.activeElement as HTMLElement | null;
  visible.value = true;
  lockModalBody();
  nextTick(() => {
    if (!modalRef.value) return;
    const focusables = focusableIn(modalRef.value);
    (focusables[0] ?? modalRef.value).focus();
  });
}

function close() {
  if (!visible.value) return;
  visible.value = false;
  unlockModalBody();
  emit("update:modelValue", false);
  const toRestore = previouslyFocused;
  previouslyFocused = null;
  nextTick(() => toRestore?.focus());
}

provide("modal-close", close);

function onBackdropClick(e: MouseEvent) {
  if (props.staticBackdrop) return;
  if (e.target === modalRef.value) close();
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === "Escape" && !props.staticBackdrop) {
    close();
    return;
  }
  if (e.key !== "Tab" || !modalRef.value) return;
  const focusables = focusableIn(modalRef.value);
  if (focusables.length === 0) {
    e.preventDefault();
    return;
  }
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  const active = document.activeElement;
  if (e.shiftKey && active === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && active === last) {
    e.preventDefault();
    first.focus();
  }
}

watch(
  () => props.modelValue,
  (val) => {
    if (val && !visible.value) open();
    else if (!val && visible.value) close();
  }
);

onMounted(() => {
  if (visible.value) open();
});

onBeforeUnmount(() => {
  if (visible.value) unlockModalBody();
});
</script>

<template lang="pug">
div(v-if="visible")
  div.modal.fade.show.d-block(ref="modalRef" tabindex="-1" role="dialog" aria-modal="true" :aria-labelledby="labelledById ?? undefined" @click="onBackdropClick" @keydown="onKeydown")
    div(:class="[ 'modal-dialog', size && `modal-${size}`, centered && 'modal-dialog-centered', scrollable && 'modal-dialog-scrollable', ]")
      div.modal-content
        slot
  div.modal-backdrop.fade.show
</template>
