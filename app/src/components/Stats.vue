<template>
  <section>
    <h2>Count:</h2>
    <p>You have {{stats.count}} goals total</p>

    <!-- <h2>Shortest to Complete:</h2>
    <p>{{stats.shortest}}</p>

    <h2>Longest to Complete:</h2>
    <p>{{stats.longest}}</p>

    <h2>Average Completion Time:</h2>
    <p>{{stats.average}}</p> -->
  </section>
</template>

<script>

import api from '../services/api';

export default {
  data() {
    return {
      stats: {}
    };
  },
  created() {
    api.getStats()
      .then(stats => {
        this.stats = stats;
      });
  }
};
</script>

<style>

</style>
