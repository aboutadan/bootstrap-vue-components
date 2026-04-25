<script setup lang="ts">
import { computed } from "vue";
import type { BootstrapVariant } from "../../types";

export interface TableField {
  key: string;
  label?: string;
  variant?: BootstrapVariant;
}

const props = defineProps<{
  items?: Record<string, any>[];
  fields?: (string | TableField)[];
  striped?: boolean;
  bordered?: boolean;
  hover?: boolean;
  small?: boolean;
  responsive?: boolean;
  variant?: BootstrapVariant;
}>();

const normalizedFields = computed<TableField[]>(() => {
  if (props.fields) {
    return props.fields.map((f) =>
      typeof f === "string" ? { key: f, label: f } : f
    );
  }
  if (props.items && props.items.length > 0) {
    return Object.keys(props.items[0]!).map((key) => ({ key, label: key }));
  }
  return [];
});

const hasItems = computed(() => props.items && props.items.length > 0);
</script>

<template lang="pug">
div(:class="responsive ? 'table-responsive' : undefined")
  table(:class="[ 'table', striped && 'table-striped', bordered && 'table-bordered', hover && 'table-hover', small && 'table-sm', variant && `table-${variant}`, ]")
    thead
      tr
        th(v-for="field in normalizedFields" :key="field.key" :class="field.variant && `table-${field.variant}`")
          slot(:name="`head(${field.key})`" :field="field") {{ field.label ?? field.key }}
    tbody
      template(v-if="hasItems")
        tr(v-for="(item, index) in items" :key="index")
          td(v-for="field in normalizedFields" :key="field.key")
            slot(:name="`cell(${field.key})`" :item="item" :value="item[field.key]" :index="index") {{ item[field.key] }}
</template>
