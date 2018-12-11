<template>
    <div>
        <h1>My Goals</h1>
        <AddGoal :onAdd="handleAdd" />
        <GoalList :goals="goals"/>
    </div>
</template>

<script>
import api from '../../services/api';
import GoalList from './GoalList.vue';
import AddGoal from './AddGoal.vue';

export default {
    data() {
        return {
            goals: null
        };
    },
    components: {
        GoalList,
        AddGoal
    },
    created() {
        api.getGoals()
            .then(goals => {
                this.goals = goals;
            })
            .catch(err => {
                this.error = err;
            });
    },
    methods: {
        handleAdd(goal) {
            return api.addGoal(goal)
                .then(saved => {
                    this.goals.push(saved);
                });
        }
    }
};
</script>

<style>

</style>
