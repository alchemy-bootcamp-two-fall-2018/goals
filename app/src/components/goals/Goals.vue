<template>
    <section>
        Goals page
        <AddGoal/>
        <GoalList v-if="goals"
        :goals="goals"/>
    </section>

</template>

<script>
import api from '../../services/api';
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
      .then (goals => {
        this.goals = goals;
      })
      .catch(err => {
        this.error = err;
      });
  }
};
</script>

<style>

</style>
