<template>
  <form @submit.prevent="handleSubmit">
      <label>Title:</label>
      <input v-focus v-model="goal.title" required>
      <label>Type:</label>
      <input v-model="goal.type" required>
      <label>Start date:</label>
      <input type="date" v-model="goal.startDate" required>
      <label>End date:</label>
      <input type="date" v-model="goal.endDate" required>
     <button>Add</button>
  </form>
</template>

<script>
import api from '../../services/api';

function initGoal() {
  return {
    title: '',
    type: '',
    startDate: '',
    endDate: ''
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
  created() {
    this.goals = api.getGoals();
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