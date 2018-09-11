import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import router from "./router";

const vuexPersist = new VuexPersist({
  key: "holiday-app",
  storage: localStorage
});

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    settings: {
      company: "",
      name: "",
      daysHol: 0,
      bankHols: 0,
      yearStart: "",
      yearEnd: "",
      mon: true,
      tue: true,
      wed: true,
      thu: true,
      fri: true,
      sat: false,
      sun: false
    },
    holiday: {
      holName: "",
      holStart: "",
      holEnd: "",
      daysBooked: 1,
      details: ""
    },
    holidays: [],
    errors: {},
    daysTaken: 0,
    daysRemaining: 0,
    headerTitle: "Holiday App"
  },
  mutations: {
    setSettings(state, settings) {
      state.settings = settings;
    },
    setHoliday(state, holiday) {
      state.holidays.push(holiday);
    },
    delHoliday(state, id) {
      state.holidays.splice(id, 1);
    }
  },
  actions: {
    saveSettings({ commit }, settings) {
      commit("setSettings", settings);
      router.push({ path: "holidays" });
    },
    saveHoliday({ commit }, holiday) {
      commit("setHoliday", holiday);
      router.push({ path: "holidays" });
    },
    deleteHoliday({ commit }, id) {
      console.log("delete run");
      commit("delHoliday", id);
    }
  }
});
