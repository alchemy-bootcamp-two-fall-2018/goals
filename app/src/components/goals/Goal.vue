<template>
  <li>
    <p>Goal: {{goal.title}}</p>
    <DateDisplay v-bind:date="goal.startDate"/>
    
    <div v-if="goal.endDate">
      Completed Date:
      <DateDisplay v-bind:date="goal.endDate"/>
    </div>
    <div v-else>
      NOT COMPLETED
    </div>

    <button @click="handleUpdate">Update</button>

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
  li{
    padding: 10px 0;
    list-style-type: none;
    border: 2px solid black;
    margin: 10px 10px;
    width: 350px;
  }
</style>
