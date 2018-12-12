<template>
  <section>
    <h2>Welcome to My Goals!</h2>
    <p>
      <RouterLink to="/goals">view goals</RouterLink>
    </p>
    <table v-if="stats">
      <thead>
        <tr>
          <th>Goal Count</th>
          <th>Average Time</th>
          <th>Shortest Time</th>
          <th>Longest Time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="stat in stats"
          :key="stat.profileId">
          <td>{{stat.count}} Goals!</td>
          <td>{{stat.average}} days</td>
          <td>{{stat.mindiff}} days</td>
          <td>{{stat.maxdiff}} days</td>
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
    api.getStats()
      .then(stats => this.stats = stats);
  }
};
</script>

<style>
section {
  text-align: center;
}
th {
  padding: 20px;
}
table {
  width: 100vw;
}
</style>