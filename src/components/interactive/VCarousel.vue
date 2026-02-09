<script setup lang="ts">
import { ref, provide, watch, onMounted, onBeforeUnmount, computed } from 'vue'
import { Carousel } from 'bootstrap'
import { useId } from '../../composables/useId'

const props = defineProps<{
  modelValue?: number
  controls?: boolean
  indicators?: boolean
  fade?: boolean
  interval?: number | false
}>()

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()

const carouselId = useId('carousel')
const carouselRef = ref<HTMLElement | null>(null)
let bsCarousel: Carousel | null = null
const itemCount = ref(0)

provide('carousel', {
  register: () => itemCount.value++,
})

const indicatorIndices = computed(() => Array.from({ length: itemCount.value }, (_, i) => i))

onMounted(() => {
  if (!carouselRef.value) return
  bsCarousel = new Carousel(carouselRef.value, {
    interval: props.interval === false ? false : (props.interval ?? 5000),
    wrap: true,
  })

  carouselRef.value.addEventListener('slid.bs.carousel', (e: any) => {
    emit('update:modelValue', e.to)
  })

  if (props.modelValue != null && props.modelValue > 0) {
    bsCarousel.to(props.modelValue)
  }
})

watch(() => props.modelValue, (idx) => {
  if (bsCarousel && idx != null) bsCarousel.to(idx)
})

onBeforeUnmount(() => {
  bsCarousel?.dispose()
})
</script>

<template lang="pug">
div(:id="carouselId" ref="carouselRef" :class="['carousel slide', fade && 'carousel-fade']")
  div.carousel-indicators(v-if="indicators")
    button(v-for="i in indicatorIndices" :key="i" type="button" :data-bs-target="`#${carouselId}`" :data-bs-slide-to="i" :class="{ active: i === (modelValue ?? 0) }")
  div.carousel-inner
    slot
  template(v-if="controls")
    button.carousel-control-prev(type="button" :data-bs-target="`#${carouselId}`" data-bs-slide="prev")
      span.carousel-control-prev-icon
    button.carousel-control-next(type="button" :data-bs-target="`#${carouselId}`" data-bs-slide="next")
      span.carousel-control-next-icon
</template>
