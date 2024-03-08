<script setup>
// Imports
import BreadcrumbItems from "@/components/Breadcrumb/BreadcrumbItems.vue";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem.vue";
import Card from "@/components/Card.vue";
import DefaultButton from "@/components/Buttons/DefaultButton.vue";
import AlternativeButton from "@/components/Buttons/AlternativeButton.vue";
import DarkButton from "@/components/Buttons/DarkButton.vue";
import LightButton from "@/components/Buttons/LightButton.vue";
import GreenButton from "@/components/Buttons/GreenButton.vue";
import RedButton from "@/components/Buttons/RedButton.vue";
import YellowButton from "@/components/Buttons/YellowButton.vue";
import PurpleButton from "@/components/Buttons/PurpleButton.vue";
import DefaultLoaderButton from "@/components/Buttons/DefaultLoaderButton.vue";
import IconsLoader from "@/components/icons/Loader.vue";
import AlternativeLoaderButton from "@/components/Buttons/AlternativeLoaderButton.vue";
import OrangeButton from "@/components/Buttons/OrangeButton.vue";
import OrangeLoaderButton from "@/components/Buttons/OrangeLoaderButton.vue";
</script>

<template>
  <BreadcrumbItems>
    <BreadcrumbItem title="Dashboard" :href="{name: 'Dashboard'}" :home-icon="true"/>
    <BreadcrumbItem title="Buttons" :href="{name: 'ElementButtons'}" :active="true"/>
  </BreadcrumbItems>

  <Card title="Button Default">
    <DefaultButton>Default</DefaultButton>
    <AlternativeButton>Alternative</AlternativeButton>
    <DarkButton>Dark</DarkButton>
    <LightButton>Light</LightButton>
    <GreenButton>Green</GreenButton>
    <RedButton>Red</RedButton>
    <YellowButton>Yellow</YellowButton>
    <PurpleButton>Purple</PurpleButton>
    <OrangeButton>Orange</OrangeButton>
  </Card>

  <Card title="Button Loader">
    <DefaultLoaderButton>
      <IconsLoader class="w-4 h-4 me-3 text-white" />
      Loading...
    </DefaultLoaderButton>

    <AlternativeLoaderButton>
      <IconsLoader class="w-4 h-4 me-3 text-white" />
      Loading...
    </AlternativeLoaderButton>

    <OrangeLoaderButton>
      <IconsLoader class="w-4 h-4 me-3 text-white" />
      Loading...
    </OrangeLoaderButton>
  </Card>
</template>