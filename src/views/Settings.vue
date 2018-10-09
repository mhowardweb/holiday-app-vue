<template>
  <ion-content>
    <form @submit.prevent='handleSave(settings)'>
      <ion-list padding>
        <ion-list-header class="banner">Settings</ion-list-header>
          
          <ion-grid class="igrid">
            <ion-row>
              <ion-col>
                <ion-label class="ilabel">Company Name</ion-label>
                <ion-label class="error" v-if="!$v.settings.company.minLength">Company must have at least {{$v.settings.company.$params.minLength.min}} characters.</ion-label>
              </ion-col>
            </ion-row>
            <ion-row class="ibox">
              <ion-col>
               <ion-input :value="settings.company" ref="company" name='company' type='text' inputmode='text' @input="updateCompany" />
              </ion-col>
            </ion-row>
          </ion-grid>

          <ion-grid class="igrid">
            <ion-row>
              <ion-col>
                <ion-label class="ilabel">Your Name</ion-label>
                <ion-label class="error" v-if="!$v.settings.name.minLength" >Name must have at least {{$v.settings.name.$params.minLength.min}} characters.</ion-label>
              </ion-col>
            </ion-row>
            <ion-row class="ibox">
              <ion-col>
               <ion-input :value="settings.name" ref="name" name='name' type='text' inputmode='text' @input="updateName" />
              </ion-col>
            </ion-row>
          </ion-grid>
          
          <ion-grid class="igrid">
            <ion-row>
              <ion-col>
                <ion-label class="ilabel">Days Holiday</ion-label>
                <ion-label class="error" v-if="!$v.settings.daysHol.between" >Must be between 10 and 40.</ion-label>
              </ion-col>
            </ion-row>
            <ion-row class="ibox">
              <ion-col>
               <ion-input :value="settings.daysHol" ref="daysHol" name='daysHol' type='number' inputmode='number' @input="updateDaysHol" />
              </ion-col>
            </ion-row>
          </ion-grid>

          <ion-grid class="igrid">
            <ion-row>
              <ion-col>
                <ion-label class="ilabel">Bank Holidays</ion-label>
                <ion-label class="error" v-if="!$v.settings.bankHols.between" >Must be between 0 and 8.</ion-label>
              </ion-col>
            </ion-row>
            <ion-row class="ibox">
              <ion-col>
               <ion-input :value="settings.bankHols" ref="bankHols" name='bankHols' type='number' inputmode='number' @input="updateBankHols" />
              </ion-col>
            </ion-row>
          </ion-grid>
                   
          <ion-grid class="igrid">
            <ion-row>
              <ion-col>
                <ion-label class="ilabel">Holiday Year Start</ion-label>
              </ion-col>
            </ion-row>
            <ion-row class="ibox">
              <ion-col>
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
              </ion-col>
            </ion-row>
          </ion-grid>        
          
          <ion-grid class="igrid">
            <ion-row>
              <ion-col>
                <ion-label class="ilabel">Holiday Year End</ion-label>
              </ion-col>
            </ion-row>
            <ion-row class="ibox">
              <ion-col>
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
              </ion-col>
            </ion-row>
          </ion-grid>        
         
          
                    
          <ion-list padding>
            <ion-list-header class="banner">Normal Working Days</ion-list-header>
            <ion-item>
              <ion-label class="ilabel">Monday</ion-label>
              <ion-checkbox class="itick" :checked=settings.mon name="mon" @click="updateMon"></ion-checkbox>
            </ion-item>

            <ion-item>
              <ion-label class="ilabel">Tuesday</ion-label>
              <ion-checkbox class="itick" :checked=settings.tue name="tue" color="success" @click="updateTue"></ion-checkbox>
            </ion-item>

            <ion-item>
              <ion-label class="ilabel">Wednesday</ion-label>
              <ion-checkbox class="itick" :checked=settings.wed name="wed" color="danger" @click="updateWed"></ion-checkbox>
            </ion-item>

            <ion-item>
              <ion-label class="ilabel">Thursday</ion-label>
              <ion-checkbox class="itick" :checked=settings.thu name="thu" color="warning" @click="updateThu"></ion-checkbox>
            </ion-item>

            <ion-item>
              <ion-label class="ilabel">Friday</ion-label>
              <ion-checkbox class="itick" :checked=settings.fri name="fri" color="success" @click="updateFri"></ion-checkbox>
            </ion-item>

            <ion-item>
              <ion-label class="ilabel">Saturday</ion-label>
              <ion-checkbox class="itick" :checked=settings.sat name="sat" color="danger" @click="updateSat"></ion-checkbox>
            </ion-item>

            <ion-item>
              <ion-label class="ilabel">Sunday</ion-label>
              <ion-checkbox class="itick" :checked=settings.sun name="sun" color="warning" @click="updateSun"></ion-checkbox>
            </ion-item>
          </ion-list>
          
          <ion-card-content>
            <ion-button class="ibutton" :disabled="$v.$invalid" expand="full" type="submit">Save Settings</ion-button>
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

<style scoped>
.itick {
  --background-checked: #ffffff;
  /* Primary Color */
  --border-color: #bc9cff;
  --border-color-checked: #bc9cff;
  --checkmark-color: #bc9cff;
  box-sizing: border-box;
  border-radius: 4px;
}
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
  --background-activated: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);
  border-radius: 22px;
  --color: #ffffff;
  --color-activated: #ffffff;
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
