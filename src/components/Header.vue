<template>
  <ion-header>
    <ion-toolbar color="secondary">
      <ion-title>{{headerTitle}}</ion-title>
 
    </ion-toolbar>
  </ion-header>
</template>


<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapState(["headerTitle"])
  }
};
</script>
