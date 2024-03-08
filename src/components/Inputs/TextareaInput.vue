<script setup>
import {onMounted, ref} from "vue";

const model = defineModel({
  type: String,
  required: true
});

const input = ref(null);

onMounted(() => {
  if (input.value.hasAttribute('autofocus')) {
    input.value.focus();
  }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
  <textarea
      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-300 focus:border-orange-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-300 dark:focus:border-orange-300"
      v-model="model"
      ref="input"
  ></textarea>
</template>