import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

Vue.directive('focus', {
  inserted(el) {
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
