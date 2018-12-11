<template>
  <section class="goals">
    <h2></h2>
    <h3></h3>
    AddGoal :onAdd="handleAdd"/>
    <h4>Current Goals</h4>
    <GoalList v-if="goals && goals.length > 0" :goals="goals"/>
    <p v-else>Add a goal to start!</p>
  </section>
</template>

<script>
import api from '../../api';
import AddGoal from './AddGoal.vue';
import GoalList from './GoalList.vue';

export default {
  data() {
    return {
      goals: null
    };
  },
  components: {
    AddGoal,
    GoalList
  },
created() {
  api.getGoals()
    .then(goals => {
      this.goals = goals;
    });
},
methods: {
  handleAdd(goal) {
    return api.addGoal(goal)
      .then(saved => {
        this.goals.push(saved);
    });
  }
}
};
</script>

<style>

</style>
