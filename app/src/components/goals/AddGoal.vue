<template>
    <form @submit.prevent="handleSubmit">
        <label>Title</label>
        <input type=text>
        <label>Start Date</label>
        <input type=text>
        <label>End Date</label>
        <input type=text>
        <button>Add</button>
    </form>
</template>

<script>

function initGoal() {
  return {
    name: '',
    start_date: '',
    end_date: ''
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
