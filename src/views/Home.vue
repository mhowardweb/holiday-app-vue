<template>
  <ion-content>
    <ion-card padding color="warning">
      <ion-item>
        <ion-label><h1>Hello {{settings.name}}</h1></ion-label>
      </ion-item>
    </ion-card>

    <ion-card padding color="danger">
      <ion-item>
        <ion-label><h1>Days Used: {{otherSettings.daysTaken}}</h1></ion-label>
      </ion-item>
      
    </ion-card>

    <ion-card padding color="secondary">
      <ion-item>
        <ion-label><h1>Days Remaining: {{otherSettings.daysRemaining}}</h1></ion-label>
      </ion-item>
      
    </ion-card>

    <ion-card padding color="tertiary">
      <ion-item>
        <ion-label><h1>You must use your Holidays by: {{settings.yearEnd}}</h1></ion-label>
      </ion-item>
      
    </ion-card>

    <ion-card padding color="success">
      <ion-item>
        <ion-label><h1>Upcoming Holiday: {{settings.yearEnd}}</h1></ion-label>
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
