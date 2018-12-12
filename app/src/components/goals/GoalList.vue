<template>
    <ul v-if="goals">
    <Goal/>
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

<style>

</style>

