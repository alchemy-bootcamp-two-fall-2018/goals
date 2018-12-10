<template>
  <form @submit.prevent="handleSubmit">
    <label>Goal:</label>
    <input v-focus v-model="goal.name" require>
    <label>Category (i.e. health):</label>
    <input v-focus v-model="goal.type" require>
    <button>Add</button>
  </form>
</template>

<script>

function initGoal() {
  return {
    name: '',
    type: ''
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
