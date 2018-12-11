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
function copyGoal(goal) {
  return {
    id: goal.id,
    title: goal.title,
    type: goal.type,
    startDate: goal.startDate,
    endDate: goal.endDate,
    profileId: goal.profileId
  };
}

export default {
  props: {
    onAdd: Function,
    label: String,
    goalToEdit: Object
  },
  data() {
    return {
      goal: this.goalToEdit
        ? copyGoal(this.goalToEdit)
        : initGoal()
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
          // this.$router.go();
        });
    }
  }
};
</script>