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

<style>
.error {
  color: #f57f6c;
  font-size: 0.75rem;
  margin-left: 14px;
}
</style>
