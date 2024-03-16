<script setup>
// Imports
import BreadcrumbItems from "@/components/Breadcrumb/BreadcrumbItems.vue";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem.vue";
import IconsCurrencyDollar from "@/components/icons/CurrencyDollar.vue";
import IconsShoppingBag from "@/components/icons/ShoppingBag.vue";
import IconsUserCircle from "@/components/icons/UserCircle.vue";
import IconsWallet from "@/components/icons/Wallet.vue";
import Table from "@/components/Table/Table.vue";
import TableHeadCell from "@/components/Table/TableHeadCell.vue";
import TableRow from "@/components/Table/TableRow.vue";
import TableDataCell from "@/components/Table/TableDataCell.vue";
import PencilSquare from "@/components/icons/PencilSquare.vue";

// Charts
const barOptions = {
  chart: {},
  legend: {
    fontSize: '15px',
    labels: {
      useSeriesColors: true
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '85%',
      endingShape: 'rounded'
    }
  },
  dataLabels: {
    enabled: true
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    labels: {
      style: {
        colors: [],
        fontSize: '14px',
        cssClass: 'hello-world'
      },
    }
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    }
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  },
  // colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800']
};

const barSeries = [
  {
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  },
  {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }
];

const pieSeries = [44, 55, 13, 43, 22];

const pieOptions = {
  chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
};

// Table users
const users = [
  {
    id: 1201,
    name: 'Neil Sims',
    email: 'neil.sims@example.com',
    position: 'React Developer',
    image: 'https://flowbite.com/docs/images/people/profile-picture-1.jpg',
    status: true
  },
  {
    id: 1202,
    name: 'Bonnie Green',
    email: 'bonnie@example.com',
    position: 'Designer',
    image: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg',
    status: false
  },
  {
    id: 1203,
    name: 'Jese Leos',
    email: 'jese@example.com',
    position: 'Vue JS Developer',
    image: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg',
    status: true
  },
  {
    id: 1204,
    name: 'Thomas Lean',
    email: 'thomes@example.com',
    position: 'UI/UX Engineer',
    image: 'https://flowbite.com/docs/images/people/profile-picture-4.jpg',
    status: true
  },
  {
    id: 1205,
    name: 'Leslie Livingston',
    email: 'leslie@flowbite.com',
    position: 'SEO Specialist',
    image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
    status: false
  }
];
</script>

<template>
  <BreadcrumbItems>
    <BreadcrumbItem title="Dashboard" :href="{name: 'Dashboard'}" :home-icon="true"/>
  </BreadcrumbItems>

  <div class="mt-10 dark:border-gray-700">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
      <div class="h-36 shadow rounded-lg transition duration-300 ease-in-out hover:-translate-y-2 bg-gray-50 dark:bg-gray-800">
        <div class="p-4">
          <div class="flex items-center">
            <div class="flex-grow overflow-hidden">
              <p class="uppercase font-semibold text-gray-500 text-sm dark:text-gray-400">total earning</p>
            </div>
            <div class="flex-shrink-0">
              <h5 class="font-semibold text-sm text-gray-500 dark:text-gray-400">+16.24%</h5>
            </div>
          </div>

          <div class="flex items-end justify-between mt-4">
            <div>
              <h4 class="text-3xl text-gray-700 font-bold dark:text-gray-200 mb-4">
                $<span>559.25</span>k
              </h4>

              <router-link to="#" class="text-orange-300 underline text-sm">View net earnings</router-link>
            </div>
            <div class="flex items-center justify-center h-12 w-12 flex-shrink-0 bg-stone-300 text-white rounded">
                <IconsCurrencyDollar class="w-6 h-6 text-stone-600" />
            </div>
          </div>
        </div>
      </div>

      <div class="h-36 shadow rounded-lg transition duration-300 ease-in-out hover:-translate-y-2 bg-gray-50 dark:bg-gray-800">
        <div class="p-4">
          <div class="flex items-center">
            <div class="flex-grow overflow-hidden">
              <p class="uppercase font-semibold text-gray-500 text-sm dark:text-gray-400">orders</p>
            </div>
            <div class="flex-shrink-0">
              <h5 class="font-semibold text-sm text-red-500">-2.24%</h5>
            </div>
          </div>

          <div class="flex items-end justify-between mt-4">
            <div>
              <h4 class="text-3xl text-gray-700 font-bold dark:text-gray-200 mb-4">
                36,894
              </h4>

              <router-link to="#" class="text-orange-300 underline text-sm">View all orders</router-link>
            </div>
            <div class="flex items-center justify-center h-12 w-12 flex-shrink-0 bg-blue-300 text-white rounded">
              <IconsShoppingBag class="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>
      </div>

      <div class="h-36 shadow rounded-lg transition duration-300 ease-in-out hover:-translate-y-2 bg-gray-50 dark:bg-gray-800">
        <div class="p-4">
          <div class="flex items-center">
            <div class="flex-grow overflow-hidden">
              <p class="uppercase font-semibold text-gray-500 text-sm dark:text-gray-400">customers</p>
            </div>
            <div class="flex-shrink-0">
              <h5 class="font-semibold text-sm text-gray-500 dark:text-gray-400">+29.08%</h5>
            </div>
          </div>

          <div class="flex items-end justify-between mt-4">
            <div>
              <h4 class="text-3xl text-gray-700 font-bold dark:text-gray-200 mb-4">
                <span>183.35</span>M
              </h4>

              <router-link to="#" class="text-orange-300 underline text-sm">See details</router-link>
            </div>
            <div class="flex items-center justify-center h-12 w-12 flex-shrink-0 bg-orange-300 text-white rounded">
              <IconsUserCircle class="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      <div class="h-36 shadow rounded-lg transition duration-300 ease-in-out hover:-translate-y-2 bg-gray-50 dark:bg-gray-800">
        <div class="p-4">
          <div class="flex items-center">
            <div class="flex-grow overflow-hidden">
              <p class="uppercase font-semibold text-gray-500 text-sm dark:text-gray-400">my balance</p>
            </div>
            <div class="flex-shrink-0">
              <h5 class="font-semibold text-sm text-gray-500 dark:text-gray-400">+00.0%</h5>
            </div>
          </div>

          <div class="flex items-end justify-between mt-4">
            <div>
              <h4 class="text-3xl text-gray-700 font-bold dark:text-gray-200 mb-4">
                $<span>165.89</span>k
              </h4>

              <router-link to="#" class="text-orange-300 underline text-sm">Withdraw money</router-link>
            </div>
            <div class="flex items-center justify-center h-12 w-12 flex-shrink-0 bg-slate-300 text-white rounded">
              <IconsWallet class="w-6 h-6 text-slate-600" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div class="rounded bg-gray-50 dark:bg-gray-800">
        <apexchart type="bar" :options="barOptions" :series="barSeries"></apexchart>
      </div>
      <div class="flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800 p-4">
        <apexchart type="pie" width="400" :options="pieOptions" :series="pieSeries"></apexchart>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4 mb-4">
      <Table>
        <template #header>
          <TableRow>
            <TableHeadCell>name</TableHeadCell>
            <TableHeadCell>position</TableHeadCell>
            <TableHeadCell>status</TableHeadCell>
            <TableHeadCell>Action</TableHeadCell>
          </TableRow>
        </template>

        <template #default>
          <TableRow
              v-for="(user, index) in users" :key="user.id"
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <TableHeadCell class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
              <img class="w-10 h-10 rounded-full" :src="user.image" :alt="user.name">
              <div class="ps-3">
                <div class="text-base font-semibold">{{ user.name }}</div>
                <div class="font-normal text-gray-500">{{ user.email }}</div>
              </div>
            </TableHeadCell>
            <TableDataCell>{{ user.position }}</TableDataCell>
            <TableDataCell>
              <div class="flex items-center">
                <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                <template v-if="user.status">Online</template>
                <template v-else>Offline</template>
              </div>
            </TableDataCell>
            <TableDataCell>
              <router-link to="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                <PencilSquare class="w-6 h-6" />
              </router-link>
            </TableDataCell>
          </TableRow>
        </template>
      </Table>
    </div>
  </div>
</template>