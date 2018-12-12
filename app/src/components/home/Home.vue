<template>
  <section>
    <h2>Home</h2>
    <p>
      <RouterLink to="/goals">View Goals</RouterLink>
    </p>
    <p>
      TODO: show the user stats about their completed goals:
      Count, Shortest time to completion, Longest time to completion,
      Average time to completion
    </p>
    <table v-if="stats">
      <thead>
        <tr>
          <th>Count</th>
          <th>Average time to complete</th>
          <th>Shortest time to complete</th>
          <th>Longest time to complete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="stat in stats"
          :key="stat.goalId">
          <td>{{stat.time}}</td>
          <td>I'm a td in a tr</td>
          <td>I'm a td in a tr</td>
          <td>I'm a td in a tr</td>
      <!--<td>{{stat.count}}</td>
          <td>{{stat.averageTime}}</td>
          <td>{{stat.minimumTime}}</td>
          <td>{{stat.maximumTime}}</td>-->
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
      stats: null
    };
  },
  created() {
    api.getGoalStats()
      .then(stats => this.stats = stats);
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
