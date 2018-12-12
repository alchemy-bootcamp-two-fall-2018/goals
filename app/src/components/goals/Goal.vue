<template>
    <li><span class="goal-title"> {{goal.title}} -- </span> 
    Start Date: {{goal.startdate}} 
    End Date: {{goal.enddate}}
    <button @click="handleCompleted">Done</button>
    </li>
</template>

<script>
export default {
  props: {
    goal: null,
    onEdit: Function
  },
  methods: {
    handleCompleted() {
      this.goal.enddate = new Date().toLocaleDateString();
      this.onEdit(this.goal);
    }
  }
};
</script>

<style>
li {
  padding: 10px 0;
}

.goal-title {
    font-size: 1.2em;
    font-weight: 600;
}
</style>

