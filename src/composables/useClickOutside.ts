import { onMounted, onBeforeUnmount, type Ref } from "vue";

export function useClickOutside(
  elementRef: Ref<HTMLElement | null>,
  handler: (event: MouseEvent) => void
) {
  function onDocClick(e: MouseEvent) {
    if (elementRef.value && !elementRef.value.contains(e.target as Node)) {
      handler(e);
    }
  }
  onMounted(() => document.addEventListener("click", onDocClick, true));
  onBeforeUnmount(() => document.removeEventListener("click", onDocClick, true));
}
