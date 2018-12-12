import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Dogs from './components/dogs/Dogs.vue';

export default new VueRouter({

  routes: [
    { path: '/', component: Home },
    { path: '/dogs', component: Dogs },
    { path: '*', redirect: '/' }
  ]
});