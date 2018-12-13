import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Goals from './components/goals/Goals';

export default new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/goals', component: Goals },
    { path: '*', redirect: '/' }
  ]
});