<template>
  <li>
    <p><span>Goal:</span> {{goal.title}}</p>
    <p><span>Start Date:</span> {{goal.startDate}}</p>
    <p><span>End Date:</span> {{goal.endDate}}</p>
  </li>
</template>

<script>
export default {
  props: {
    goal: null
  }
};
</script>

<style>
span {
  font-weight: bold;
}
</style>
