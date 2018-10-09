<template>
  <ion-content>
    <form @submit.prevent="handleAdd(holiday)">
      <ion-list padding>
        <ion-list-header text-center class="banner">Add Holiday</ion-list-header>

          <ion-grid class="igrid">
            <ion-row>
              <ion-col>
                <ion-label class="ilabel">Holiday Name</ion-label>
                <ion-label class="error" v-if="!$v.holiday.holName.minLength">Name must have at least {{$v.holiday.holName.$params.minLength.min}} characters.</ion-label>
              </ion-col>
            </ion-row>
            <ion-row class="ibox">
              <ion-col>
                <ion-input :value="holiday.holName" ref="holName" name='holName' type='text' inputmode='text' @input="updateHolName" />
              </ion-col>
            </ion-row>
          </ion-grid>

          <ion-grid class="igrid">
            <ion-row>
              <ion-col>
                <ion-label class="ilabel">Holiday Start</ion-label>
              </ion-col>
            </ion-row>
            <ion-row class="ibox">
              <ion-col>
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
              </ion-col>
            </ion-row>
          </ion-grid>

           <ion-grid class="igrid">
            <ion-row>
              <ion-col>
                <ion-label class="ilabel">Holiday End</ion-label>
              </ion-col>
            </ion-row>
            <ion-row class="ibox">
              <ion-col>
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
              </ion-col>
            </ion-row>
          </ion-grid>
        
          <ion-item>
            <ion-label class="ilabel">Days Booked:</ion-label>
            <ion-label class="ilabel" text-end>{{holiday.daysBooked}}</ion-label>
          </ion-item>

          <ion-item >
            <ion-label class="ilabel" >Days to Book:</ion-label>
            <ion-label class="ilabel" text-end>{{summary.totalDaysRemaining - holiday.daysBooked}}</ion-label>
          </ion-item>
          <ion-label class="error" v-if="summary.totalDaysRemaining - holiday.daysBooked <= 0">YOU HAVE NO HOLIDAY LEFT TO BOOK !!</ion-label>

          <ion-grid class="igrid">
            <ion-row>
              <ion-col>
                <ion-label class="ilabel">Details</ion-label>
                <ion-label class="error" v-if="!$v.holiday.details.minLength">Details must have at least {{$v.holiday.details.$params.minLength.min}} characters.</ion-label>
              </ion-col>
            </ion-row>
            <ion-row class="ibox">
              <ion-col>
                <ion-input :value="holiday.details" ref="details" name='details' type='text' inputmode='text' @input="updateDetails" />
              </ion-col>
            </ion-row>
          </ion-grid>

                
          <ion-card-content>
            <ion-button class="ibutton" expand="full" :disabled="$v.$invalid" type="submit">Save Holiday</ion-button>
          </ion-card-content>
        </ion-list>
      </form> 
  </ion-content >
</template>
        
<script>
import { mapState, mapActions } from "vuex";
import calcDaysHol from "../helpers/calcDaysHol.js";
import moment from "moment";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "Add",
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
    }),
    summary() {
      return this.$store.getters.calcSummary;
    }
  },
  methods: {
    ...mapActions({
      handleAdd: "addHoliday"
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
      this.holiday.daysBooked = calcDaysHol(
        new Date(this.holiday.holStart),
        new Date(this.holiday.holEnd),
        this.labels.workDays
      );
    },
    updateHolEnd() {
      const day = event.detail.value.day.value || 1;
      const month = event.detail.value.month.value || 1;
      const year = event.detail.value.year.value || 2018;
      this.$v.holiday.holEnd.$touch();
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

<style scoped>
.banner {
  background: rgba(31, 32, 65, 0.5);
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 24px;
  color: #ffffff;
}

.ibutton {
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 25px;
  --background: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);
  border-radius: 22px;
  --color: #ffffff;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 14px;
  text-transform: uppercase;
}

.grid {
  width: 320px;
  height: 64.44px;
}
.ibox {
  width: 360px;
  height: 44px;
  border: 1px solid rgba(31, 32, 65, 0.25);
  box-sizing: border-box;
  border-radius: 4px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  font-size: 18px;
  color: rgba(31, 32, 65, 0.75);
}

.ilabel {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 12px;
  text-transform: uppercase;
  color: #1f2041;
}
</style>
