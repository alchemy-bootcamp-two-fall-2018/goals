<template>
  <ul v-if="goals">
    <Pet v-for="goal in goals" 
      :key="goal.id"
      :pet="goal"/>
  </ul>

</template>

<script>
import Goal from './Goal';

export default {
  props: {
    goals: null
  },
  components: {
    Goal
  }
};
</script>

<style lang="postcss" scoped>

</style>

