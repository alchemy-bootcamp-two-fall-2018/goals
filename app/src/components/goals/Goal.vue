<template>
  <li>
    <p>Goal: {{goal.name}}</p>
    <p>Start Date: 
      <DateDisplay v-bind:date="goal.startDate"/>
    </p>
    <div v-if="goal.endDate">
      Completed Date: 
      {{goal.endDate}}
    </div>
    <div v-else>
      Incomplete
    </div>
    
    <button @click="handleUpdate">Completed</button> 
  </li>
</template>

<script>
import DateDisplay from '../DateDisplay.vue';
export default {
  props: {
    goal: null,
    onEdit: Function
  },
  components: {
    DateDisplay
  },
  methods: {
    handleUpdate() {
      this.goal.endDate = new Date().toLocalDateString();
      this.onEdit(this.goal);
    }
  }
};
</script>

<style scoped>
li {
  list-style-type: none;
  padding: 10px;
  margin: 10px;
  border: 2px, blue;
  width: 300px;
}

</style>
