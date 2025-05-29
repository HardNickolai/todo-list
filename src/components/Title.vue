<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <v-card-title>{{ text }}</v-card-title>
</template>

<style scoped></style>
