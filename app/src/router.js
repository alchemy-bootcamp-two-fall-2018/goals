import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Goals from './components/goals/Goals.vue';
// import GoalList from './components/goals/GoalList.vue';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/goals', component: Goals },
    { path: '*', redirect: '/' },
    // { path: 'goallist', component: GoalList }
  ]
});