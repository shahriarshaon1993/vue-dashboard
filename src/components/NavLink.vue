<script setup>
defineProps({
  href: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <RouterLink :to="href"
    active-class="bg-gray-100 dark:bg-gray-700"
    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
  >
    <slot />
  </RouterLink>
</template>
