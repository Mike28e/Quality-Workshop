import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Dashboard from "../views/Dashboard.vue";
import Mailouts from "../views/Mailouts.vue";
import Reports from "../views/Reports.vue";
import Sample from "../views/Sample.vue";
import Account from "../views/Account.vue";

Vue.use(VueRouter);


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/mailouts",
    name: "Mailouts",
    component: Mailouts
  },
  {
    path: "/reports",
    name: "Reports",
    component: Reports
  },
  {
    path: "/sample",
    name: "Sample",
    component: Sample
  },
  {
    path: "/account",
    name: "Account",
    component: Account
  }
];

const router = new VueRouter({
  routes
});


export default router;
