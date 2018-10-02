<template>
  <ion-content>
    <form @submit.prevent="handleEdit(holiday)">
      <ion-card padding>
        <ion-card-title text-center>Edit Holiday</ion-card-title>
          <ion-card-content>
            <ion-item>
              <ion-label>Holiday Name:</ion-label>
              <ion-input text-end :value="holiday.holName" ref="holName" name='holName' type='text' inputmode='text' @input="updateHolName" />
            </ion-item>
          </ion-card-content>

          <ion-card-content>
            <ion-item>
              <ion-label>Holiday Start:</ion-label>
              <ion-datetime
                name='holStart'
                ref="holStart"
                display-format='DD/MM/YYYY'
                picker-format='DD MM YYYY'
                min='2018'
                max='2020'
                :value='holiday.holStart'
                @ionChange="updateHolStart"
              />
            </ion-item>
          </ion-card-content>

          <ion-card-content>
            <ion-item>
              <ion-label>Holiday End:</ion-label>
              <ion-datetime
                name='holEnd'
                ref="holEnd"
                display-format='DD/MM/YYYY'
                picker-format='DD MM YYYY'
                min='2018'
                max='2020'
                :value='holiday.holEnd'
                @ionChange="updateHolEnd"
              />
            </ion-item>
          </ion-card-content>

          <ion-card-content>
            <ion-item>
              <ion-label>Days Booked:</ion-label>
              <ion-input text-end :value="holiday.daysBooked" ref="daysBooked" name='daysBooked' type='text' inputmode='number' @input="updateDaysBooked" />
            </ion-item>
          </ion-card-content>

          <ion-card-content>
            <ion-item>
              <ion-label>Details:</ion-label>
              <ion-input text-end :value="holiday.details" ref="details" name='details' type='text' inputmode='text' @input="updateDetails" />
            </ion-item>
          </ion-card-content>
                             
          <ion-card-content>
            
              <ion-button expand="full" type="submit"  size="default" color="primary">Update Holiday</ion-button>
            
          </ion-card-content>

      </ion-card>
    </form> 
  </ion-content >
</template>
  
        
<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Edit",
  computed: {
    ...mapState({
      holiday: state => state.holiday
    }),
    ...mapState({
      labels: state => state
    })
  },
  methods: {
    ...mapActions({
      handleEdit: "updateHoliday"
    }),
    updateHolName() {
      this.holiday.holName = this.$refs.holName.value;
    },
    updateDaysBooked() {
      this.holiday.daysBooked = this.$refs.daysBooked.value;
    },
    updateDetails() {
      this.holiday.details = this.$refs.details.value;
    },
    updateHolStart() {
      this.holiday.holStart = this.$refs.holStart.value;
    },
    updateHolEnd() {
      this.holiday.holEnd = this.$refs.holEnd.value;
    }
  }
};
</script>
