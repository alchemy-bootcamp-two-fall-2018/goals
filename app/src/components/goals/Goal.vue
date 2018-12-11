<template>
    <li><span class="goal-title"> {{goal.title}} -- </span> 
    Start Date: {{goal.startdate}} 
    End Date: {{goal.enddate}}
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
li {
  padding: 10px 0;
}

.goal-title {
    font-size: 1.2em;
    font-weight: 600;
}
</style>

