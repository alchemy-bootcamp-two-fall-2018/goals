<template>
  <li>
    <p>{{goal.title}}</p>
    <p>
      Start Date: 
      <DateDisplay v-bind:date="goal.startDate"/>
    </p>
    
    <div v-if="goal.endDate">
      Completed Date:
      <DateDisplay v-bind:date="goal.endDate"/>
    </div>
    
    <div v-else>
      NOT COMPLETED
    </div>
    
    <!--add condition for when button shouldn't show-->
    <button @click="handleCompleted">Completed</button>
 
  </li>
</template>

<script>
import DateDisplay from '../shared/DateDisplay';
export default {
  props: {
    goal: null,
    onEdit: Function
  },
  components: {
    DateDisplay
  },
  methods: {
    handleCompleted() {
      this.goal.endDate = new Date().toLocaleDateString();
      this.onEdit(this.goal);
    }
  }
};
</script>

<style scoped>
  li {
    list-style-type: none;
    border: 2px solid black;
    padding: 10px 0;
    margin: 10px 10px;
    width: 350px;
  }
</style>