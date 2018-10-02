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
              </ion-row>

              <ion-row v-for="holiday in holidays" :key="holiday.id">
                <ion-item-sliding>
                  <ion-item color="primary">
                    <ion-col text-center>{{holiday.holStart | formatDate}}</ion-col>
                    <ion-col text-center>{{holiday.holEnd | formatDate}}</ion-col>
                    <ion-col text-center>{{holiday.daysBooked}}</ion-col>
                    <ion-col text-center>{{holiday.holName}}</ion-col>
                    
                  </ion-item>
                  
                  <ion-item-options side="start">
                    <ion-item-option color="success" @click="handleSelect(holiday)">
                      <ion-icon name="open"></ion-icon> Edit
                    </ion-item-option>
                  </ion-item-options>
                  <ion-item-options>
                    <ion-item-option color="danger" @click="showDialogAlert(holiday)" >
                      <ion-icon name="trash"></ion-icon> Delete
                    </ion-item-option>
                  </ion-item-options>
                </ion-item-sliding>
                <ion-item-divider></ion-item-divider>
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
