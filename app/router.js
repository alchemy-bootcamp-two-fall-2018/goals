import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Students from './components/students/Students.vue';
import { Server } from 'tls';

export default new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/students', component: Students },
    { path: '*', redirect: '/' }
  ]
});