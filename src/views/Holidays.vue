<template>
  <ion-content>
    <ion-alert-controller></ion-alert-controller>
      
    <ion-list padding>
      <ion-list-header color="warning">Summary for {{summary.name}}</ion-list-header>
      <ion-item lines="inset">
        <ion-label>TOTAL DAYS</ion-label>
        <ion-label>{{summary.totalDaysHol}}</ion-label>
      </ion-item>
      <ion-item lines="inset">
        <ion-label>DAYS USED:</ion-label>
        <ion-label>{{summary.totalDaysUsed}}</ion-label>
      </ion-item>
      <ion-item lines="inset">
        <ion-label>DAYS REMAINING:</ion-label>
        <ion-label>{{summary.totalDaysRemaining}}</ion-label>
      </ion-item>
      <ion-item lines="inset">
        <ion-label>YEAR END:</ion-label>
        <ion-label>{{summary.yearEnd | formatDate}}</ion-label>
      </ion-item>  
    </ion-list>

    <ion-list padding>
      <ion-list-header text-center color="tertiary">Holidays Booked</ion-list-header>
      <ion-item lines="inset" v-for="holiday in holidays" :key="holiday.id">
        <ion-icon color="warning" slot="end" size="large" @click="handleSelect(holiday)" name="create"></ion-icon>
        <ion-icon color="danger" slot="end" size="large" @click="showDialogAlert(holiday)" name="trash"></ion-icon>
        
        <ion-row>
          <ion-col>
            <ion-label color="primary">Details:</ion-label>
            <ion-label color="primary">Holiday Start:</ion-label>
            <ion-label color="primary">Holiday End:</ion-label>
            <ion-label color="primary">Days:</ion-label>
          </ion-col>
          <ion-col>
            <ion-label>{{holiday.holName}}</ion-label>
            <ion-label>{{holiday.holStart | formatDate}}</ion-label>
            <ion-label>{{holiday.holEnd | formatDate}}</ion-label>
            <ion-label>{{holiday.daysBooked}}</ion-label>
          </ion-col>
          
          
        </ion-row>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Holidays",
  data() {
    return {
      param: "holStart"
    };
  },
  computed: {
    // ...mapState({
    //   holidays: state => state.holidays
    // }),
    summary() {
      return this.$store.getters.calcSummary;
    },
    holidays() {
      // Get holidays array and sort by holStart
      const data = this.$store.state.holidays;
      return data.sort((a, b) => {
        return a[this.param] > b[this.param];
      });
    }
  },
  methods: {
    ...mapActions({
      handleDelete: "deleteHoliday",
      handleSelect: "selectHoliday"
    }),
    async showDialogAlert(holiday) {
      const alertController = document.querySelector("ion-alert-controller");
      await alertController.componentOnReady();

      const alert = await alertController.create({
        header: "Confirm Deletion!",
        message: "Are you sure you wish to delete this Holiday?",
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary"
          },
          {
            text: "Delete",
            handler: () => {
              this.handleDelete(holiday);
            }
          }
        ]
      });
      return await alert.present();
    }
  }
};
</script>

<style scoped>
</style>
