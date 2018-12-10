<template>
  <section class="goals">
    <h2>Read Your Goals!</h2>
    <AddGoal :onAdd="handleAdd"/>
    <GoalList :goals="goals"/>
  </section>
</template>

<script>
import api from '../../services.api';
import AddGoal from './AddGoal';
import GoalList from '/GoalList';

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
