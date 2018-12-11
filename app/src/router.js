import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';

export default new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '*', redirect: '/' }
  ]
});