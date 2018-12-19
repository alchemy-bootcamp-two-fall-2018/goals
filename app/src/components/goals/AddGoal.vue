<template>
  <form @submit.prevent="handleSubmit">
    <label>NAME:</label>
    <input v-focus v-model="goal.name" require>
    <label>START DATE:</label>
    <input  v-model="goal.startDate" require>
    <label>END DATE:</label>
    <input  v-model="goal.endDate" require>
    <label>DESCRIPTION:</label>
    <input  v-model="goal.description" require>
    <label>IS THIS COMPLETE:</label>
    <div class="complete">
     YES:<input type="radio" v-model="goal.complete" v-bind:value="true" required>
          NO:<input type="radio" v-model="goal.complete" v-bind:value="false">
          </div>
   
    <button>Add</button>
  </form>
</template> 

<script>
import api from '../../services/api';

function initgoal() {
  return {
    name: '',
    startDate: '',
    endDate: '',
    description: '',
    complete: ''
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
   padding: 5px;
   width:250px;
   background-color: #e8eeef;
   color: black;
   box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
   margin: 2px 0 5px 0;
   font-size: 10px;
   text-align: left;
  }
  input:focus {
    background-color: #f7ffe0;
    border-radius: 5px;
    outline:none;
  }
  .complete{
    display:flex;
    
  }
</style>
