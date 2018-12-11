<template>
  <li>
    <p>{{goal.title}}</p>
    <p>Start Date: {{goal.startDate}}</p>
    <p>Completed Date: {{goal.endDate}}</p>
  </li>
</template>

<script>
export default {
  props: {
    goal: Object
  }
};
</script>

<style>

</style>
