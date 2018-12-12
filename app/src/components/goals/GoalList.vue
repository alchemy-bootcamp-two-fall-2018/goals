<template>
  <ul v-if="goals">
    <Goal v-for="goal in goals"
      v-bind:key="goal.id"
      v-bind:goal="goal"
      v-bind:onEdit="onEdit"/>
  </ul>


</template>

<script>
import Goal from './Goal';

export default {
  props: {
    goals: null,
    onEdit: Function
  },
  components: {
    Goal
  }
};
</script>

<style scoped>
ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
