<template>
    <form @submit.prevent="handleSubmit">
        <label>Title</label>
        <input v-focus v-model="goal.title" type=text>
        <label >Start Date</label>
        <input v-focus v-model="goal.startDate" type=text>
        <label>End Date</label>
        <input v-focus v-model="goal.endDate"  type=text>
        <button>Add</button>
    </form>
</template>

<script>

function initGoal() {
  return {
    name: '',
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
