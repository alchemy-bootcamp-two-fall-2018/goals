<template>
  <section class="home">
    <h2 class="welcome">Welcome to the amazing goal setter!</h2>
    <p class="look">
      <RouterLink to="/goals">Click here for goal details</RouterLink>
    </p>
    <h3 class="summary-title">Goal Summary</h3>
    <table class="summary" v-if="summary">
      <thead>
        <tr>
          <th>Count</th>
          <th>Average</th>
          <th>Minimum</th>
          <th>Maximum</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sum in summary"
          :key="sum.profileId">
          <td>{{sum.count}}</td>
          <td>{{sum.average}} days</td>
          <td>{{sum.min}} days</td>
          <td>{{sum.max}} days</td>
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

    tbody {
        text-align: center;
    }

    td {
        border: 1px black solid;
    }

    .home {
        margin-top: -20px;
        background: #f0e2a3;
    }

    .welcome {
        padding: 20px;
        margin-bottom: 0;
    }

    .look {
        margin-top: 0px;
        padding: 0 0 0 20px;
    }

    .summary{
        margin: 20px;
    }

    .summary thead {
        background: #664e4c;
        color: #c1d37f;
    }

    .summary thead th {
        width: 100px;
    }

    .summary-title {
        margin: 80px 0 0 20px;
    }

</style>
