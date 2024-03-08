<script setup>
import Card from "@/components/Card.vue";
import InputLabel from "@/components/Inputs/InputLabel.vue";
import TextInput from "@/components/Inputs/TextInput.vue";
import TextareaInput from "@/components/Inputs/TextareaInput.vue";

import { ref } from "vue";
import Checkbox from "@/components/Inputs/Checkbox.vue";
import DefaultButton from "@/components/Buttons/DefaultButton.vue";
import LightButton from "@/components/Buttons/LightButton.vue";

const form = ref({
  zip: '',
  city: '',
  email: '',
  state: '',
  about: '',
  username: '',
  firstname: '',
  lastname: '',
  country_id: '',
  street: '',
  offers: false,
  comments: false,
  candidates: false,
  push_notifications: false,
});

const onSelect = (event) => {
  console.log(event.target.value);
};
</script>

<template>
  <Card title="Form Layouts">
    <form>
      <div class="space-y-12">
        <div class="border-b border-gray-900/10 pb-12 dark:border-gray-700">
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-4">
              <InputLabel for="username" value="Username"/>
              <div class="mt-2">
                <div class="sm:max-w-md">
                  <TextInput id="username" type="text" v-model="form.username" placeholder="Username" />
                </div>
              </div>
            </div>

            <div class="col-span-full">
              <InputLabel for="about" value="About"/>
              <div class="mt-2">
                <TextareaInput id="about" rows="4" v-model="form.about" placeholder="Write your thoughts here..."/>
              </div>
              <p class="mt-3 text-sm leading-6 text-gray-900 dark:text-white">Write a few sentences about yourself.</p>
            </div>
          </div>
        </div>

        <div class="border-b border-gray-900/10 pb-12 dark:border-gray-700">
          <h2 class="text-base font-semibold leading-7 text-gray-900 dark:text-white">Personal Information</h2>
          <p class="mt-1 text-sm leading-6 text-gray-700 dark:text-white">Use a permanent address where you can receive mail.</p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <InputLabel for="firstname" value="Firstname"/>
              <div class="mt-2">
                <TextInput id="firstname" type="text" v-model="form.firstname" placeholder="Firstname" />
              </div>
            </div>

            <div class="sm:col-span-3">
              <InputLabel for="lastname" value="Lastname"/>
              <div class="mt-2">
                <TextInput id="lastname" type="text" v-model="form.lastname" placeholder="Lastname" />
              </div>
            </div>

            <div class="sm:col-span-4">
              <InputLabel for="email" value="Email address"/>
              <div class="mt-2">
                <TextInput id="email" type="email" v-model="form.email" placeholder="Email address" />
              </div>
            </div>

            <div class="sm:col-span-3">
              <InputLabel for="country_id" value="Countries" />
              <div class="mt-2">
                <select id="country_id" v-model="form.country_id" class="sm:max-w-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
            </div>

            <div class="col-span-full">
              <InputLabel for="street" value="Street address"/>
              <div class="mt-2">
                <TextInput id="street" type="text" v-model="form.street" placeholder="Street address" />
              </div>
            </div>

            <div class="sm:col-span-2 sm:col-start-1">
              <InputLabel for="city" value="City"/>
              <div class="mt-2">
                <TextInput id="city" type="text" v-model="form.city" placeholder="City" />
              </div>
            </div>

            <div class="sm:col-span-2">
              <InputLabel for="state" value="State / Province"/>
              <div class="mt-2">
                <TextInput id="state" type="text" v-model="form.state" placeholder="State / Province" />
              </div>
            </div>

            <div class="sm:col-span-2">
              <InputLabel for="zip" value="ZIP / Postal code"/>
              <div class="mt-2">
                <TextInput id="zip" type="text" v-model="form.zip" placeholder="ZIP / Postal code" />
              </div>
            </div>
          </div>
        </div>

        <div class="border-b border-gray-900/10 pb-12 dark:border-gray-700">
          <h2 class="text-base font-semibold leading-7 text-gray-900 dark:text-white">Notifications</h2>
          <p class="mt-1 text-sm leading-6 text-gray-600 dark:text-white">We'll always let you know about important changes, but you pick what else you want to hear about.</p>

          <div class="mt-10 space-y-10">
            <fieldset>
              <legend class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">By Email</legend>
              <div class="mt-6 space-y-6">
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <Checkbox id="comments" v-model="form.comments" :checked="form.comments" />
                  </div>
                  <div class="text-sm leading-6">
                    <InputLabel for="comments" value="Comments" class="mt-0.5"/>
                  </div>
                </div>
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <Checkbox id="candidates" v-model="form.candidates" :checked="form.candidates" />
                  </div>
                  <div class="text-sm leading-6">
                    <InputLabel for="candidates" value="Candidates" class="mt-0.5"/>
                  </div>
                </div>
                <div class="relative flex gap-x-3">
                  <div class="flex h-6 items-center">
                    <Checkbox id="offers" v-model="form.offers" :checked="form.offers" />
                  </div>
                  <div class="text-sm leading-6">
                    <InputLabel for="offers" value="Offers" class="mt-0.5"/>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-2">
        <LightButton type="button">Cancel</LightButton>
        <DefaultButton type="button">Save</DefaultButton>
      </div>
    </form>
  </Card>
</template>