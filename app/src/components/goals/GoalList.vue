<template>
  <ul v-if="goals">
    <Goal v-for="goal in sortedGoals"
      :key="goal.id"
      :goal="goal"/>
  </ul>
</template>

<script>
import Goal from '/Goal';

export default {
  props: {
    goals: null
  },
  components: {
    Goal
  },
  computed: {
    sortedGoals() {
      return this.goals.slice().sort((a, b) => {
        if(a.startDate === b.startDate) {
          if(a.name > b.name) return 1;
          if(a.name < b.name) return -1;
          return 0;
        }
      });
    }
  }
};
</script>

<style>

</style>
