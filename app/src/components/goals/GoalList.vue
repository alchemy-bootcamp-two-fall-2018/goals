<template>
  <ul v-if="goals">
    <Goal v-for="goal in goals"
    :key="goal.id"
    :goal="goal"
    :onEdit="onEdit"/>
  </ul>
</template>

<script>
import Goal from './Goal.vue';

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
    border: 2px orangered;
  }
</style>
