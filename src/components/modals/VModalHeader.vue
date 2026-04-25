<script setup lang="ts">
import { inject, onMounted, onBeforeUnmount } from "vue";
import { useId } from "../../composables/useId";

defineProps<{
  title?: string;
  closeButton?: boolean;
}>();

const close = inject<() => void>("modal-close", () => {});
const setLabelId = inject<(id: string | null) => void>(
  "modal-set-label-id",
  () => {}
);
const titleId = useId("modal-title");

onMounted(() => setLabelId(titleId));
onBeforeUnmount(() => setLabelId(null));
</script>

<template lang="pug">
div.modal-header
  h5.modal-title(:id="titleId")
    slot {{ title }}
  button.btn-close(v-if="closeButton !== false" type="button" aria-label="Close" @click="close")
</template>
