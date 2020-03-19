import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';
// tslint:disable-next-line:no-var-requires
const vueConfig: any  = require('../vue.config.js');
// tslint:disable
(<any>window).apiBaseUrl = vueConfig.devServer.proxy;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
