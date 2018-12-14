<template>
    <section>
        <form @submit.prevent="handleSubmit">
            <label> Goal: </label>
            <input type="text" v-model="goal.title">

            <label>Start Date:</label>
            <input type="date" v-model="goal.startDate">

            <label>Accomplished on:</label>
            <input type="date" v-model="goal.endDate">
            <button>ADD</button>
        </form>
    </section>
</template>

<script>
//do I return a goal?
function initGoal() {
  return {
    title: '',
    startDate: '',
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

<style scoped>
section {
    border: 2px solid purple;
}
</style>
