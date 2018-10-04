<template>
  <ion-content>
    <form @submit.prevent='handleSave(settings)'>
      <ion-list padding>
        <ion-list-header color="warning">Settings</ion-list-header>
          
          <ion-item>
            <ion-label>Company Name:</ion-label>
            <ion-input text-end :value="settings.company" ref="company" name='company' type='text' inputmode='text' @input="updateCompany" />
          </ion-item>
          <ion-label class="error" v-if="!$v.settings.company.minLength">Company must have at least {{$v.settings.company.$params.minLength.min}} characters.</ion-label>
          
          <ion-item>
            <ion-label>Your Name:</ion-label>
            <ion-input text-end :value="settings.name" ref="name" name='name' type='text' inputmode='text' @input="updateName" />
          </ion-item>
          <ion-label class="error" v-if="!$v.settings.name.minLength" >Name must have at least {{$v.settings.name.$params.minLength.min}} characters.</ion-label>
                   
          <ion-item>
            <ion-label>Days Holiday:</ion-label>
            <ion-input text-end :value="settings.daysHol" ref="daysHol" name='daysHol' type='number' inputmode='number' @input="updateDaysHol" />
          </ion-item>
          <ion-label class="error" v-if="!$v.settings.daysHol.between" >Must be between 10 and 40.</ion-label>
          
          <ion-item>
            <ion-label>Bank Holidays:</ion-label>
            <ion-input text-end :value="settings.bankHols" ref="bankHols" name='bankHols' type='number' inputmode='number' @input="updateBankHols" />
          </ion-item>
          <ion-label class="error" v-if="!$v.settings.bankHols.between" >Must be between 0 and 8.</ion-label>
         
          <ion-item>
           <ion-label>Holiday Year Start:</ion-label>
           <ion-datetime
             name='yearStart'
             ref="yearStart"
             display-format='DD/MM/YYYY'
             picker-format='DD MMMM YYYY'
             min='2018'
             max='2020'
             :value='settings.yearStart'
             @ionChange="updateYearStart"
            />
          </ion-item>
          
          <ion-item>
           <ion-label>Holiday Year End:</ion-label>
           <ion-datetime
             name='yearEnd'
             ref="yearEnd"
             display-format='DD/MM/YYYY'
             picker-format='DD MMMM YYYY'
             min='2018'
             max='2020'
             :value='settings.yearEnd'
             @ionChange="updateYearEnd"
            />
          </ion-item>
                    
          <ion-list padding>
            <ion-list-header color="tertiary">Normal Working Days</ion-list-header>
            <ion-item>
              <ion-label>Monday</ion-label>
              <ion-checkbox :checked=settings.mon name="mon" color="warning" @click="updateMon"></ion-checkbox>
            </ion-item>

            <ion-item>
              <ion-label>Tuesday</ion-label>
              <ion-checkbox :checked=settings.tue name="tue" color="success" @click="updateTue"></ion-checkbox>
            </ion-item>

            <ion-item>
              <ion-label>Wednesday</ion-label>
              <ion-checkbox :checked=settings.wed name="wed" color="danger" @click="updateWed"></ion-checkbox>
            </ion-item>

            <ion-item>
              <ion-label>Thursday</ion-label>
              <ion-checkbox :checked=settings.thu name="thu" color="warning" @click="updateThu"></ion-checkbox>
            </ion-item>

            <ion-item>
              <ion-label>Friday</ion-label>
              <ion-checkbox :checked=settings.fri name="fri" color="success" @click="updateFri"></ion-checkbox>
            </ion-item>

            <ion-item>
              <ion-label>Saturday</ion-label>
              <ion-checkbox :checked=settings.sat name="sat" color="danger" @click="updateSat"></ion-checkbox>
            </ion-item>

            <ion-item>
              <ion-label>Sunday</ion-label>
              <ion-checkbox :checked=settings.sun name="sun" color="warning" @click="updateSun"></ion-checkbox>
            </ion-item>
          </ion-list>
          
          <ion-card-content>
            <ion-button :disabled="$v.$invalid" expand="full" type="submit" color="warning">Save Settings</ion-button>
          </ion-card-content>
        </ion-list>
      </form>         
    </ion-content>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { required, minLength, between } from "vuelidate/lib/validators";
import moment from "moment";

export default {
  name: "Settings",
  computed: {
    ...mapState({
      settings: state => state.settings
    })
  },
  validations: {
    settings: {
      company: { required, minLength: minLength(4) },
      name: { required, minLength: minLength(4) },
      daysHol: { required, between: between(10, 40) },
      bankHols: { required, between: between(0, 8) },
      yearStart: { required },
      yearEnd: { required }
    }
  },
  methods: {
    ...mapActions({
      handleSave: "saveSettings"
    }),
    updateCompany() {
      this.settings.company = this.$refs.company.value;
      this.$v.settings.company.$touch();
    },
    updateName() {
      this.settings.name = this.$refs.name.value;
      this.$v.settings.name.$touch();
    },
    updateDaysHol() {
      this.settings.daysHol = this.$refs.daysHol.value;
      this.$v.settings.daysHol.$touch();
    },
    updateBankHols() {
      this.settings.bankHols = this.$refs.bankHols.value;
      this.$v.settings.bankHols.$touch();
    },
    updateYearStart() {
      this.$v.settings.yearStart.$touch();
      const day = event.detail.value.day.value || 1;
      const month = event.detail.value.month.value || 1;
      const year = event.detail.value.year.value || 2018;

      const theDate = moment()
        .year(year)
        .month(month - 1)
        .date(day)
        .toISOString();
      this.settings.yearStart = theDate;
    },
    updateYearEnd() {
      this.$v.settings.yearEnd.$touch();
      const day = event.detail.value.day.value || 1;
      const month = event.detail.value.month.value || 1;
      const year = event.detail.value.year.value || 2018;

      const theDate = moment()
        .year(year)
        .month(month - 1)
        .date(day)
        .toISOString();
      this.settings.yearEnd = theDate;
    },
    updateMon() {
      this.settings.mon = !this.settings.mon;
    },
    updateTue() {
      this.settings.tue = !this.settings.tue;
    },
    updateWed() {
      this.settings.wed = !this.settings.wed;
    },
    updateThu() {
      this.settings.thu = !this.settings.thu;
    },
    updateFri() {
      this.settings.fri = !this.settings.fri;
    },
    updateSat() {
      this.settings.sat = !this.settings.sat;
    },
    updateSun() {
      this.settings.sun = !this.settings.sun;
    }
  }
};
</script>
