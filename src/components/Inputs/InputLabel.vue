<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  value: String,
  error: {
    type: String,
    default: ''
  }
});

// Hooks
const hasError = computed(() => {
  return !!props.error;
});
</script>

<template>
  <label
      class="block mb-2 text-sm font-medium"
      :class="[hasError ? 'text-red-700 dark:text-red-500' : 'text-gray-900 dark:text-white']"
  >
    <span v-if="value">{{ value }}</span>
    <span v-else><slot /></span>
  </label>
</template>