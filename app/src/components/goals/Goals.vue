<template>
  <section class="goals">
    <h2>THESE ARE MY GOALS, THERE ARE MANY LIKE IT BUT THESE ONES ARE MINE...</h2>
    <h3>ADD A GOAL</h3>
    <AddGoal :onAdd="handleAdd"/>
    <h3>CURRENT QUEUE</h3>
    <GoalList v-if="goals && goals.length > 0" 
     :goals="goals"/>
    <p v-else>ADD A GOAL TO GET STARTED</p>
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
