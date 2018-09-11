<template>
  <ion-content>
    <form @submit.prevent='handleSubmit(settings)'>
      <ion-card padding>
        <ion-card-title>Settings</ion-card-title>
          <ion-card-content>
            <ion-item>
              <ion-label>Company</ion-label>
              <ion-input v-validate="{required: true, min: 4 }" :value="settings.company" ref="company" name='company' type='text' inputmode='text' @input="updateCompany" />
            </ion-item>
            <ion-text color="danger" v-show="errors.has('company')">{{ errors.first('company') }}</ion-text>
          </ion-card-content>

          <ion-card-content>
            <ion-item>
              <ion-label>Name</ion-label>
              <ion-input v-validate="{required: true, min: 4}" :value="settings.name" ref="name" name='name' type='text' inputmode='text' @input="updateName" />
            </ion-item>
            <ion-text color="danger" v-show="errors.has('name')">{{ errors.first('name') }}</ion-text>
          </ion-card-content>

          <ion-card-content>
            <ion-item>
              <ion-label>Days Holiday</ion-label>
              <ion-input v-validate="{required: true, min: 10, max: 40}" :value="settings.daysHol" ref="daysHol" name='daysHol' type='text' inputmode='number' @input="updateDaysHol" />
            </ion-item>
            <ion-text color="danger" v-show="errors.has('daysHol')">{{ errors.first('daysHol') }}</ion-text>
          </ion-card-content>

          <ion-card-content>
            <ion-item>
              <ion-label>Bank Holidays</ion-label>
              <ion-input :value="settings.bankHols" ref="bankHols" name='bankHols' type='text' inputmode='number' @input="updateBankHols" />
            </ion-item>
          </ion-card-content>
              
          <ion-card-content>
            <ion-item>
              <ion-label>Holiday Year Start</ion-label>
              <ion-datetime
                name='yearStart'
                ref="yearStart"
                display-format='MM/YYYY'
                picker-format='MMMM YYYY'
                min='2018'
                max='2020'
                :value='settings.yearStart'
                @ionChange="updateYearStart"
              />
            </ion-item>
          </ion-card-content>

          <ion-card-content>
            <ion-item>
              <ion-label>Holiday Year End</ion-label>
              <ion-datetime
                name='yearEnd'
                ref="yearEnd"
                display-format='MM/YYYY'
                picker-format='MMMM YYYY'
                min='2018'
                max='2020'
                :value='settings.yearEnd'
                @ionChange="updateYearEnd"
              />
            </ion-item>
          </ion-card-content>

          <ion-card-content>
            <ion-list>
            <ion-item>
              <ion-label>Monday</ion-label>
              <ion-checkbox :checked=settings.mon name="mon" color="danger" @click="updateMon"></ion-checkbox>
            </ion-item>

            <ion-item>
              <ion-label>Tuesday</ion-label>
              <ion-checkbox :checked=settings.tue name="tue" color="danger" @click="updateTue"></ion-checkbox>
            </ion-item>

            <ion-item>
              <ion-label>Wednesday</ion-label>
              <ion-checkbox :checked=settings.wed name="wed" color="danger" @click="updateWed"></ion-checkbox>
            </ion-item>

            <ion-item>
              <ion-label>Thursday</ion-label>
              <ion-checkbox :checked=settings.thu name="thu" color="danger" @click="updateThu"></ion-checkbox>
            </ion-item>

            <ion-item>
              <ion-label>Friday</ion-label>
              <ion-checkbox :checked=settings.fri name="fri" color="danger" @click="updateFri"></ion-checkbox>
            </ion-item>

            <ion-item>
              <ion-label>Saturday</ion-label>
              <ion-checkbox :checked=settings.sat name="sat" color="danger" @click="updateSat"></ion-checkbox>
            </ion-item>

            <ion-item>
              <ion-label>Sunday</ion-label>
              <ion-checkbox :checked=settings.sun name="sun" color="danger" @click="updateSun"></ion-checkbox>
            </ion-item>
            </ion-list>
          </ion-card-content>

          <ion-card-content>
            <ion-item>
              <ion-button type="submit"  size="default" color="primary">Save Settings</ion-button>
            </ion-item>
          </ion-card-content>
              
        </ion-card>
      </form>         
    </ion-content>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Settings",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      settings: state => state.settings
    })
  },
  methods: {
    ...mapActions({
      handleSubmit: "saveSettings"
    }),
    updateCompany() {
      this.settings.company = this.$refs.company.value;
    },
    updateName() {
      this.settings.name = this.$refs.name.value;
    },
    updateDaysHol() {
      this.settings.daysHol = this.$refs.daysHol.value;
    },
    updateBankHols() {
      this.settings.bankHols = this.$refs.bankHols.value;
    },
    updateYearStart() {
      this.settings.yearStart = this.$refs.yearStart.innerText;
      console.log("clicked", this.$refs);
    },
    updateYearEnd() {
      this.settings.yearEnd = this.$refs.yearEnd.innerText;
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
