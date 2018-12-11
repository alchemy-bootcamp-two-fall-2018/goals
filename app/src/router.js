import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Goals from './components/goals/Goals';

export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/', components: Goals },
        { path: '*', redirect: '/'}
    ]
});