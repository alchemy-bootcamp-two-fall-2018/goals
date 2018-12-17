<template>
  <section class="goals">
    <div class="row">
      <div class="column">
        <h3>CURRENT QUEUE </h3>
        <GoalList v-if="goals && goals.length > 0" 
        :goals="goals"/>
        <p v-else >ADD A GOAL %amp; GET STARTED</p>
        </div>
        <div class="column">
          <h3>ADD A GOAL</h3>
          <AddGoal :onAdd="handleAdd" />
        </div>
      </div> 
  </section>
</template>

<script>
import api from '../../services/api';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
export default {
  data() {
    return {
      goals: null
    };
  },
  components: {
    AddGoal,
    GoalList
  },
  created() {
    api.getGoals()
      .then(goals => {
        this.goals = goals;
      })
      .catch(err => {
        this.error = err;
      });
  },
  methods: {
    handleAdd(goal) {
      return api.addGoal(goal)
        .then(saved => {
          this.goals.push(saved);
        });
    }
  }
  
};
</script>
<style>
.banner{
  margin: 0 auto;
  width:100%;
  background-color:rgb(104, 195, 120);
  padding-top: 1px;
  padding-bottom: 1px;

}
 /* .column {
  float: left;
  width: 50%;
}  */
</style>

