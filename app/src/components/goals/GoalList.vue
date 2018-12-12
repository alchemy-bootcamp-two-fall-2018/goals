<template>
    <ul v-if="goals">
        <Goal v-for="goal in goals"
            :key="goal.id"
            :goal="goal"
            :onEdit="onEdit" />
    </ul>
</template>

<script>
import Goal from './Goal.vue';

export default {
    props: {
        goals: null,
        onEdit: Function
    },
    components: {
        Goal
    }
};
</script>

<style>
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
