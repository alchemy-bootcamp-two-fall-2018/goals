<template>
  <section class="goals">
    <h2>My Goals</h2>
    <h3>Add a New Goal</h3>
    <AddGoal :onAdd="handleAdd"/>
    <h3>Current Goals</h3>
    <GoalList v-if="goals && goals.length > 0" 
      :goals="goals"
      :onEdit="handleEdit"
    />
    <p v-else>(no goals added yet)</p>
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
          const index = this.goals.findIndex((goal) => goal.id === updated.id);
          this.goals.splice(index, 1, updated);
        // .then(updated => this.goal = updated);
        });
    }
  }
};
</script>