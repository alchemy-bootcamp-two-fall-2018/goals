<template>
  <form @submit.prevent="handleSubmit">
    <label>Title:</label>
    <input v-focus v-model="goal.title" require>
    <label>Type:</label>
    <input v-focus v-model="goal.type" require>
    <label>Start Date:</label>
    <input v-focus v-model="goal.startDate">
    <label>End Date:</label>
    <input v-focus v-model="goal.endDate">
    <button>Add</button>
  </form>
</template>

<script>
function initGoal() {
  return {
    title: '',
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

<style scoped>
label {
    padding: 0px 20px;
}
button {
    margin-left: 20px;
}

</style>