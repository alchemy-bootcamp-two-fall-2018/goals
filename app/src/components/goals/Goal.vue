<template>
    <li>{{goal.title}} starts {{goal.startdate}} and ends {{goal.enddate}}</li>
</template>

<script>
export default {
  props: {
    goal: null
  }
};
</script>

<style>
li {
  padding: 10px 0;
}
</style>

