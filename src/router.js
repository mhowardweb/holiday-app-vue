import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Add from "./views/Add.vue";
import Settings from "./views/Settings.vue";
import Holidays from "./views/Holidays.vue";
import Edit from "./views/Edit.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/holidays",
      name: "holidays",
      component: Holidays
    },
    {
      path: "/add",
      name: "add",
      component: Add
    },
    {
      path: "/edit",
      name: "edit",
      component: Edit
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings
    }
  ]
});
