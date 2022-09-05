import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Ratescom from "../views/Rates.vue";
import Testcom from "../views/Testimonials.vue";
import contactcom from "../views/contact.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Ratescom",
    name: "Rates",
    component: Ratescom,
  },
  {
    path: "/Testimonials",
    name: "Testimonials",
    component:Testcom,
  },
  {
    path: "/contact",
    name: "contact",
    component:contactcom,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
