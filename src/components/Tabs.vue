<template>
<ion-footer>
  <ion-toolbar>
        <ion-segment color="secondary">
          <ion-segment-button @click="goHols()" value="holidays">
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
export default {
  name: "Tabs",
  methods: {
    goHols() {
      this.$router.push({ path: "/holidays" });
    },
    goAdd() {
      this.$router.push({ path: "/add" });
    },
    goSettings() {
      this.$router.push({ path: "/settings" });
    }
  }
};
</script>
