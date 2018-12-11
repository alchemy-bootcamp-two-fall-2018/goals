<template>
    <li>{{goal.name}} the {{goal.type}}</li>
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

