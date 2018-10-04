<template>
  <ion-app>
    <Header />
      <transition>
        <router-view></router-view>
      </transition>
    
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
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.1s ease;
}
.slide-fade-leave-active {
  transition: all 0.1s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
</style>
