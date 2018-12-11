import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Auth from './components/auth/Auth.vue';
import Goals from './components/goals/Goals.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/goals', component: Goals },
    { path: '/auth', component: Auth },
    { path: '*', redirect: '/' }
  ]
});