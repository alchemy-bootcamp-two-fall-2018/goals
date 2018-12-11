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

<style scoped>
li {
  padding: 10px;
  margin: 10px;
}

</style>
