<template>
    <li>
        <div>{{goal.name}}</div>
        <div><DateDisplay :date="goal.startDate" /></div>
        <div><DateDisplay :date="goal.endDate" /></div>
        <div>{{goal.description}}</div>
    </li>
</template>

<script>
import DateDisplay from '../shared/DateDisplay';

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
