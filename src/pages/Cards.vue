<script setup>
import Card from "@/components/Card.vue";
import ArrowLongRight from "@/components/icons/ArrowLongRight.vue";
import InputLabel from "@/components/Inputs/InputLabel.vue";
import TextInput from "@/components/Inputs/TextInput.vue";
import {ref} from "vue";
import Checkbox from "@/components/Inputs/Checkbox.vue";
import OrangeButton from "@/components/Buttons/OrangeButton.vue";

const form = ref({
  email: '',
  password: '',
  remember_me: false
});
</script>

<template>
  <Card title="Noteworthy technology acquisitions 2021">
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>

    <router-link to="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-900 bg-orange-300 rounded-lg hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-300 dark:hover:bg-orange-400 dark:focus:ring-orange-800">
      Read more
      <ArrowLongRight class="rtl:rotate-180 w-3.5 h-3.5 ms-2" />
    </router-link>
  </Card>

  <Card title="Login Form">
    <div class="flex justify-center">
      <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form class="space-y-6" action="#">
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
        <div>
          <InputLabel for="email" value="Your email" class="mb-2"/>
          <TextInput type="email" v-model="form.email" id="email" placeholder="name@company.com" required/>
        </div>
        <div>
          <InputLabel for="password" value="Your password" class="mb-2"/>
          <TextInput type="password" v-model="form.password" id="password" placeholder="••••••••" />
        </div>
        <div class="flex items-start">
          <div class="flex items-start">
            <div class="flex items-center h-5 mr-2">
              <Checkbox id="remember" v-model="form.remember_me" :checked="form.remember_me" />
            </div>
            <InputLabel for="remember" value="Remember me" />
          </div>
          <a href="#" class="ms-auto text-sm text-orange-300 hover:underline dark:text-orange-300">Lost Password?</a>
        </div>
        <OrangeButton type="submit" class="w-full">Login to your account</OrangeButton>

        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered? <a href="#" class="text-orange-300 hover:underline dark:text-orange-300">Create account</a>
        </div>
      </form>
    </div>
    </div>
  </Card>
</template>