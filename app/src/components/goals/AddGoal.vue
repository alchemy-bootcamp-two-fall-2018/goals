<template>
    <div>
        <form @submit.prevent="handleSubmit">
            <label>Goal:</label>
                <input v-model="goal.goal">
            <label>StartDate:</label>
                <input v-model="goal.dateStart" type="date">
             <label>EndDate:</label>
                <input v-model="goal.dateEnd" type="date">
            <button>ADD</button>
        </form>
    </div>
</template>

<script>
function initGoal() {
    return {
        goal: ''
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
