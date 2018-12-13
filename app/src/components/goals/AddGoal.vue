<template>
<section>
    <h2>Add a New Goal!</h2>
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
</section>
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
form {
    display: flex;
    flex-direction: column;
    margin: auto;
    justify-content: center;
}
button {
    width: 50px;
    margin: auto;
    margin-top: 5px;
    padding: 2px;
}
</style>
