<template>
  <form @submit.prevent="handleSubmit">
    <label>NAME:</label>
    <input v-focus v-model="goal.name" require>
    <label>DATE:</label>
    <input v-focus v-model="goal.date" require>
    <label>DESCRIPTION:</label>
    <input v-focus v-model="goal.description" require>
    <button>Add</button>
  </form>
</template>

<script>
function initgoal() {
  return {
    name: '',
    date: '',
    description: ''
  };
}
export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      goal: initgoal()
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.goal)
        .then(() => {
          this.goal = initgoal();
        });
    }
  }
};
</script>


<style>
input {
   display: block;
   padding: 10px;
   width:250px;
   background-color: #e8eeef;
   color: black;
   box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
   margin: 5px 0 10px 0;
   font-size: 15px;
   text-align: left;
  }
  input:focus {
    background-color: #f7ffe0;
    border-radius: 5px;
    outline:none;
  }
</style>
