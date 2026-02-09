<script setup lang="ts">
import { inject, onMounted } from 'vue'

defineProps<{
  interval?: number
  imgSrc?: string
  caption?: string
}>()

const carousel = inject<{ register: () => void }>('carousel')
onMounted(() => carousel?.register())
</script>

<template lang="pug">
div.carousel-item(:data-bs-interval="interval")
  img.d-block.w-100(v-if="imgSrc" :src="imgSrc")
  slot(v-else)
  div.carousel-caption.d-none.d-md-block(v-if="caption")
    p {{ caption }}
</template>
