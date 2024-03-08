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
    active-class="dark:text-gray-900 bg-orange-300 dark:bg-orange-300"
    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-orange-300 dark:text-white dark:hover:text-gray-900 dark:hover:bg-orange-300"
  >
    <slot />
  </RouterLink>
</template>
