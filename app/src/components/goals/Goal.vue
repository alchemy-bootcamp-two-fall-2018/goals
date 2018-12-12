<template>
    <li>
    {{goal.title}}
    {{goal.start_date}}
    {{goal.end_date}}
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

</style>
