<template>
    <li> 
        Goal: {{goal.title}}
        Start Date: {{goal.startDate}}
        End Date: {{goal.endDate}}
    </li>
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
  border: 1px solid black;
}

</style>
