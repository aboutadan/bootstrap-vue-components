<script setup lang="ts">
import { provide, reactive } from "vue";
import { useId } from "../../composables/useId";

const props = defineProps<{
  flush?: boolean;
  alwaysOpen?: boolean;
}>();

const accordionId = useId("accordion");
const openItems = reactive(new Set<string>());

provide("accordion", {
  id: accordionId,
  alwaysOpen: props.alwaysOpen ?? false,
  openItems,
  toggle(itemId: string) {
    if (openItems.has(itemId)) {
      openItems.delete(itemId);
    } else {
      if (!props.alwaysOpen) openItems.clear();
      openItems.add(itemId);
    }
  },
});
</script>

<template lang="pug">
div(:id="accordionId" :class="['accordion', flush && 'accordion-flush']")
  slot
</template>
