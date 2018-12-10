import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Sign from './components/Sign';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/sign', component: Sign },
    { path: '*', redirect: '/' }
  ]
});