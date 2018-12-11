<template>
    <div>
        Goal List
        <ul >
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

<style>

</style>
