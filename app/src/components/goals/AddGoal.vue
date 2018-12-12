<template>
  <form @submit.prevent="handleSubmit">
    <label>Goal:</label>
    <input v-model="goal.name">
    <label>Start Date:</label>
    <input v-model="goal.startDate"> 
    <label>End Date:</label>
    <input v-model="goal.endDate">
    <button>Add</button>
  </form>
</template>

<script>
function initGoal() {
  return {
    name: '',
    startDate: ''
  };
}
export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      goal: initGoal()
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.goal)
        .then(() => {
          this.goal = initGoal();
        });
    }
  }
};
</script>

<style scoped>
form {
  border: 1px solid #aaa;
  padding: 10px;
}
input, button {
  margin: 0 5px;
}
input {
  width: 125px;
  font-size: 1.05em;
}
</style>