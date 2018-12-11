import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Sign from './components/Sign';
import Goals from './components/Goals';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/sign', component: Sign },
    { path: '/goals', component: Goals },
    { path: '*', redirect: '/' }
  ]
});