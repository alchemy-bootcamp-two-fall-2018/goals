<template>
    <section>
        <h2>My Goals</h2>
        <h1>Add a new goal</h1>
        <AddGoal :onAdd="handleAdd"/>
        <h3>Current Goals</h3>
        <GoalList v-if="goals && goals.length > 0" :goals="goals"/>
        <p v-else> Add a goal to get started</p>
    </section>
</template>

<script>
import api from '../services/api';
import GoalList from './GoalList';
import AddGoal from './AddGoal';

export default {
  data() {
    return {
      goals: null
    };
  },
  components: {
    GoalList,
    AddGoal
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
