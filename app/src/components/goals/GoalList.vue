<template>
    <ul v-if="goals">
        <Goal  v-for="goal in goals"
        :key="goal.id"
        :goal="goal"
        :onUpdate="onUpdate"
        />

    </ul>
</template>

<script>
import Goal from './Goal';
export default {

    props: {
        goals: null,
        onUpdate: Function
    }, 
    components: {
        Goal
    }

};
</script>

<style>

</style>
