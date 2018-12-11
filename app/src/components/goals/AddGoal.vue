<template>
  <form @submit.prevent="handleSubmit">
    <label>Goal:</label>
    <input v-focus v-model="goal.name" require>
    <label>Start Date:</label>
    <input v-focus v-model="goal.start"> 
    <label>End Date:</label>
    <input v-focus v-model="goal.enddate">
    <button>Add</button>
  </form>
</template>

<script>
function initgoal() {
  return {
    name: '',
    startDate: '',
    endDate: ''
  };
}
export default {
  props: {
    onAdd: initGoal()
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