<template>
    <li>
        {{goal.goal}} START <DateDisplay :date="goal.dateStart"/> 
        END <DateDisplay :date="goal.dateEnd"/>
        <button
        @click="handleComplete">MARK AS COMPLETE</button>
    </li>
</template>

<script>
import DateDisplay from '../DateDisplay';
import api from '../../services/api';
export default {
    props: {
        goal: null 
    }, 
    components: {
        DateDisplay
    }, 
    methods: {
        handleComplete() {
            console.log('goal has been completed');
            this.goal.dateEnd = new Date().toLocaleDateString();
            api.updateGoal(this.goal);
        }
    }
};
</script>

<style>


</style>
