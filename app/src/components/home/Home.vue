<template>
  <section>
    <h2>Welcome to Your Goals Page</h2>
    <p>
      <RouterLink to="/goals">view goals</RouterLink>
    </p>

    <table>
      <thead>
        <tr>
          <th>Count</th>
          <th>Min Duration</th>
          <th>Max Duration</th>
          <th>Average Duration Time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="stat in stats"
          v-bind:key="stat.profileId">
          <td>{{stat.count}}</td>
          <td>{{stat.mindiff}}</td>
          <td>{{stat.maxdiff}}</td>
          <td>{{stat.average}}</td>



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
<style>
</style>