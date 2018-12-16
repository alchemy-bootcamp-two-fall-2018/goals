<template>

  <tr>
    <td> {{goal.name}} </td>
    <td> <DateDisplay :date="goal.startDate" /> </td>
    <td> <DateDisplay :date="goal.endDate" /> </td> 
    <td> {{goal.description}} </td>
    
  </tr>
 
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

<style>

</style>
