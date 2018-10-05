<template>
  <ion-content color="primary">
    <ion-text text-center color="light"><h1>Hello {{summary.name}}</h1></ion-text>
  
    <ion-card color="light">
      <ion-text text-center><h4>TOTAL DAYS <h2>{{summary.totalDaysHol}}</h2></h4></ion-text>
    </ion-card>
    
    <ion-card color="light">
      <ion-text text-center><h4>DAYS USED <h2>{{summary.totalDaysUsed}}</h2></h4></ion-text>
    </ion-card>

    <ion-card color="light">
      <ion-text text-center><h4>DAYS REMAINING <h2>{{summary.totalDaysRemaining}}</h2></h4></ion-text>
    </ion-card>
      
    <ion-card color="light">
      <ion-text text-center><h4>USE YOUR HOLIDAYS BY<h2>{{summary.yearEnd | formatDate}}</h2></h4></ion-text>
    </ion-card>
     
  </ion-content >
</template>

<script>
export default {
  name: "Home",
  computed: {
    summary() {
      return this.$store.getters.calcSummary;
    }
  }
};
</script>
