<template>
  <form @submit.prevent="handleSubmit">
    <p>
      <label>Goal:</label>
      <input v-model="goal.title">
    </p>
    
    <p>
      <label>Start Date:</label>
      <input type="date" v-model="goal.startDate">
    </p>

    <!-- <p>
      <label>Completed Date: </label>
      <input v-model="goal.endDate">
    </p> -->

    <button>Add</button>
  </form>
</template>

<script>
function initGoal() {
  return {
    title: '',
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

<style>

</style>
