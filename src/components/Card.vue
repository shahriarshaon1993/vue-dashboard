<script setup>
defineProps({
  title: String,
});
</script>

<template>
  <div
      class="block w-full p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 space-x-2">

    <div class="flex justify-between mb-3">
      <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {{ title ?? '' }}
      </h5>
    </div>

    <slot />
  </div>
</template>