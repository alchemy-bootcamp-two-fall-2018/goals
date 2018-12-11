<template>
    <form @submit.prevent="handleSubmit">
        <label>Goal:
            <input v-model="goal.title" type="text">
        </label>
        <label>Start Date:
            <input v-model="goal.startDate" type="date">
        </label>
        <label>Due Date:
            <input v-model="goal.endDate" type="date">
        </label>
        <button>Submit</button>
    </form>
</template>

<script>
function initGoal() {
    return {
        title: '',
        startDate: '',
        endDate: ''
    };
}
export default {
    props: {
        onAdd: Function
    },
    data() {
        return {
            goal: initGoal()
        };
    },
    methods: {
        handleSubmit(){
            this.onAdd(this.goal)
                .then(() => {
                    this.goal = initGoal();
                });
        }
    }
};
</script>

<style>

</style>
