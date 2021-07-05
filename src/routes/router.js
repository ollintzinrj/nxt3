/*
Este archivo sirve para enrutar cada una de las vistas.
*/
import Vue from 'vue';
import vueRouter from 'vue-router';

import Signin from '../app/components/Signin.vue';
import Home from '../app/components/Home.vue';

Vue.use(vueRouter);

export default new vueRouter({
  routes: [
      { 
        path: '/signin', 
        name: 'signin',
        component: Signin
      },
      { 
        path: '/home', 
        name: 'home',
        component: Home
      }
  ]
});