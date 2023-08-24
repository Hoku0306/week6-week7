import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/MemberShip",
    component: () => import("../views/MemberShip.vue"),
    children: [
      {
        path: "Register",
        component: () => import("../components/RegisterVue.vue"),
      },
      {
        path: "Login",
        component: () => import("../components/LoginVue.vue"),
      },
    ],
  },
  {
    path: "/Event",
    component: () => import("../views/EventView.vue"),
  },
  {
    path: "/EventInfo",
    component: () => import("../views/EventInfo.vue"),
  },
  {
    path: "/Order",
    redirect: "/Order/FirstStep",
    component: () => import("../views/OrderView.vue"),
    children: [
      {
        path: "FirstStep",
        component: () => import("../components/OrderFirstStep.vue"),
      },
      {
        path: "SecondStep",
        component: () => import("../components/OrderSecondStep.vue"),
      },
      {
        path: "ThirdStep",
        component: () => import("../components/OrderThirdStep.vue"),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
