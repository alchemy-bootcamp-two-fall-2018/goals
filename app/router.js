import VueRouter from 'vue-router';
import Home from './src/components/Home.vue';
import Goals from './src/components/goals/Goals.vue';

export default new VueRouter({
    routes: [
        { path: '/', component: Home }, 
        { path: '/goals', component: Goals },
        { path: '*', redirect: '/' }
    ]

});