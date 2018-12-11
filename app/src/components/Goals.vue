<template>
    <div>
        <h1>My Goals</h1>
        <GoalList :goals="goals"/>
    </div>
</template>

<script>
import api from '../services/api.js';
import GoalList from './GoalList.vue';
export default {
    data() {
        return {
            goals: null
        };
    },
    components: {
        GoalList
    },
    created() {
        api.getGoals()
            .then(goals => {
                this.goals = goals;
            })
            .catch(err => {
                this.error = err;
            });
    }
};
</script>

<style>

</style>
