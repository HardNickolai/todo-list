<script setup lang="ts">
import type { PropType } from "vue";

defineProps({
  isDisabled: {
    type: Boolean,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  onClick: {
    type: Function as PropType<() => void>,
    required: true,
  },
});
</script>

<template>
  <v-btn @click.native.prevent="onClick" :disabled="isDisabled">
    {{ text }}
  </v-btn>
</template>

<style scoped></style>
