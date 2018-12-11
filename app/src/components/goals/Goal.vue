<template>
  <li>
    <p>{{goal.title}}</p>
    <p>{{goal.startDate}}</p>
    <p>{{goal.endDate}}</p>

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
  }
</style>
