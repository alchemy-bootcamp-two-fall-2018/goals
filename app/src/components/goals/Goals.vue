<template>
  <section>
        <h2>TODO</h2>
        <h3>add new goal</h3>
        <GoalList v-if="goals && goals.length > 0"
            :goals="goals"/>
        <p v-else>ADD A NEW GOAL YOU LAZY SOAB</p>
  </section>
</template>

<script>
import api from '../../services/api';
import AddGoal from './AddGoal';
import GoalList from './GoalList';

export default {
    data() {
        return {
            goals: null
        };
    }, 

    components: {
        AddGoal,
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
