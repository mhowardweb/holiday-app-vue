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
            <ion-label class="error" v-if="!$v.holiday.holName.minLength">Name must have at least {{$v.holiday.holName.$params.minLength.min}} characters.</ion-label>
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
              <ion-input disabled text-end :value="holiday.daysBooked" ref="daysBooked" name='daysBooked' type='number' inputmode='number' />
            </ion-item>
          </ion-card-content>

          <ion-card-content>
            <ion-item>
              <ion-label>Details:</ion-label>
              <ion-input text-end :value="holiday.details" ref="details" name='details' type='text' inputmode='text' @input="updateDetails" />
            </ion-item>
            <ion-label class="error" v-if="!$v.holiday.details.minLength">Details must have at least {{$v.holiday.details.$params.minLength.min}} characters.</ion-label>
          </ion-card-content>
                             
          <ion-card-content>
            <ion-button :disabled="$v.$invalid" expand="full" type="submit"  size="default" color="primary">Update Holiday</ion-button>
          </ion-card-content>
       </ion-card>
    </form> 
  </ion-content >
</template>
  
        
<script>
import { mapState, mapActions } from "vuex";
import calcDaysHol from "../helpers/calcDaysHol.js";
import moment from "moment";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "Edit",
  validations: {
    holiday: {
      holName: { required, minLength: minLength(4) },
      details: { required, minLength: minLength(4) },
      holStart: { required },
      holEnd: { required }
    }
  },
  computed: {
    ...mapState({
      holiday: state => state.holiday,
      labels: state => state
    })
  },
  methods: {
    ...mapActions({
      handleEdit: "updateHoliday"
    }),
    updateHolName() {
      this.holiday.holName = this.$refs.holName.value;
      this.$v.holiday.holName.$touch();
    },

    updateDetails() {
      this.holiday.details = this.$refs.details.value;
      this.$v.holiday.details.$touch();
    },
    updateHolStart() {
      this.$v.holiday.holStart.$touch();
      const day = event.detail.value.day.value || 1;
      const month = event.detail.value.month.value || 1;
      const year = event.detail.value.year.value || 2018;

      const theDate = moment()
        .year(year)
        .month(month - 1)
        .date(day)
        .toISOString();
      this.holiday.holStart = theDate;
    },
    updateHolEnd() {
      this.$v.holiday.holEnd.$touch();
      const day = event.detail.value.day.value;
      const month = event.detail.value.month.value;
      const year = event.detail.value.year.value;

      const theDate = moment()
        .year(year)
        .month(month - 1)
        .date(day)
        .toISOString();
      this.holiday.holEnd = theDate;
      this.holiday.daysBooked = calcDaysHol(
        new Date(this.holiday.holStart),
        new Date(this.holiday.holEnd),
        this.labels.workDays
      );
    }
  }
};
</script>
