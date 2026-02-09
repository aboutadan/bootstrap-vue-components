<script setup lang="ts">
import { ref, provide, watch, onMounted, onBeforeUnmount, computed } from 'vue'
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
const activeIndex = ref(props.modelValue ?? 0)
const itemCount = ref(0)

provide('carousel', {
  register: () => {
    const idx = itemCount.value
    itemCount.value++
    return idx
  },
  activeIndex,
})

const indicatorIndices = computed(() => Array.from({ length: itemCount.value }, (_, i) => i))

function goTo(index: number) {
  const count = itemCount.value
  if (count === 0) return
  activeIndex.value = ((index % count) + count) % count
  emit('update:modelValue', activeIndex.value)
}

function prev() {
  goTo(activeIndex.value - 1)
}

function next() {
  goTo(activeIndex.value + 1)
}

let timer: ReturnType<typeof setInterval> | null = null

function startAutoPlay() {
  stopAutoPlay()
  if (props.interval === false) return
  const ms = props.interval ?? 5000
  timer = setInterval(() => next(), ms)
}

function stopAutoPlay() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

watch(() => props.modelValue, (val) => {
  if (val != null && val !== activeIndex.value) {
    activeIndex.value = val
  }
})

onMounted(() => {
  startAutoPlay()
})

onBeforeUnmount(() => {
  stopAutoPlay()
})
</script>

<template lang="pug">
div(:id="carouselId" :class="['carousel slide', fade && 'carousel-fade']")
  div.carousel-indicators(v-if="indicators")
    button(v-for="i in indicatorIndices" :key="i" type="button" :class="{ active: i === activeIndex }" @click="goTo(i)")
  div.carousel-inner
    slot
  template(v-if="controls")
    button.carousel-control-prev(type="button" @click="prev")
      span.carousel-control-prev-icon
    button.carousel-control-next(type="button" @click="next")
      span.carousel-control-next-icon
</template>
