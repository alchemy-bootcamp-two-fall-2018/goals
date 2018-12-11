<template>
  <li>
    <p>{{goal.title}}</p>
    <p>Start Date: {{goal.startDate}}</p>
    
    <div v-if="goal.endDate">
      Completed Date:
      {{goal.endDate}}
    </div>
    <div v-else>
      NOT COMPLETED
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
    border: 2px solid black;
    padding: 10px 0;
    margin: 10px 10px;
    width: 350px;
  }


</style>
