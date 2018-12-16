<template>
    <li>{{goal.name}}  {{goal.date}} {{goal.description}}</li>
</template>

<script>
export default {
  props: {
    goal: null
  }
};

</script>

<style>

</style>
