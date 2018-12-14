<template>
  <form @submit.prevent="handleSubmit">
    <fieldset>
      <label>Title:</label>
      <input v-focus v-model="goal.title" required>
      <label>Type:</label>
      <input v-model="goal.type" required>
    </fieldset>
    <fieldset>
      <label>Start date:</label>
      <input v-model="goal.startDate" required type="date">
      <label>End date:</label>
      <input v-model="goal.endDate" required type="date">
    </fieldset>
    <fieldset>
      <label>
        Completed?
          Yes:<input type="radio" name="poly" v-model="goal.completed" v-bind:value="true" required>
          No:<input type="radio" name="poly" v-model="goal.completed" v-bind:value="false">
      </label>
      <br>
     <button>Add</button>
    </fieldset>
  </form>
</template>

<script>
import api from '../../services/api';

function initGoal() {
  return {
    title: '',
    type: '',
    startDate: '',
    endDate: '',
    completed: ''
  };
}
function copyGoal(goal) {
  return {
    id: goal.id,
    title: goal.title,
    type: goal.type,
    startDate: goal.startDate,
    endDate: goal.endDate,
    completed: goal.completed,
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
        });
    }
  }
};
</script>

<style lang="postcss">
label {
  padding: 10px;
}
fieldset {
  border: 2px solid transparent;
}
h3 {
  margin-bottom: 0;
}
</style>

