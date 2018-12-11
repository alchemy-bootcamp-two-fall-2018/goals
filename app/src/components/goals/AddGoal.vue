<template>
  <form @submit.prevent="handleSubmit">
    <label>Title:</label>
    <input v-focus v-model="goal.title" require>
    <label>Type:</label>
    <input v-focus v-model="goal.type" require>
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
</style>