<template>
  <section class="home">
    <h2 class="look">Your Goals:</h2>
    <GoalList v-if="goals && goals.length > 0" :goals="goals"/>
    <p v-else>Add a goal!</p>
    <AddGoal :onAdd="handleAdd"/>
  </section>
</template>

<script>
import api from '../../services/api';
import AddGoal from './AddGoal';
import GoalList from './GoalList';

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
      })
      .catch(err => {
        this.error = err;
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

