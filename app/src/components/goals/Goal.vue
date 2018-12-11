<template>
  <li>
    <p>Goal: {{goal.name}}</p>
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
li {
  padding: 10px;
  margin: 10px;
}

</style>
