<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <label>Goal:</label>
            <input v-model="goal.goal">
             <label>Date:</label>
            <input v-model="goal.date">
            <button>ADD</button>
        </form>
    </div>
</template>

<script>
function initGoal() {
    return {
        goal: '', 
        date: ''
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
        handleSubmit() {
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
