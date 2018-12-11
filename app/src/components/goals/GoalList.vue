<template>
  <div>
    <h2>Your List of Goals</h2>
    <ul v-if="goals">
      <Goal v-for="goal in goals"
        :key="goal.id"
        :goal="goal"/>
    </ul>
  </div>
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
  // computed: {
  //   sortedGoals() {
  //     return this.goals.slice().sort((a, b) => {
  //       if(a.startDate === b.startDate) {
  //         if(a.name > b.name) return 1;
  //         if(a.name < b.name) return -1;
  //         return 0;
  //       }
  //     });
  //   }
  // }
};
</script>

<style>

</style>
