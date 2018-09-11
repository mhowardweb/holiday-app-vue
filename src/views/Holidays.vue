<template>
        <ion-content>
          <ion-card color="light" padding>
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
              <ion-label>{{summary.settings.yearEnd}}</ion-label>
            </ion-item>

            <ion-item padding-top>
              <ion-searchbar animated="true" show-cancel-button debounce="500" />
            </ion-item>
          </ion-card>

          <ion-card>
            <ion-grid>
              <ion-row>
                <ion-col>Start</ion-col>
                <ion-col>End</ion-col>
                <ion-col>Details</ion-col>
                <ion-col></ion-col>
              </ion-row>

              <ion-row v-for="holiday in holidays" :key="holiday.id">
                <ion-col>{{holiday.holStart}}</ion-col>
                <ion-col>{{holiday.holEnd}}</ion-col>
                <ion-col>{{holiday.holName}}</ion-col>
                <ion-col>
                  <ion-button @click="handleDelete(holiday.id)" size="small" fill="clear" >
                    <ion-icon color="danger" name="trash"></ion-icon>
                  </ion-button>
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
  modules: {
    ...mapActions({
      handleDelete: "deleteHoliday"
    })
  }
};
</script>
