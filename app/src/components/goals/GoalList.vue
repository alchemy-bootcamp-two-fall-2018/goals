<template>
  <table v-if="goals">
     <tr>
      <th>NAME: START DATE: END DATE: DESCRIPTION:</th>
    </tr>
    <tr>
        <Goal v-for="goal in goals" :key="goal.id" :goal="goal"/>
    </tr>
  </table>

</template>

<script>
import Goal from './Goal';
export default {
  props: {
    goals: null
  },
  components: {
    Goal
  }
};
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  font-size: 15px;
   text-align: left
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>