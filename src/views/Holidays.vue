<template>
  <ion-content>
    <ion-alert-controller></ion-alert-controller>
    <ion-card color="success" padding>
      <ion-card-title text-center>Summary</ion-card-title>
      <ion-item>
        <ion-label>Days Taken:</ion-label>
        <ion-label>{{summary.daysTaken}}</ion-label>
      </ion-item>

            <ion-item>
              <ion-label>Days Remaining:</ion-label>
              <ion-label>{{summary.daysRemaining}}</ion-label>
            </ion-item>

            <ion-item>
              <ion-label>Year End:</ion-label>
              <ion-label>{{summary.settings.yearEnd | formatDate}}</ion-label>
              
            </ion-item>
    
          </ion-card>

          <ion-card>
            <ion-card-title text-center>Holidays Booked</ion-card-title>
            <ion-grid>
              <ion-row>
                <ion-col text-center>Start</ion-col>
                <ion-col text-center>End</ion-col>
                <ion-col text-center>Days</ion-col>
                <ion-col text-center>Details</ion-col>
                <ion-col></ion-col>
              </ion-row>

              <ion-row v-for="holiday in holidays" :key="holiday.id" >
                
                    <ion-col text-center>{{holiday.holStart | formatDate}}</ion-col>
                    <ion-col text-center>{{holiday.holEnd | formatDate}}</ion-col>
                    <ion-col text-center>{{holiday.daysBooked}}</ion-col>
                    <ion-col text-center>{{holiday.holName}}</ion-col>
                    <ion-col >
                      <ion-icon color="primary" size="small" @click="handleSelect(holiday)" name="create"></ion-icon>
                      <ion-icon color="danger" size="small" @click="showDialogAlert(holiday)" name="trash"></ion-icon>
                      
                      </ion-col>
                  
              </ion-row>
            </ion-grid>
          </ion-card>
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
      summary: state => state
    }),
    ...mapState({
      holidays: state => state.holidays
    })
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
