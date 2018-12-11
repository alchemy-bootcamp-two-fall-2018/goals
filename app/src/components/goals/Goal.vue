<template>
    <li>{{goal.title}} from {{goal.type}}</li>
</template>

<script>
export default {
  props: {
    goal: null
  }
};
</script>

<style scoped>

</style>
