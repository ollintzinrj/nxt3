import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import router from '../routes/router.js';
import App from './components/Container.vue';

Vue.use(VueResource);
Vue.use(VueRouter);

//Declaración de que componente se renderisa y en donde se monta (un div con id app)
new Vue ({
  render : h => h(App),
  router,
}).$mount('#app');