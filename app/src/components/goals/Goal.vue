<template>
  <li>
    <p><strong>Title:</strong> {{goal.title}}</p>
    <p><strong>Type:</strong> {{goal.type}}</p>
    <span><strong>Start:</strong></span>
    <DateDisplay :date="goal.startDate"/>
    <br>
    <span><strong>End:</strong></span>
    <DateDisplay :date="goal.endDate"/>
    <br>
    <button @click="handleDelete">Delete</button>
  </li>
</template>

<script>
import api from '../../services/api';
import DateDisplay from '../shared/DateDisplay';

export default {
  name: 'goal',
  props: {
    goal: null
  },
  components: {
    DateDisplay
  },
  methods: {
    handleDelete() {
      api.deleteGoal(this.goal.id)
        .then(() => {
          // this.$router.push('/goals');
          this.$router.go();
        });
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
</style>
