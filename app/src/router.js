import VueRouter from 'vue-router';
import Home from './components/Home';
import Goals from './components/Goals';

export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/goals', component: Goals },
        { path: '*', redirect: '/' }
    ]
});