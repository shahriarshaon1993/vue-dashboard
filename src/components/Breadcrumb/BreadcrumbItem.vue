<script setup>
// Imports
import IconsHome from "@/components/icons/Home.vue";
import IconsChevronRight from "@/components/icons/ChevronRight.vue";

// Props & Emit
const props = defineProps({
  title: String,
  href: {
    type: Object,
    required: true,
  },
  active: {
    type: Boolean,
    default: false
  },
  homeIcon: {
    type: Boolean,
    default: false
  },
});
</script>

<template>
  <li v-if="active" aria-current="page">
    <div class="flex items-center">
      <IconsChevronRight class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" />
      <span class="ms-1 text-base font-medium text-gray-500 md:ms-2 dark:text-gray-400">
        {{ title }}
      </span>
    </div>
  </li>
  <li v-else class="inline-flex items-center">
    <RouterLink :to="href"
       class="inline-flex items-center text-base font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
      <IconsHome v-if="homeIcon" class="w-3 h-3 me-2.5" />
      <IconsChevronRight v-else class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" />
      {{ title }}
    </RouterLink>
  </li>
</template>