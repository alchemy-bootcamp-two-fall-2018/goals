<template>
  <li>
    <RouterLInk :to="`/goals/${goal.id}`">
      {{goal.name}}
    </RouterLInk>

    <DateDisplay :date=goal.startDate:/>
  </li>
</template>

<script>
import DateDisplay from '../dates/DateDisplay';

export default {
  props: {
    goal: null
  },
  components: {
    DateDisplay
  }
};
</script>

<style>

</style>
