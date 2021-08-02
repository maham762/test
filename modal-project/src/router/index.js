import { createApp } from "vue";
import App from '../App.vue';
import {createRouter, createWebHashHistory } from 'vue-router'
import Modal from "../components/Modal.vue";
import getAll from "../components/getAll.vue";
// App.use(VueRouter);
console.log('Modal');
console.log(Modal);
const routes = [
  {
    path: "/",
    name: "Modal",
    component: Modal,
  },
  {
    path: "/getAll",
    name: "getAll",
    component: getAll
  },
];

// VueRouter.cre
const router = createRouter({
  history: createWebHashHistory(),
    routes,
});

export default router;
