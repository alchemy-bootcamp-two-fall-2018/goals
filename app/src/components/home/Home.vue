<template>
  <section>
    <h2>Welcome to My Goals!</h2>
    <p>
      <RouterLink to="/goals">view goals</RouterLink>
    </p>
    <table v-if="stats">
      <thead>
        <tr>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="stat in stats"
          :key="stat.profileId">
          <td>{{stat.count}}</td>
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
</style>