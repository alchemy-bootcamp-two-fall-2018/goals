<template>
  <li>
    <p>
      <strong>Title:</strong> {{goal.title}}
    </p>
    <p>
      <strong>Type:</strong> {{goal.type}}
    </p>
    <div>
      <span><strong>Start:</strong></span>
      <DateDisplay :date="goal.startDate"/>
      <br>
      <span><strong>End:</strong></span>
      <DateDisplay :date="goal.endDate"/>
    </div>
    <p v-if="goal.completed === true" class="completed">Completed</p>
    <p v-else class="in-progress">In Progress</p>
    <button @click="handleUpdate" v-if="goal.completed === false" class="complete">Mark Complete</button>
    <button @click="handleDelete" class="delete">Delete</button>
    <!-- <EditGoal :goal="goal" :onEdit="handleEdit"/> -->
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
          console.log(this.goal.id);
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
  margin-top: 5px;
  padding: 3px 0px 8px 0px;
}
li:hover {
  outline: 1px dashed cyan;
}
p {
  margin: 0;
  font-weight: 100;
}
p.in-progress {
  color: red;
}
p.completed {
  font-style: italic;
  color: green;
}
button.delete:hover {
  color: purple;
}
button.complete:hover {
  color: green;
}
</style>
