<template>
  <li>
    <p>Goal: {{goal.name}}</p>
    <p>Start Date: {{goal.startDate}}</p>
    <div v-if="goal.endDate">
      Completed Date: 
      {{goal.endDate}}
    </div>
    <div v-else>
      Incomplete
    </div>
    <button @click="handleUpdate">Update</button> 

  </li>
</template>

<script>
export default {
  props: {
    goal: null,
    onEdit: Function
  },
  methods: {
    handleUpdate() {
      this.goal.endDate = new Date();
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
