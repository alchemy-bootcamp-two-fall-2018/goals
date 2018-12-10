<template>
  <li>{{goal.name}} under the category of {{goal.type}}</li>
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
