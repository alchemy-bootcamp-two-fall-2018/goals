<template>
  <li>Name: {{goal.name}}, Type: {{goal.type}}</li>
</template>

<script>
export default {
  name: 'goal',
  props: {
    goal: null
  }
};
</script>

<style scoped>
li {
  border: 1px solid red;
}
</style>
