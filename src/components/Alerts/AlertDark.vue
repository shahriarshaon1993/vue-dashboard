<script setup>
// Imports
import IconsInfo from "@/components/icons/Info.vue";

// Props & Emits
const props = defineProps({
  message: {
    type: String,
    required: true
  },
  icon: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div
      class="p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300"
      :class="{ 'flex items-center': icon }"
      role="alert"
  >
    <IconsInfo v-if="icon" class="flex-shrink-0 inline w-4 h-4 me-3"/>
    <span class="sr-only">Info</span>
    <div>
      <span class="font-medium">{{ message }}</span>
      <slot/>
    </div>
  </div>
</template>