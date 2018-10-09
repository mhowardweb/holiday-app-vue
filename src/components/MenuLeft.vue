<template>      
  <ion-menu side="start">
    <ion-header>
      <ion-toolbar class="mtoolbar">
        <ion-title class="mtitle">Holiday Menu</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content padding>
      <ion-list>
        <ion-item button detail @click="goHome()" lines="full">
          <ion-icon style="color: #6fcf97" name="home" slot="start"></ion-icon>
          <ion-label class="moption">Home</ion-label>
        </ion-item>

        <ion-item button detail @click="goHols()" lines="full">
          <ion-icon style="color: #6fcf97" name="briefcase" slot="start"></ion-icon>
          <ion-label class="moption">Holidays</ion-label>
        </ion-item>

        <ion-item button detail @click="goAdd()" lines="full">
          <ion-icon style="color: #6fcf97" name="add-circle" slot="start"></ion-icon>
          <ion-label class="moption">Add Holiday</ion-label>
        </ion-item>
        <ion-item-divider></ion-item-divider>

        <ion-item button detail @click="goSettings()" lines="full">
          <ion-icon style="color: #6fcf97" name="cog" slot="start"></ion-icon>
          <ion-label class="moption">Settings</ion-label>
        </ion-item>
      </ion-list>
      
    </ion-content>

    <ion-footer>
      <ion-toolbar class="mtoolbar"/>
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

<style scoped>
.mtitle {
  font-family: Montserrat;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 14px;
  text-transform: uppercase;
  color: #1f2041;
}
.moption {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  font-size: 18px;
  color: rgba(31, 32, 65, 0.75);
}

.mtoolbar {
  --ion-toolbar-background-color: #bc9cff;
}
</style>
