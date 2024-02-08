<script setup>
// Imports
import Navbar from "@/components/layouts/partials/Navbar.vue";
import Sidebar from "@/components/layouts/partials/Sidebar.vue";

// Uses
import {onMounted} from 'vue';
import {initFlowbite} from 'flowbite';

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <Navbar/>

  <Sidebar/>

  <div class="p-4 sm:ml-64">
    <div class="p-4 mt-14">
      <router-view></router-view>
    </div>
  </div>
</template>