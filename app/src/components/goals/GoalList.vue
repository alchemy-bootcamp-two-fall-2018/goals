<template>
    <div>
      GOAL LIST RENDERING
        <ul v-if="goals">
            <Goal v-for="goal in goals"
            :key="goal.id"
            :goal="goal"/>
        </ul>
    </div>
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

<style scoped>
div {
  border: 2px solid green;
}
</style>
