import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Assignment1 from "../views/Assignment1.vue";
import Assignment2 from "../views/Assignment2.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/assignment1",
    name: "Assignment 1",
    component: Assignment1
  },
  {
    path: "/assignment2",
    name: "Assignment 2",
    component: Assignment2
  },
  
];

const router = new VueRouter({
  routes
});

export default router;
