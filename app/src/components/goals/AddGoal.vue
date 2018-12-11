<template>
  <form class="form" @submit.prevent="handleSubmit">
    <h3>Add a Goal</h3>
    <label>Title:</label>
    <input autofocus v-focus v-model="goal.title"  require>
    <label>Start Date:</label>
    <input v-focus v-model="goal.startdate" require>
    <label>End Date:</label>
    <input v-focus v-model="goal.enddate" require>
    <button>Add</button>
  </form>
</template>

<script>

function initGoal() {
  return {
    name: '',
    type: ''
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

<style lang="postcss" scoped>

form {
  background: #c1d37f;
  border: 1px solid #aaa;
  padding: 10px 10px 20px 10px;
  width: 40%;
  margin: 0 20px;
}

input, button {
  margin: 0 5px;
}

input {
  width: 125px;
  font-size: 1.05em;
}
</style>

