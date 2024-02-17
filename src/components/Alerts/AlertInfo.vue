<script setup>
import IconsInfo from "@/components/icons/Info.vue";

defineProps({
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
      class="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
      :class="{ 'flex items-center': icon }"
      role="alert"
  >
    <IconsInfo v-if="icon" class="flex-shrink-0 inline w-4 h-4 me-3"/>
    <span class="font-medium">{{ message }}</span>
    <slot />
  </div>
</template>