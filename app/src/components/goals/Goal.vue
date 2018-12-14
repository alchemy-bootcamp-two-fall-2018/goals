<template>
    <li> 
        Goal: {{goal.title}}
        <!-- Start Date: {{goal.startDate}} -->
        <!-- End Date: {{goal.endDate}} -->
        <DateDisplay :date="
        goal.startDate"/>
    </li>
</template>

<script>
import DateDisplay from '../shared/DateDisplay';

export default {
  props: {
    goal: null
  },
  components: {
    DateDisplay
  }
};
</script>

<style scoped>
li {
  border: 1px solid black;
}

</style>
