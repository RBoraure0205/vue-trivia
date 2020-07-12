import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Trivia from "../views/Trivia.vue";
import Results from "../views/Results.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/trivia",
    name: "Trivia",
    component: Trivia,
  },
  {
    path: "/results",
    name: "Results",
    component: Results,
  },
  //  {
  //   path: "/about",
  //   name: "About",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //   component: () =>
  //    import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
