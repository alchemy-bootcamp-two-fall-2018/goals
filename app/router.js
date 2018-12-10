import VueRouter from 'vue-router';
import Home from './src/components/Home';
import Goals from './src/components/Goals';

export default new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/goals', component: Goals }
    ]
});