<template>
  <ion-footer>
    <ion-toolbar color="primary">
      <ion-segment>
        <ion-segment-button  @click="goHols()" value="holidays">
          <ion-icon name="sunny"></ion-icon>
        </ion-segment-button>
        
        <ion-segment-button @click="goAdd()" value="add">
          <ion-icon name="add"></ion-icon>
        </ion-segment-button>
        
        <ion-segment-button @click="goSettings()" value="settings">
          <ion-icon name="settings"></ion-icon>
        </ion-segment-button>
      </ion-segment>
    </ion-toolbar>
  </ion-footer>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Tabs",
  methods: {
    ...mapActions({
      clearForm: "clearForm"
    }),
    goHols() {
      this.$router.push({ path: "/holidays" });
    },
    goAdd() {
      this.clearForm();
      this.$router.push({ path: "/add" });
    },
    goSettings() {
      this.$router.push({ path: "/settings" });
    }
  }
};
</script>
