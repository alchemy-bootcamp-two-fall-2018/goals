<template>
  <ul v-if="goals">
    <Goal v-for="goal in goals"
    v-bind:key="goal.id"
    v-bind:goal="goal"/>
  </ul>
</template>

<script>
import Goal from './Goal';

export default {
  props: {
    goals: Array
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
