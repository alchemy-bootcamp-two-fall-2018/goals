<template>
  <section class="home">
    <h2 class="your-goals">Your Goals:</h2>
    <GoalList :onEdit="handleEdit" v-if="goals && goals.length > 0" :goals="goals"/>
    <p v-else>Add a goal!</p>
    <AddGoal v-bind:onAdd="handleAdd"/>
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
    },
    handleEdit(goal) {
      return api.updateGoal(goal)
        .then(updated => {
          console.log('updated is', updated);
          const index = this.goals.findIndex((goal) => goal.id === updated.id);
          this.goals.splice(index, 1, updated);
        });
    }
  }
};
</script>

<style>
  .your-goals {
    padding: 20px;
}

</style>

