<template>
  <section>
    <h2>Add a Goal:</h2>
    <form @submit.prevent="onSubmit">
      <label>Title:
        <input v-model="goal.title">
      </label>
      <label>Start Date:
        <input v-model="goal.stDate">
      </label>
      <label>End Date:
        <input v-model="goal.enDate">
      </label>
      <button>Add</button>
    </form>
  </section>

</template>

<script>
export default {
  data() {
    return {
      goal: {}
    };
  },
  methods: {
    onSubmit() {
      console.log(this.goal);
    }
  }
};
</script>

<style>

</style>
