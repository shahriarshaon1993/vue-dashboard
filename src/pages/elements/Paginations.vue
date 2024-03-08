<script setup>
import BreadcrumbItems from "@/components/Breadcrumb/BreadcrumbItems.vue";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem.vue";
import Card from "@/components/Card.vue";
import {ref} from "vue";
import Pagination from "@/components/Pagination.vue";

// refs
const links = ref([
  { active: false, label: 'Previous', url: null },
  { active: true, label: 1, url: '#' },
  { active: false, label: 2, url: '#' },
  { active: false, label: 3, url: '#' },
  { active: false, label: 4, url: '#' },
  { active: false, label: 5, url: '#' },
  { active: false, label: 'Next', url: '#' },
]);
</script>

<template>
  <BreadcrumbItems>
    <BreadcrumbItem title="Dashboard" :href="{name: 'Dashboard'}" :home-icon="true"/>
    <BreadcrumbItem title="Pagination" :href="{name: 'ElementPagination'}" :active="true"/>
  </BreadcrumbItems>

  <Card title="Default pagination">
    <Pagination :links="links" />
  </Card>
</template>