<template>
  <section class="goals">
    <h2>My Goals</h2>
    <h3>Add a Goal</h3>
    <AddPet :onAdd="handleAdd"/>
    <h3>Your Goals</h3>
    <PetList v-if="goals && goals.length > 0" :goals="goals"/>
    <p v-else>Add a goal!</p>
  </section>
</template>

<script>
import api from '../../services/api';
// import AddGoal from './AddGoal';
// import GoalsList from './GoalList';

export default {
  data() {
    return {
      goals: null
    };
  },
  components: {
    // AddGoal,
    // GoalList
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

<style lang="postcss" scoped>

</style>

