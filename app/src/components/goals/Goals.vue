<template>
    <div>
        <h1>My Goals</h1>
        <AddGoal :onAdd="handleAdd" />
        <GoalList 
            :goals="goals"
            :onEdit="handleEdit"/>
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
        },
        handleEdit(goal) {
            return api.updateGoal(goal)
                .then(updated => {
                    const index = this.goals.findIndex((goal) => goal.id === updated.id);
                    this.goals.splice(index, 1, updated);
                });
        }
    }
};
</script>

<style>

</style>
