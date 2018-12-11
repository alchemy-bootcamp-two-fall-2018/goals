<template>
  <section class="goals">
    <h2>My Goals</h2>
    <h3>Add a New Goal</h3>
    <p>Todo: AddGoals component here</p>
    <AddGoal/> <!--:onAdd="handleAdd"-->
    <h3>Current Goals</h3>
    <p>Todo: GoalList component here with if/else</p>
    <GoalList /><!--v-if="goals && goals.length > 0" :goals="goals"-->
    <!-- <p v-else>Add a goal to get started!</p> -->
  </section>
</template>

<script>
import AddGoal from './AddGoal';
import GoalList from './GoalList';

export default {
  name: 'goals',
  components: {
    AddGoal,
    GoalList
  }
};
</script>