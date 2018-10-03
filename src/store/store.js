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
    daysTaken: 0,
    daysRemaining: 0
  },
  mutations: {
    [types.SAVE_SETTINGS]: (state, { settings, workDays }) => {
      state.settings = settings;
      state.workDays = workDays;
      state.daysRemaining =
        parseInt(settings.daysHol) + parseInt(settings.bankHols) || 0;
    },
    [types.ADD_HOLIDAY]: (state, holiday) => {
      state.holidays.push(holiday);
      state.daysRemaining = state.daysRemaining - holiday.daysBooked;
      state.daysTaken = state.daysTaken + holiday.daysBooked;
    },
    [types.UPDATE_HOLIDAY]: (
      state,
      { holidays, oldDaysTaken, oldDaysRemaining }
    ) => {
      state.holidays = holidays;
      state.daysRemaining = oldDaysRemaining;
      state.daysTaken = oldDaysTaken;
    },
    [types.DELETE_HOLIDAY]: (state, { holidays, removeBooked }) => {
      state.holidays = holidays;
      state.daysRemaining = state.daysRemaining + removeBooked;
      state.daysTaken = state.daysTaken - removeBooked;
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
    addHoliday({ commit }, holiday) {
      const setId = uuid();
      holiday = { ...holiday, id: setId };
      commit(types.ADD_HOLIDAY, holiday);
      this.clearForm;
      router.replace({ path: "holidays" });
    },
    deleteHoliday({ state, commit }, holiday) {
      const oldHols = state.holidays;
      const removeBooked = holiday.daysBooked;
      const holidays = oldHols.filter(hols => hols.id !== holiday.id);
      commit(types.DELETE_HOLIDAY, { holidays, removeBooked });
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
    /**
     *
     * copies holidays array, finds holiday by id and overwrites it.
     * @param {*} holiday
     */
    updateHoliday({ state, commit }, holiday) {
      const newHols = state.holidays;
      const index = newHols.findIndex(obj => obj.id == holiday.id);
      const oldDays = newHols[index];
      newHols[index] = holiday;
      let oldDaysTaken = state.daysTaken;
      let oldDaysRemaining = state.daysRemaining;
      oldDaysTaken = oldDaysTaken - oldDays.daysBooked;
      oldDaysTaken = oldDaysTaken + holiday.daysBooked;
      oldDaysRemaining = oldDaysRemaining + oldDays.daysBooked;
      oldDaysRemaining = oldDaysRemaining - holiday.daysBooked;

      commit(types.UPDATE_HOLIDAY, { newHols, oldDaysTaken, oldDaysRemaining });
      router.replace({ path: "holidays" });
    }
  }
});
