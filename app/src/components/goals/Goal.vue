<template>
  <li>
    Name: {{goal.name}}, Type: {{goal.type}}
    <button @click="handleDelete">Delete</button>
  </li>
</template>

<script>
import api from '../../services/api';

export default {
  name: 'goal',
  props: {
    goal: null
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
</style>
