<template>
  <li>
    <p>
      <strong>Title:</strong> {{goal.title}}
    </p>
    <p>
      <strong>Type:</strong> {{goal.type}}
    </p>
    <div>
      <span><strong>Start:</strong>{{goal.startDate}}</span>
      <!-- <DateDisplay :date="goal.startDate"/> -->
      <br>
      <span><strong>End:</strong>{{goal.endDate}}</span>
      <!-- <DateDisplay :date="goal.endDate"/> -->
    </div>
    <p v-if="goal.completed === true" class="completed">Completed</p>
    <p v-else class="overdue">In Progress</p>
    <button @click="handleUpdate" v-if="goal.completed === false">Mark Complete</button>

    <!-- <EditGoal :onEdit="handleEdit" :goal="goal"/> -->
    <!-- <button @click="handleDelete">Delete</button> -->
  </li>
</template>

<script>
// import api from '../../services/api';
// import DateDisplay from '../shared/DateDisplay';
// import EditGoal from './EditGoal';

export default {
  name: 'goal',
  props: {
    goal: null,
    onEdit: Function
  },
  components: {
    // DateDisplay,
    // EditGoal
  },
  methods: {
    // handleDelete() {
    //   api.deleteGoal(this.goal.id)
    //     .then(() => {
    //       console.log(this.goal.id);
    //       this.$router.push('/goals');
    //     });
    // },
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
p.completed {
  font-style: italic;
  color: green;
}
</style>
