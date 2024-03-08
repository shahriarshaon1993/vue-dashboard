<script setup>
defineProps({
  href: {
    type: Object,
    required: true,
  }
});
</script>

<template>
  <RouterLink :to="href"
    active-class="bg-orange-300 dark:bg-gray-700"
    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-orange-300 dark:text-white dark:hover:bg-gray-700"
  >
    <slot />
  </RouterLink>
</template>
