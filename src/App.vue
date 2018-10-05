<template>
  <div id="app">
    <ion-app>
      <menu-left/>
        <div class="ion-page" main>
          <Header />
          <transition name="slide" mode="out-in">
            <router-view></router-view>
          </transition>  
          <Footer />
          <!-- <Tabs /> -->
        </div>
    </ion-app>
    <ion-menu-controller></ion-menu-controller>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Tabs from "@/components/Tabs.vue";
import MenuLeft from "@/components/MenuLeft";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Tabs,
    MenuLeft,
    Footer
  }
};
</script>

<style>
.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  transition: opacity 0.2s;
}

.slide-leave-active {
  transition: opacity 0.2s;
  opacity: 0;
}

.error {
  color: #f57f6c;
  font-size: 0.75rem;
  margin-left: 14px;
}

:root {
  --ion-color-primary: #fa6c7a;
  --ion-color-primary-rgb: 250, 108, 122;
  --ion-color-primary-contrast: #000000;
  --ion-color-primary-contrast-rgb: 0, 0, 0;
  --ion-color-primary-shade: #dc5f6b;
  --ion-color-primary-tint: #fb7b87;

  --ion-color-secondary: #f19cb4;
  --ion-color-secondary-rgb: 241, 156, 180;
  --ion-color-secondary-contrast: #000000;
  --ion-color-secondary-contrast-rgb: 0, 0, 0;
  --ion-color-secondary-shade: #d4899e;
  --ion-color-secondary-tint: #f2a6bc;

  --ion-color-tertiary: #b2ebe9;
  --ion-color-tertiary-rgb: 178, 235, 233;
  --ion-color-tertiary-contrast: #000000;
  --ion-color-tertiary-contrast-rgb: 0, 0, 0;
  --ion-color-tertiary-shade: #9dcfcd;
  --ion-color-tertiary-tint: #baedeb;

  --ion-color-success: #b6eae1;
  --ion-color-success-rgb: 182, 234, 225;
  --ion-color-success-contrast: #000000;
  --ion-color-success-contrast-rgb: 0, 0, 0;
  --ion-color-success-shade: #a0cec6;
  --ion-color-success-tint: #bdece4;

  --ion-color-warning: #e5be9e;
  --ion-color-warning-rgb: 229, 190, 158;
  --ion-color-warning-contrast: #000000;
  --ion-color-warning-contrast-rgb: 0, 0, 0;
  --ion-color-warning-shade: #caa78b;
  --ion-color-warning-tint: #e8c5a8;

  --ion-color-danger: #f099a3;
  --ion-color-danger-rgb: 240, 153, 163;
  --ion-color-danger-contrast: #000000;
  --ion-color-danger-contrast-rgb: 0, 0, 0;
  --ion-color-danger-shade: #d3878f;
  --ion-color-danger-tint: #f2a3ac;

  --ion-color-dark: #361d2e;
  --ion-color-dark-rgb: 54, 29, 46;
  --ion-color-dark-contrast: #ffffff;
  --ion-color-dark-contrast-rgb: 255, 255, 255;
  --ion-color-dark-shade: #301a28;
  --ion-color-dark-tint: #4a3443;

  --ion-color-medium: #f1b8c0;
  --ion-color-medium-rgb: 241, 184, 192;
  --ion-color-medium-contrast: #000000;
  --ion-color-medium-contrast-rgb: 0, 0, 0;
  --ion-color-medium-shade: #d4a2a9;
  --ion-color-medium-tint: #f2bfc6;

  --ion-color-light: #fbfafa;
  --ion-color-light-rgb: 251, 250, 250;
  --ion-color-light-contrast: #000000;
  --ion-color-light-contrast-rgb: 0, 0, 0;
  --ion-color-light-shade: #dddcdc;
  --ion-color-light-tint: #fbfbfb;
}
</style>
