import './assets/main.css';
import VueApexCharts from "vue3-apexcharts";

import { createApp } from 'vue';

import Router from './router'
import App from './App.vue';

createApp(App)
    .use(Router)
    .use(VueApexCharts)
    .mount('#app')
