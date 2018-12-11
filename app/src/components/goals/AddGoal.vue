<template>
  <form @submit.prevent="handleSubmit">
    <label>Name:</label>
    <input v-focus v-model="goal.name" require>
    <label>Type:</label>
    <input v-focus v-model="goal.type" require>
    <label>Start Date:</label>
    <input v-focus v-model="goal.start"> 
    <label>End Date:</label>
    <input v-focus v-model="goal.end">
    <button>Add</button>
  </form>
</template>

<script>
function initgoal() {
  return {
    name: '',
    type: ''
  };
}
export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      goal: initgoal()
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.goal)
        .then(() => {
          this.goal = initgoal();
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