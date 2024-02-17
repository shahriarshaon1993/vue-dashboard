<script setup>
// Imports
import BreadcrumbItems from "@/components/Breadcrumb/BreadcrumbItems.vue";
import BreadcrumbItem from "@/components/Breadcrumb/BreadcrumbItem.vue";
import Card from "@/components/Card.vue";
import AlertInfo from "@/components/Alerts/AlertInfo.vue";
import AlertDanger from "@/components/Alerts/AlertDanger.vue";
import AlertSuccess from "@/components/Alerts/AlertSuccess.vue";
import AlertWarning from "@/components/Alerts/AlertWarning.vue";
import AlertDark from "@/components/Alerts/AlertDark.vue";

</script>

<template>
  <BreadcrumbItems>
    <BreadcrumbItem title="Dashboard" :href="{name: 'Dashboard'}" :home-icon="true"/>
    <BreadcrumbItem title="Alerts" :href="{name: 'ElementAlerts'}" :active="true"/>
  </BreadcrumbItems>

  <Card title="Default alert">
    <AlertInfo message="Info alert!">
      Change a few things up and try submitting again.
    </AlertInfo>

    <AlertDanger message="Danger alert!">
      Change a few things up and try submitting again.
    </AlertDanger>

    <AlertSuccess message="Success alert!">
      Change a few things up and try submitting again.
    </AlertSuccess>

    <AlertWarning message="Warning alert!">
      Change a few things up and try submitting again.
    </AlertWarning>

    <AlertDark message="Dark alert!">
      Change a few things up and try submitting again.
    </AlertDark>
  </Card>

  <Card title="Alerts with icon">
    <AlertInfo message="Info alert!" :icon="true">
      Change a few things up and try submitting again.
    </AlertInfo>

    <AlertDanger message="Danger alert!" :icon="true">
      Change a few things up and try submitting again.
    </AlertDanger>

    <AlertSuccess message="Success alert!" :icon="true">
      Change a few things up and try submitting again.
    </AlertSuccess>

    <AlertWarning message="Warning alert!" :icon="true">
      Change a few things up and try submitting again.
    </AlertWarning>

    <AlertDark message="Dark alert!" :icon="true">
      Change a few things up and try submitting again.
    </AlertDark>
  </Card>
</template>