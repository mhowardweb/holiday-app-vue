<template>
<ion-app>
  <Header />
    <router-view></router-view>
  <Tabs />
</ion-app>
</template>

<script>
import Header from "@/components/Header.vue";
import Tabs from "@/components/Tabs.vue";

export default {
  name: "App",
  components: {
    Header,
    Tabs
  }
};
</script>
