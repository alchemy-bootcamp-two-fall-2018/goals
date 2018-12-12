<template>
  <form @submit.prevent="handleSubmit">
    <p>
      <label>Goal:</label>
      <input v-model="goal.title" require>
    </p>
    <p>
      <label>Start Date:</label>
      <input v-model="goal.startDate" require>
    </p>

    <p>
      <label>End Date:</label>
      <input v-model="goal.endDate" require>
    </p>

    <button>Add</button>
  </form>
</template>

<script>

function initGoal() {
  return {
    title: '',
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
