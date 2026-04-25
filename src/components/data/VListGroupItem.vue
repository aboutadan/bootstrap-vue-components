<script setup lang="ts">
import type { BootstrapVariant } from "../../types";

defineProps<{
  active?: boolean;
  disabled?: boolean;
  variant?: BootstrapVariant;
  href?: string;
  to?: string;
}>();

defineEmits<{
  click: [event: MouseEvent];
}>();
</script>

<template lang="pug">
a(v-if="href" :href="href" :class="[ 'list-group-item list-group-item-action', active && 'active', disabled && 'disabled', variant && `list-group-item-${variant}`, ]" @click="$emit('click', $event)")
  slot
router-link(v-else-if="to" :to="to" :class="[ 'list-group-item list-group-item-action', active && 'active', disabled && 'disabled', variant && `list-group-item-${variant}`, ]" @click="$emit('click', $event)")
  slot
li(v-else :class="[ 'list-group-item', active && 'active', disabled && 'disabled', variant && `list-group-item-${variant}`, ]" @click="$emit('click', $event)")
  slot
</template>
