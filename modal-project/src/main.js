import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
// import VueRouter from 'vue-router';
import  router from "./router/index";
// import {  Vue } from 'vue';-
console.log(router)
createApp(App).use(router).mount('#app');

// new Vue({
//     router,
//     render: (h) => h(App)
//   }).$mount('#app')

// var cors = require('cors');

// App.use(cors());
App.use(VueAxios,axios);
// App.use(VueRouter)

