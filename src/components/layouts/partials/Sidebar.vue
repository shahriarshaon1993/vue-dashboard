<script setup>
// Imports
import IconsArrowTopRightOnSquare from '@/components/icons/ArrowTopRightOnSquare.vue';
import IconsBarsBottom from '@/components/icons/BarsBottom.vue';
import IconsTableCells from '@/components/icons/TableCells.vue';
import NavLink from "@/components/NavLink.vue";
import {
  HomeIcon,
  Squares2X2Icon
} from '@heroicons/vue/24/solid';

// Refs
const navigation = [
  { name: 'Dashboard', icon: HomeIcon , to: {name: 'Dashboard' }},
  { name: 'UI Elements', icon: Squares2X2Icon, to: null, menus: [
      { name: 'Alerts', icon: null , to: {name: 'ElementAlerts' }},
      { name: 'Buttons', icon: null , to: {name: 'ElementButtons' }},
      { name: 'Inputs', icon: null , to: {name: 'ElementInputs' }},
      { name: 'Pagination', icon: null , to: {name: 'ElementPagination' }},
  ]},
  { name: 'Tables', icon: IconsTableCells , to: {name: 'Table' }},
  { name: 'Forms', icon: IconsArrowTopRightOnSquare , to: {name: 'Form' }},
];
</script>

<template>
  <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <span class="sr-only">Open sidebar</span>
    <IconsBarsBottom class="w-6 h-6" />
  </button>

  <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 shadow">
      <a href="#" class="flex items-center ps-2.5 mb-5">
        <span class="self-center text-2xl text-center uppercase font-bold whitespace-nowrap dark:text-white">
          Khafidh
        </span>
      </a>

      <ul class="space-y-2 font-medium">
        <li v-for="item in navigation" :key="item.name">
          <template v-if="item.menus">
            <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
              <component :is="item.icon" class="w-5 h-5" />
              <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">{{ item.name }}</span>
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
              </svg>
            </button>

            <ul id="dropdown-example" class="hidden py-2 space-y-2">
              <li v-for="menu in item.menus" :key="menu.name">
                <NavLink :href="menu.to" class="pl-11">{{ menu.name }}</NavLink>
              </li>
            </ul>
          </template>

          <template v-else>
            <NavLink :href="item.to" >
              <component :is="item.icon" class="w-5 h-5" />
              <span class="ms-2">{{ item.name }}</span>
            </NavLink>
          </template>
        </li>
      </ul>
    </div>
  </aside>
</template>