<template>
  <section>
    <h3>Add a New Goal</h3>
    <AddGoal :onAdd="handleAdd"/>
    <h3>Current Goals</h3>
    <GoalList v-if="goals && goals.length > 0" :goals="goals"/>
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
