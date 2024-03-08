<script setup>
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem.vue";
import BreadcrumbItems from "@/components/Breadcrumb/BreadcrumbItems.vue";
import Card from "@/components/Card.vue";
import Table from "@/components/Table/Table.vue";
import TableRow from "@/components/Table/TableRow.vue";
import TableHeadCell from "@/components/Table/TableHeadCell.vue";
import TableDataCell from "@/components/Table/TableDataCell.vue";

const products = [
  { name: 'Apple MacBook Pro 17', color: 'Silver', category: 'Laptop', price: 2999 },
  { name: 'Microsoft Surface Pro ', color: 'White', category: 'Laptop PC', price: 1999 },
  { name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: 399 }
];
</script>

<template>
  <BreadcrumbItems>
    <BreadcrumbItem title="Dashboard" :href="{name: 'Dashboard'}" :home-icon="true"/>
    <BreadcrumbItem title="Tables" :href="{name: 'Table'}" :active="true"/>
  </BreadcrumbItems>

  <Card title="Default table">
    <Table>
      <template #header>
        <TableRow>
          <TableHeadCell>Product name</TableHeadCell>
          <TableHeadCell>Color</TableHeadCell>
          <TableHeadCell>Category</TableHeadCell>
          <TableHeadCell>Price</TableHeadCell>
        </TableRow>
      </template>

      <template #default>
        <TableRow v-for="(product, index) in products" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <TableDataCell>{{ product.name }}</TableDataCell>
          <TableDataCell>{{ product.color }}</TableDataCell>
          <TableDataCell>{{ product.category }}</TableDataCell>
          <TableDataCell>${{ product.price }}</TableDataCell>
        </TableRow>
      </template>
    </Table>
  </Card>
</template>