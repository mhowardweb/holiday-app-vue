import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import uuid from "uuid/v4";
import router from "./router";
import * as types from "./mutations";

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
      id: "",
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
    [types.SAVE_SETTINGS]: (state, settings) => {
      state.settings = settings;
    },
    [types.ADD_HOLIDAY]: (state, holiday) => {
      state.holidays.push(holiday);
    },
    [types.UPDATE_HOLIDAY]: (state, holidays) => {
      state.holidays = holidays;
    },
    [types.DELETE_HOLIDAY]: (state, holidays) => {
      state.holidays = holidays;
    },
    [types.SELECT_HOLIDAY]: (state, id) => {
      state.holiday = id;
    },
    [types.CLEAR_FORM]: (state, holiday) => {
      state.holiday = holiday;
    }
  },
  actions: {
    saveSettings({ commit }, settings) {
      commit(types.SAVE_SETTINGS, settings);
      router.replace({ path: "holidays" });
    },
    addHoliday({ commit }, holiday) {
      const setId = uuid();
      holiday = { ...holiday, id: setId };
      commit(types.ADD_HOLIDAY, holiday);
      this.clearForm;
      router.replace({ path: "holidays" });
    },
    deleteHoliday({ state, commit }, holiday) {
      const oldHols = state.holidays;
      const holidays = oldHols.filter(hols => hols.id !== holiday.id);
      commit(types.DELETE_HOLIDAY, holidays);
    },
    clearForm({ commit }) {
      const holiday = {
        holName: "",
        holStart: "",
        holEnd: "",
        daysBooked: 1,
        details: ""
      };
      commit(types.CLEAR_FORM, holiday);
    },
    selectHoliday({ commit }, id) {
      commit(types.SELECT_HOLIDAY, id);

      router.replace({ path: "edit" });
    },
    updateHoliday({ state, commit }, holiday) {
      const oldHols = state.holidays;
      let holidays = oldHols.filter(hols => hols.id !== holiday.id);
      holidays = { ...holidays, holiday };
      commit(types.UPDATE_HOLIDAY, holidays);
      router.replace({ path: "holidays" });
    }
  }
});
