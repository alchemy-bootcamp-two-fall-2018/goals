<template>
    <li>
        <div>{{goal.name}}</div>
        <div><DateDisplay :date="goal.date" /></div>
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
