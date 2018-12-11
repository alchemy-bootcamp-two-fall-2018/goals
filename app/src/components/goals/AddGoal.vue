<template>
    <form @submit.prevent="handleSubmit">
        <label>Name:</label>
        <input v-focus v-model="goal.name" require>
        <label>Type:</label>
        <input v-focus v-model="goal.type" require>
        <button>Add</button>
  </form>
</template>

<script>

function initGoal() {
  return {
    name: '',
    type: '',
    startDate: '',
    endDate: '',
    completed: false
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

<style>
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
