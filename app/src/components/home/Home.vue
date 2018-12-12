<template>
  <section>
    <h2>Welcome to Your Goals Page</h2>
    <p>
      <RouterLink to="/goals">View Goals</RouterLink>
    </p>

    <table>
      <thead>
        <tr>
          <th colspan="4">GOAL STATS</th>
        </tr>
        <tr>
          <th>Goal Count</th>
          <th>Min Duration</th>
          <th>Max Duration</th>
          <th>Average Duration Time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="stat in stats"
          v-bind:key="stat.profileId">
          <td>{{stat.count}}</td>
          <td>{{stat.mindiff}} days</td>
          <td>{{stat.maxdiff}} days</td>
          <td>{{stat.average}} days</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>

import api from '../../services/api';

export default {
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
<style scoped>
  table, th, td {
    border: 3px solid black;
    border-collapse: collapse;
  }
  table {
    margin: 30px auto;
  }
  td, th {
    margin: 20px;
    padding: 15px;
  }
  th {
    font-size: 1.2em;
  }
  a {
    text-decoration: none;
    color: black;
    border: 2px solid red;
    border-radius: 5px;
    padding: 5px;
    margin: 15px;
  }
</style>