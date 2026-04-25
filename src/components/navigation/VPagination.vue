<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue?: number
  totalPages: number
  size?: 'sm' | 'lg'
  limit?: number
  align?: 'center' | 'end'
}>()

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()

const currentPage = computed(() => props.modelValue ?? 1)

const pages = computed(() => {
  const total = props.totalPages
  const lim = props.limit ?? total
  const cur = currentPage.value
  let start = Math.max(1, cur - Math.floor(lim / 2))
  const end = Math.min(total, start + lim - 1)
  start = Math.max(1, end - lim + 1)
  const arr: number[] = []
  for (let i = start; i <= end; i++) arr.push(i)
  return arr
})

function goTo(page: number) {
  if (page >= 1 && page <= props.totalPages) {
    emit('update:modelValue', page)
  }
}
</script>

<template lang="pug">
nav
  ul(:class="['pagination', size && `pagination-${size}`, align && `justify-content-${align}`]")
    li(:class="['page-item', currentPage <= 1 && 'disabled']")
      a.page-link(href="#" @click.prevent="goTo(currentPage - 1)") &laquo;
    li(v-for="page in pages" :key="page" :class="['page-item', page === currentPage && 'active']")
      a.page-link(href="#" @click.prevent="goTo(page)") {{ page }}
    li(:class="['page-item', currentPage >= totalPages && 'disabled']")
      a.page-link(href="#" @click.prevent="goTo(currentPage + 1)") &raquo;
</template>
