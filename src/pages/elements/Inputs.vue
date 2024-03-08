<script setup>
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem.vue";
import BreadcrumbItems from "@/components/Breadcrumb/BreadcrumbItems.vue";
import InputLabel from "@/components/Inputs/InputLabel.vue";
import TextInput from "@/components/Inputs/TextInput.vue";
import Card from "@/components/Card.vue";

import {ref} from "vue";
import InputError from "@/components/Inputs/InputError.vue";
import FileInput from "@/components/Inputs/FileInput.vue";

const form = ref({
  name: '',
  file_input: '',
  defaultTextField: '',
  errors: {name: 'Name field is required'}
});
</script>

<template>
  <BreadcrumbItems>
    <BreadcrumbItem title="Dashboard" :href="{name: 'Dashboard'}" :home-icon="true"/>
    <BreadcrumbItem title="Inputs" :href="{name: 'ElementInputs'}" :active="true"/>
  </BreadcrumbItems>

  <Card title="Input Field">
    <div class="mb-6">
      <InputLabel for="defaultTextField" value="Default Field" />
      <TextInput id="defaultTextField" type="text" v-model="form.defaultTextField" />
    </div>
    <div class="mb-6">
      <InputLabel for="name" value="Your name" :error="form.errors.name" />
      <TextInput id="name" type="text" v-model="form.name" placeholder="Name" />
      <InputError :message="form.errors.name" class="mt-2" />
    </div>
  </Card>

  <Card title="File Input">
      <div class="mb-6">
        <InputLabel for="file_input" value="Upload File" />
        <FileInput id="file_input" v-model="form.file_input" />
      </div>
  </Card>
</template>