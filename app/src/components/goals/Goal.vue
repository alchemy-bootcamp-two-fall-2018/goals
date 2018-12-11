<template>
  <li>
    <p>Goal: {{goal.title}}</p>
    <p>Start Date: {{goal.startDate}}</p>
    <p>End Date: {{goal.endDate}}</p>

  </li>
</template>

<script>
export default {
  props: {
    goal: null
  }
};
</script>

<style scoped>
  li{
    padding: 10px 0;
    /* list-style: none; */
  }
</style>
