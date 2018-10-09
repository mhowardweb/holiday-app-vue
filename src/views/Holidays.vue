<template>
  <ion-content>
    <ion-alert-controller></ion-alert-controller>
      <ion-grid class="box">
        <ion-row>
          <ion-col>
            <ion-label class="title">Summary for {{summary.name}}</ion-label>
          </ion-col>
        </ion-row>
        
        <ion-row>
          <ion-col class="htitle">Total  Days</ion-col>
          <ion-col class="hnumber">{{summary.totalDaysHol}}</ion-col>
        </ion-row>

        <ion-row>
          <ion-col class="htitle">Days Used</ion-col>
          <ion-col class="hnumber">{{summary.totalDaysUsed}}</ion-col>
        </ion-row>

        <ion-row>
          <ion-col class="htitle">Days Remaining</ion-col>
          <ion-col class="hnumber">{{summary.totalDaysRemaining}}</ion-col>
        </ion-row>

        <ion-row>
          <ion-col class="htitle">Use By</ion-col>
          <ion-col class="hnumber">{{summary.yearEnd | formatDate}}</ion-col>
        </ion-row>
      </ion-grid>
    
    <ion-grid class="listbox" v-for="holiday in holidays" :key="holiday.id">  
      <ion-row>
        <ion-col class="dtitle">{{holiday.holName}}</ion-col>
      </ion-row>

      <ion-row>
        <ion-col class="daybox">{{holiday.daysBooked}} Days</ion-col>
      </ion-row>
      <ion-row class="line"></ion-row>
      <ion-row>
        <ion-col><i class="icon">event</i></ion-col>
        <ion-col class="date">{{holiday.holStart | formatDate}}</ion-col>
        <ion-col><i class="icon">event</i></ion-col>
        <ion-col class="date" style="">{{holiday.holEnd | formatDate}}</ion-col>
      </ion-row>
      <ion-row>
        <ion-col style="margin-top: 40px">
          <i class="circle" style="margin-left: 25px" @click="handleSelect(holiday)">create</i>
          <i class="circle" style="margin-left: 10px" @click="showDialogAlert(holiday)">delete</i>
          </ion-col>
        
      </ion-row>  
        
        
    </ion-grid>
  </ion-content>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Holidays",
  data() {
    return {
      param: "holStart"
    };
  },
  computed: {
    // ...mapState({
    //   holidays: state => state.holidays
    // }),
    summary() {
      return this.$store.getters.calcSummary;
    },
    holidays() {
      // Get holidays array and sort by holStart
      const data = this.$store.state.holidays;
      return data.sort((a, b) => {
        return a[this.param] > b[this.param];
      });
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

<style scoped>
.box {
  margin-top: 20px;
  width: 360px;
  height: 202px;
  background: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);
  border-radius: 4px;
}

.date {
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  line-height: 24px;
  font-size: 14px;
  color: rgba(31, 32, 65, 0.5);
  text-align: left;
}

.listbox {
  margin-top: 20px;
  width: 360px;
  height: 261px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
  border-radius: 4px;
}

.daybox {
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 19px;
  text-align: center;

  color: #1f2041;
}

.circle {
  padding: 4px;
  width: 44px;
  height: 44px;
  border-radius: 24px;
  border: 2px solid #bc9cff;
  color: #bc9cff;
  box-sizing: border-box;
  font-family: Material Icons;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  text-align: center;
}

.icon {
  padding: 5px;
  margin-left: 25px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 2px solid #6fcf97;
  box-sizing: border-box;
  font-family: Material Icons;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  color: #6fcf97;
}

.title {
  font-family: Quicksand;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 19px;
  color: #ffffff;
}

.btitle {
  width: 360px;
  height: 29px;
  font-family: Quicksand;
  text-align: center;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 19px;
  color: #ffffff;
  background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);
}

.dtitle {
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 42px;
  text-align: center;

  color: #bc9cff;
}

.htitle {
  font-family: Montserrat;
  margin-left: 20px;
  text-align: left;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 16px;
  color: #ffffff;
}

.hnumber {
  margin-right: 20px;
  font-family: Montserrat;
  text-align: right;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 16px;
  color: #ffffff;
}

.line {
  text-align: center;
  margin-bottom: 20px;
  margin-left: 25px;
  margin-right: 25px;
  height: 2px;
  background: rgba(31, 32, 65, 0.1);
}
</style>
