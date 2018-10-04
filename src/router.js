import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/home",
      redirect: "/"
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/holidays",
      name: "holidays",
      component: () => import("./views/Holidays.vue")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./views/Add.vue")
    },
    {
      path: "/edit",
      name: "edit",
      component: () => import("./views/Edit.vue")
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("./views/Settings.vue")
    }
  ]
});
