
<template>
    <li>
      <strong>Goal: </strong>{{goal.name}} 
      <strong>Type:</strong> {{goal.type}} {{new Date(goal.startDate).toLocaleDateString()}}{{new Date(goal.endDate).toLocaleDateString()}} {{goal.completed}}
      <button @click="onUpdate">Complete</button>
    </li>
</template>

<script>
export default {
  props: {
    goal: null,
    onEdit: Function
  },
  methods: {
    onUpdate() {
      this.goal.endDate = new Date().toLocaleDateString();
      this.goal.completed = true;
      this.onEdit(this.goal);
    }
  }
};
</script>

<style lang="postcss" scoped>
li {
  padding: 50px;
  width: 120px;
  background: rgba(71,99,114, 0.4);
  margin: 8px;
}
</style>