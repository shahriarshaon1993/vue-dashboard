<script setup>
// Imports
import IconsBar from '@/components/icons/Bar.vue';
import IconsMoon from '@/components/icons/Moon.vue';
import IconsSun from '@/components/icons/Sun.vue';

import {useDark, useToggle} from "@vueuse/core";
import {ref} from "vue";

// Uses
const isDark = useDark();
const toggleDark = useToggle(isDark);

// Refs
const user = ref({
  name: 'Simple',
  email: 'simple@example.com',
  photo: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg'
});

const userMenus = ref([
  {
    name: 'Dashboard',
    path: '#'
  },
  {
    name: 'Settings',
    path: '#'
  },
  {
    name: 'Sign out',
    path: '#'
  }
]);
</script>

<template>
  <nav class="z-50 w-full rounded-lg shadow bg-gray-50 dark:bg-gray-800">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start rtl:justify-end">
          <p class="text-gray-900 dark:text-white">Something here...</p>
        </div>

        <div class="flex items-center">
          <div class="mx-2">
            <button
                @click="toggleDark()"
                type="button"
                class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            >

              <IconsMoon v-if="!isDark" class="w-5 h-5"/>

              <IconsSun v-else class="w-5 h-5"/>
            </button>
          </div>

          <div class="flex items-center ms-3">
            <div>
              <button
                  type="button"
                  class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded="false" data-dropdown-toggle="dropdown-user"
              >

                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" :src="user.photo" alt="user photo">
              </button>
            </div>
            <div
                class="z-50 hidden my-4 ml-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                id="dropdown-user"
            >
              <div class="px-4 py-3" role="none">
                <p class="text-sm text-gray-900 dark:text-white" role="none">
                  {{ user.name }}
                </p>
                <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                  {{ user.email }}
                </p>
              </div>

              <ul class="py-1" role="none">
                <li v-for="(menu, index) in userMenus" :key="index">
                  <a
                      :href="menu.path"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem"
                  >
                    {{ menu.name }}
                  </a>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>