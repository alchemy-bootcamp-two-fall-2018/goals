<template>
  <li>
    <p>{{goal.title}}</p>
    <p>Start Date: {{goal.startDate}}</p>
    
    <div v-if="goal.endDate">
      Completed Date:
      {{goal.endDate}}
    </div>
    <div v-else>
      NOT COMPLETED
    </div>

    <button @click="handleEdit">Update</button>
 
  </li>
</template>

<script>
// import api from '../../services/api';

export default {
  props: {
    goal: null
  },
  // created() {
  //   api.getGoals(this.$route.params.id)
  //     .then(goal => {
  //       this.goal = goal;
  //     });
  // },
  // // methods: {
  //   handleEdit(goal) {
  //     return api.updateGoal(goal)
  //       .then(updated => {
  //         this.goal = updated;
  //       });
  //   }
  // }
};
</script>

<style scoped>
  li {
    list-style-type: none;
    border: 2px solid black;
    padding: 10px 0;
    margin: 10px 10px;
    width: 350px;
  }


</style>
