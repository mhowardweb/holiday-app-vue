<template>
  <ion-content>
    <ion-grid class="pricingplan">
      <ion-row>
        <ion-col>
           <ion-text class="name">{{summary.name}}'s</ion-text>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-text class="title">Holiday Manager</ion-text>
        </ion-col>
      </ion-row>
      <ion-row class="group">
        <ion-col class="htitle">Total Days</ion-col>
        <ion-col class="hnumber">{{summary.totalDaysHol}}</ion-col>  
      </ion-row>
      <ion-row class="line"></ion-row> 
      <ion-row class="group">
        <ion-col class="htitle">Days Used</ion-col>
        <ion-col class="hnumber">{{summary.totalDaysUsed}}</ion-col>  
      </ion-row>
      <ion-row class="line"></ion-row> 
      <ion-row class="group">
        <ion-col class="htitle">Days Remaining</ion-col>
        <ion-col class="hnumber">{{summary.totalDaysRemaining}}</ion-col>  
      </ion-row>
      <ion-row class="line"></ion-row> 
      <ion-row class="group">
        <ion-col class="htitle">Use By</ion-col>
        <ion-col class="hnumber">{{summary.yearEnd | formatDate}}</ion-col>  
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-label class="button">
          <ion-label class="text" @click="goSummary">HOLIDAY SUMMARY</ion-label>
        </ion-label>
        </ion-col>
        
      </ion-row>
       
    </ion-grid>
    
  </ion-content >
</template>

<script>
export default {
  name: "Home",
  computed: {
    summary() {
      return this.$store.getters.calcSummary;
    }
  },
  methods: {
    goSummary() {
      this.$router.push({ path: "/holidays" });
    }
  }
};
</script>

<style scoped>
.button {
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 25px;
  background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);
  border-radius: 22px;
}

.text {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
}

.pricingplan {
  width: 360px;

  padding-top: 40px;
  padding-bottom: 40px;
  text-align: center;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
  border-radius: 4px;
}

.name {
  font-family: Quicksand;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 42px;
  text-align: center;
  color: #6fcf97;
}

.title {
  padding-bottom: 49px;
  font-family: Quicksand;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 19px;
  text-align: center;
  color: #1f2041;
}

.group {
  padding-top: 19px;
  padding-bottom: 19px;
  text-align: left;
  height: 40px;
}

.htitle {
  font-family: Montserrat;
  margin-left: 20px;
  text-align: left;
  font-style: normal;
  font-weight: bold;
  line-height: normal;
  font-size: 14px;
  color: rgba(31, 32, 65, 0.75);
}

.hnumber {
  margin-right: 20px;
  font-family: Montserrat;
  text-align: right;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: 14px;
  color: rgba(31, 32, 65, 0.5);
}

.line {
  margin-top: 20px;
  margin-left: 25px;
  margin-right: 25px;
  height: 1px;
  background: rgba(31, 32, 65, 0.1);
}
</style>
