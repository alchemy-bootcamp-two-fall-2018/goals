<template>
    <li>{{goal.title}}</li>
</template>

<script>
export default {
  props: {
    goal: null
  }
};
</script>

<style lang="postcss" scoped>
li {
  padding: 10px 0;
}
</style>
