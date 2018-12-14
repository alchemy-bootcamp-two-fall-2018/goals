<template>
  <form @submit.prevent="handleSubmit">
    <label>Goal:</label>
    <input v-model="goal.title" require>
    <label>Start Date:</label>
    <input v-model="goal.startDate" type="date" require>
    <label>End Date:</label>
    <input v-model="goal.endDate" type="date" require>
    <button>Add</button>
  </form>
</template>

<script>

function initGoal() {
  return {
    title: '',
    startDate: null,
    endDate: null
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
