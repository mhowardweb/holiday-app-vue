<template>
  <ion-content>
    <ion-card padding color="warning">
      <ion-item>
        <ion-label><h1>Hello {{settings.name}}</h1></ion-label>
      </ion-item>
      <ion-item>
        <ion-label>You have used {{otherSettings.daysTaken}} days holiday.</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>and you have {{otherSettings.daysRemaining}} days holiday to take</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>by {{settings.yearEnd}}.</ion-label>
      </ion-item>
    </ion-card>
  
</ion-content >
    
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState({
      settings: state => state.settings
    }),
    ...mapState({
      otherSettings: state => state
    })
  }
};
</script>
