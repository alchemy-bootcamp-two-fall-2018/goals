<template>
  <li>
    <p>
      <strong>Title:</strong> {{goal.title}}
    </p>
    <p>
      <strong>Type:</strong> {{goal.type}}
    </p>
    <span><strong>Start:</strong></span>
    <DateDisplay :date="goal.startDate"/>
    <br>
    <span><strong>End:</strong></span>
    <DateDisplay :date="goal.endDate"/>
    <p v-if="goal.completed === true">Completed</p>
    <p v-else>Overdue</p>

    <!-- <p v-if="goal.endDate" class="overdue">Overdue</p>
    <p v-else>Completed</p> -->

    <!-- <EditGoal :onEdit="handleEdit" :goal="goal"/> -->
    <button @click="handleUpdate">Mark Complete</button>
    <button @click="handleDelete">Delete</button>
  </li>
</template>

<script>
import api from '../../services/api';
import DateDisplay from '../shared/DateDisplay';
// import EditGoal from './EditGoal';

export default {
  name: 'goal',
  props: {
    goal: null,
    onEdit: Function
  },
  components: {
    DateDisplay,
    // EditGoal
  },
  methods: {
    handleDelete() {
      api.deleteGoal(this.goal.id)
        .then(() => {
          this.$router.go();
        });
    },
    // handleEdit(goal) {
    //   return api.updateGoal(goal)
    //     .then(updated => this.goal = updated);
    // },
    handleUpdate() {
      this.goal.completed = true;
      this.onEdit(this.goal);
    }
  }
};
</script>

<style scoped>
li {
  border: 1px solid red;
}
p {
  margin: 0;
  font-weight: 100;
}
p.overdue {
  color: red;
}
</style>
