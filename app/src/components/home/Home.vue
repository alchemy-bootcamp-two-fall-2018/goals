<template>
  <section>
    <h2>Home</h2>
    <p>
      <RouterLink to="/goals">View Goals</RouterLink>
    </p>
    <table v-if="goals">
      <thead>
        <tr>
          <th>Count</th>
          <th>Average time to complete</th>
          <th>Shortest time to complete</th>
          <th>Longest time to complete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="goal in goals"
          :key="goal.goalId">
          <td>{{goal.count}}</td>
          <td>{{goal.averageTime}}</td>
          <td>{{goal.minimumTime}}</td>
          <td>{{goal.maximumTime}}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import api from '../../services/api';

export default {
  name: 'home',
  data() {
    return {
      goals: null
    };
  },
  created() {
    api.getGoalStats()
      .then(goals => this.goals = goals);
  }
};
</script>

<style>
table {
  width: 100%;
  border-collapse: collapse;
}
th {
  border: 1px solid cyan;
}
td {
  padding: 10px 3px;
  border: 1px solid red;
}
</style>
