<template>
  <section>
    <h2>Add a Goal:</h2>
    <form @submit.prevent="onAdd">
      <label>Title:
        <input v-model="goal.title">
      </label>
      <label>Start Date:
        <input type="date" v-model="goal.stDate">
      </label>
      <!-- <label>End Date:
        <input type="date" v-model="goal.enDate">
      </label> -->
      <button>Add</button>
    </form>

    <ul v-if="goals">
      <li v-for="g in goals" :key="g.id">{{g.title}}
        <form @submit.prevent="onComplete(g.id)">
          <label>End Date:
            <input type="date" v-model="enDate">
          </label>
          <button>Mark Completed</button>
        </form>
      </li>
    </ul>
  </section>

</template>

<script>

import api from '../services/api';

export default {
  data() {
    return {
      goal: {},
      goals: null,
      enDate: ''
    };
  },
  created() {
    api.getGoals()
      .then(goals => this.goals = goals);
  },
  methods: {
    onAdd() {
      api.addGoal(this.goal)
        .then(newGoal => {
          this.goals.push(newGoal);
        });
    },
    onComplete(id) {
      api.markComplete(id, this.enDate)
        .then(goals => console.log('goals', goals));
    }
  }
};
</script>

<style>

</style>
