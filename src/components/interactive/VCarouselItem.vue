<script setup lang="ts">
import { inject, onMounted, ref, type Ref, computed } from 'vue'

defineProps<{
  imgSrc?: string
  caption?: string
}>()

const carousel = inject<{
  register: () => number
  activeIndex: Ref<number>
}>('carousel')

const ownIndex = ref(-1)

onMounted(() => {
  if (carousel) {
    ownIndex.value = carousel.register()
  }
})

const isActive = computed(() => ownIndex.value === carousel?.activeIndex.value)
</script>

<template lang="pug">
div(:class="['carousel-item', isActive && 'active']")
  img.d-block.w-100(v-if="imgSrc" :src="imgSrc")
  slot(v-else)
  div.carousel-caption.d-none.d-md-block(v-if="caption")
    p {{ caption }}
</template>
