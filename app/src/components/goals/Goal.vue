<template>
    <li>
        {{goal.goal}} START 
        <DateDisplay :date="goal.dateStart"/> 
        END 
        <DateDisplay :date="goal.dateEnd"/>
        
        <button
        @click="handleComplete">MARK AS COMPLETE</button>
    </li>
</template>

<script>
import DateDisplay from '../DateDisplay';
// import api from '../../services/api';
export default {
    props: {
        goal: null, 
        onUpdate: Function
    }, 
    components: {
        DateDisplay
    },
    methods: {
        handleComplete() {
            this.goal.dateEnd = new Date().toLocaleDateString();
            this.onUpdate(this.goal);
            // api.updateGoal(this.goal)
            //     .then(goal => {
            //         this.goal = goal;
            //     });
        }
    }
};

</script>

<style>


</style>
