import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import uuid from "uuid/v4";
import router from "../router";
import * as types from "./types";

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
      yearStart: "2018-03-01T00:00:00",
      yearEnd: "2019-03-01T00:00:00",
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
      daysBooked: 0,
      details: ""
    },
    holidays: [],
    workDays: [],
    selectedRoute: "settings"
  },
  mutations: {
    [types.SAVE_SETTINGS]: (state, { settings, workDays }) => {
      state.settings = settings;
      state.workDays = workDays;
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
    },
    [types.SET_ROUTE]: (state, route) => {
      state.selectedRoute = route;
    }
  },

  actions: {
    saveSettings({ commit }, settings) {
      let workDays = [];
      if (settings.sun) {
        workDays.push(0);
      }

      if (settings.mon) {
        workDays.push(1);
      }

      if (settings.tue) {
        workDays.push(2);
      }

      if (settings.wed) {
        workDays.push(3);
      }

      if (settings.thu) {
        workDays.push(4);
      }

      if (settings.fri) {
        workDays.push(5);
      }

      if (settings.sat) {
        workDays.push(6);
      }

      commit(types.SAVE_SETTINGS, { settings, workDays });

      router.replace({ path: "holidays" });
    },
    setRoute({ commit }, route) {
      commit(types.SET_ROUTE, route);
      router.replace({ path: route });
    },
    addHoliday({ commit }, holiday) {
      const setId = uuid();
      holiday = { ...holiday, id: setId };

      commit(types.ADD_HOLIDAY, holiday);
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
        daysBooked: 0,
        details: ""
      };
      commit(types.CLEAR_FORM, holiday);
    },
    selectHoliday({ commit }, id) {
      commit(types.SELECT_HOLIDAY, id);

      router.replace({ path: "edit" });
    },
    /**
     *
     * copies holidays array, finds holiday by id and overwrites it.
     * @param {*} holiday
     */
    updateHoliday({ state, commit }, holiday) {
      const holidays = state.holidays;
      const index = holidays.findIndex(obj => obj.id == holiday.id);
      holidays[index] = holiday;
      commit(types.UPDATE_HOLIDAY, holidays);
      router.replace({ path: "holidays" });
    }
  },
  getters: {
    calcSummary: state => {
      let totals = 0;
      state.holidays.forEach(holiday => {
        totals = totals + holiday.daysBooked;
      });
      const totalDaysHol =
        parseInt(state.settings.daysHol) + parseInt(state.settings.bankHols);
      const totalDaysUsed = totals;
      const totalDaysRemaining = totalDaysHol - totalDaysUsed;
      const yearEnd = state.settings.yearEnd;
      const name = state.settings.name;
      return { totalDaysHol, totalDaysRemaining, totalDaysUsed, yearEnd, name };
    }
  }
});
