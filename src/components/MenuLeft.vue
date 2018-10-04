<template>      
  <ion-menu side="start">
    <ion-header>
      <ion-toolbar color="warning">
        <ion-title>Holiday Menu</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content padding>
      <ion-list>
        <ion-item button detail @click="goHome()" lines="full">
          <ion-icon color="primary" name="home" slot="start"></ion-icon>
          <ion-label>Home</ion-label>
        </ion-item>

        <ion-item button detail @click="goHols()" lines="full">
          <ion-icon color="primary" name="briefcase" slot="start"></ion-icon>
          <ion-label>Holidays</ion-label>
        </ion-item>

        <ion-item button detail @click="goAdd()" lines="full">
          <ion-icon color="primary" name="add-circle" slot="start"></ion-icon>
          <ion-label>Add Holiday</ion-label>
        </ion-item>
        <ion-item-divider></ion-item-divider>

        <ion-item button detail @click="goSettings()" lines="full">
          <ion-icon color="primary" name="cog" slot="start"></ion-icon>
          <ion-label>Settings</ion-label>
        </ion-item>
      </ion-list>
      
    </ion-content>

    <ion-footer>
      <ion-toolbar color="warning"/>
    </ion-footer>
</ion-menu>
  
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "MenuLeft",
  methods: {
    ...mapActions({
      clearForm: "clearForm"
    }),
    goHome() {
      this.$store.dispatch("setRoute", "home");
      document.querySelector("ion-menu-controller").close("start");
    },
    goHols() {
      this.$store.dispatch("setRoute", "holidays");
      document.querySelector("ion-menu-controller").close("start");
    },
    goAdd() {
      this.clearForm();
      this.$store.dispatch("setRoute", "add");
      document.querySelector("ion-menu-controller").close("start");
    },
    goSettings() {
      this.$store.dispatch("setRoute", "settings");
      document.querySelector("ion-menu-controller").close("start");
    }
  }
};
</script>
