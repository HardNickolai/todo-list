<script setup lang="ts">
import type { PropType } from "vue";
import type { VuetifyValidationRule } from "../type/input";

defineProps({
  handleKeydown: {
    type: Function as PropType<(e: KeyboardEvent) => void>,
    required: true,
  },
  maxLength: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
  rules: {
    type: Array as PropType<VuetifyValidationRule[]>,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <v-text-field
    :model-value="modelValue"
    :maxlength="maxLength"
    :label="label"
    :rules="rules"
    :type="type"
    @keydown="handleKeydown"
    @update:modelValue="$emit('update:modelValue', $event)"
  />
</template>

<style scoped></style>
