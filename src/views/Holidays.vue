<template>
  <ion-content>
    <ion-alert-controller></ion-alert-controller>
    <ion-card color="success" padding>
      <ion-card-title text-center>Summary for {{summary.name}}</ion-card-title>
      <ion-row>
        <ion-col>TOTAL DAYS</ion-col>
        <ion-col>{{summary.totalDaysHol}}</ion-col>
      </ion-row>
      <ion-row>
        <ion-col>DAYS USED:</ion-col>
        <ion-col>{{summary.totalDaysUsed}}</ion-col>
      </ion-row>
      <ion-row>
        <ion-col>DAYS REMAINING:</ion-col>
        <ion-col>{{summary.totalDaysRemaining}}</ion-col>
      </ion-row>
      <ion-row>
        <ion-col>YEAR END:</ion-col>
        <ion-col>{{summary.yearEnd | formatDate}}</ion-col>
      </ion-row>
    </ion-card>

    <ion-card color="primary">
      <ion-card-title text-center>Holidays Booked</ion-card-title>
    </ion-card>

    <ion-list v-for="holiday in holidays" :key="holiday.id" >
      <ion-card color="primary">
        <ion-row>
          <ion-col>
            <ion-label><b>Details:</b></ion-label>
            <ion-label><b>Holiday Start:</b></ion-label>
            <ion-label><b>Holiday End:</b></ion-label>
            <ion-label><b>Days:</b></ion-label>
          </ion-col>
          <ion-col>
            <ion-label>{{holiday.holName}}</ion-label>
            <ion-label>{{holiday.holStart | formatDate}}</ion-label>
            <ion-label>{{holiday.holEnd | formatDate}}</ion-label>
            <ion-label>{{holiday.daysBooked}}</ion-label>
          </ion-col>
          <ion-col text-right>
            <ion-label></ion-label> 
            <ion-label></ion-label>
            <ion-label></ion-label>
            <ion-label></ion-label>
            <ion-label></ion-label>
            <ion-icon size="large" @click="handleSelect(holiday)" name="create"></ion-icon>
          </ion-col>
          <ion-col text-center> 
            <ion-label></ion-label> 
            <ion-label></ion-label>
            <ion-label></ion-label>
            <ion-label></ion-label>
            <ion-label></ion-label>
            <ion-icon size="large" @click="showDialogAlert(holiday)" name="trash"></ion-icon>
          </ion-col>
        </ion-row>
      </ion-card>      
    </ion-list>
  </ion-content>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Holidays",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      holidays: state => state.holidays
    }),
    summary() {
      return this.$store.getters.calcSummary;
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
