<template>
  <form @submit.prevent="handleSubmit">
    
    <label>Goal Name:</label>
    <input v-focus v-model="goal.name" required>
  
    <label>Start Date:</label>
    <input v-focus v-model="goal.start_date" required>
    
    <button>Set Goal!</button>
  </form>
</template>

<script>

function initGoal() {
  return {
    name: '',
    date: ''
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

</style>
