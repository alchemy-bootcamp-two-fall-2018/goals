<template>
  <section>
    <h1>Welcome to the Goals App!</h1>
    <p>
      <RouterLink to="/goals">view goals</RouterLink>
    </p>
    <h2>Look at these Goal Stats</h2>
      <table v-if="stats">
      <thead>
        <tr>
          <th>Count</th>
          <th>Min Time</th>
          <th>Max Time</th>
          <th>Average Time</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="stat in stats"
          :key="stat.goalId">
          <td> {{stat.count}} </td>
          <td> {{stat.mindiff}} </td>
          <td> {{stat.maxdiff}} </td>
          <td> {{stat.average}} </td>
        </tr>
      </tbody>
    </table>
  </section> 	   
</template>
 <script>
import api from '../api.js'; 
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
  </section>
</template>

<style scoped>
h1 {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  
}
</style>