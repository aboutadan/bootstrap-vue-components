<script setup lang="ts">
import { inject, computed, onMounted } from "vue";
import { useId } from "../../composables/useId";

const props = defineProps<{
  title?: string;
  show?: boolean;
}>();

const accordion = inject<{
  id: string;
  alwaysOpen: boolean;
  openItems: Set<string>;
  toggle: (id: string) => void;
}>("accordion", {
  id: "",
  alwaysOpen: false,
  openItems: new Set(),
  toggle: () => {},
});

const itemId = useId("acc-item");
const isOpen = computed(() => accordion.openItems.has(itemId));

function toggle() {
  accordion.toggle(itemId);
}

onMounted(() => {
  if (props.show) accordion.toggle(itemId);
});
</script>

<template lang="pug">
div.accordion-item
  h2.accordion-header
    button(:class="['accordion-button', !isOpen && 'collapsed']" type="button" @click="toggle")
      slot(name="title") {{ title }}
  div(:id="itemId" :class="['accordion-collapse collapse', isOpen && 'show']")
    div.accordion-body
      slot
</template>
