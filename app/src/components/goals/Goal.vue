<template>
    <li>{{goal.title}} at {{goal.type}}</li>
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
    list-style: none;
    padding: 10px;
}
</style>
