<template>
  <ion-content>
    <ion-card padding color="warning">
      <ion-label text-center><h1>Hello {{summary.name}}</h1></ion-label>
    </ion-card>

    <ion-card padding color="success">
      <ion-label text-center><h1>TOTAL DAYS <h1>{{summary.totalDaysHol}}</h1></h1></ion-label>
    </ion-card>

    <ion-card padding color="danger">
      <ion-label text-center><h1>DAYS USED <h1>{{summary.totalDaysUsed}}</h1></h1></ion-label>
    </ion-card>

    <ion-card padding color="secondary">
      <ion-label text-center><h1>DAYS REMAINING <h1>{{summary.totalDaysRemaining}}</h1></h1></ion-label>
    </ion-card>

    <ion-card padding color="tertiary">
      <ion-label text-center><h1>USE YOUR HOLIDAYS BY<h1>{{summary.yearEnd | formatDate}}</h1></h1></ion-label>
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
