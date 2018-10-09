<template>
  <ion-header>
    <ion-toolbar style="header">
      <ion-buttons slot="start">
          <ion-menu-button  @click="openStart" auto-hide="false"></ion-menu-button>
      </ion-buttons>
      <ion-title>Holiday Manager</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    openStart() {
      document.querySelector("ion-menu-controller").open("start");
    }
  }
};
</script>

<style scoped>
.header {
  --ion-color-primary-contrast: #ffffff;
  --ion-toolbar-background-color: #bc9cff;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 10px;
  text-transform: uppercase;
  color: #1f2041;
}
</style>
