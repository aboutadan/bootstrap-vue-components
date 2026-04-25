<script setup lang="ts">
import { provide, ref, watch, computed } from "vue";
import { useId } from "../../composables/useId";

const props = defineProps<{
  modelValue?: number;
  pills?: boolean;
  fill?: boolean;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: number];
}>();

const tabsId = useId("tabs");
const activeIndex = ref(props.modelValue ?? 0);
const tabEntries = ref<{ title: string; disabled?: boolean }[]>([]);

watch(
  () => props.modelValue,
  (v) => {
    if (v != null) activeIndex.value = v;
  }
);

function selectTab(index: number) {
  activeIndex.value = index;
  emit("update:modelValue", index);
}

provide("tabs", {
  id: tabsId,
  activeIndex: computed(() => activeIndex.value),
  register(entry: { title: string; disabled?: boolean }) {
    const idx = tabEntries.value.length;
    tabEntries.value.push(entry);
    return idx;
  },
});
</script>

<template lang="pug">
div
  ul(:class="['nav', pills ? 'nav-pills' : 'nav-tabs', fill && 'nav-fill']" role="tablist")
    li.nav-item(v-for="(tab, i) in tabEntries" :key="i")
      button(:class="['nav-link', i === activeIndex && 'active', tab.disabled && 'disabled']" type="button" role="tab" @click="!tab.disabled && selectTab(i)") {{ tab.title }}
  div.tab-content.mt-2
    slot
</template>
