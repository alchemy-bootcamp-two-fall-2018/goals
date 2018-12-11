
<template>
    <li>
      <strong>Goal: </strong>{{goal.name}} <strong>Type:</strong> {{goal.type}} {{goal.end_date}}
      <!-- <button @click="onUpdate">Complete</button> -->
    </li>
</template>

<script>
export default {
  props: {
    goal: null,
    onEdit: Function
  },
  methods: {
    handleUpdate() {
      this.goal.endDate = new Date();
      this.onEdit(this.goal);
    }
  }
};
</script>

<style lang="postcss" scoped>
li {
  padding: 10px 0;
}
</style>