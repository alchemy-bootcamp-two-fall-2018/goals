<template>
  <section class="home">
    <h2 class="welcome">Welcome to the amazing goal setter!</h2>
    <p class="look">
      <RouterLink to="/goals">Take a look at your current goals</RouterLink>
    </p>
    <table v-if="summary">
      <thead>
        <tr>
          <th>Count</th>
          <th>Average</th>
          <th>Min</th>
          <th>Max</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sum in summary"
          :key="sum.profileId">
          <td>{{sum.count}}</td>
          <td>{{sum.average}}</td>
          <td>{{sum.min}}</td>
          <td>{{sum.max}}</td>
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
      summary: null
    };
  },
  created() {
    api.getGoalSummary()
      .then(summary => this.summary = summary);
  }
};

</script>


<style>

    .home {
        margin-top: -20px;
        background: #f0e2a3;
    }

    .welcome {
        padding: 20px;
    }

    .look {
        margin-top: 0px;
        padding: 0 0 0 20px;
    }

</style>
