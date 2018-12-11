<template>
  <form @submit.prevent="handleSubmit">
      <label>Name:</label>
      <input v-focus v-model="goal.name" required>
      <label>Type:</label>
      <input v-model="goal.type" required>
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