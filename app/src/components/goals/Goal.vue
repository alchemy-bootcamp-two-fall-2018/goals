<template>
    <li>
        <p>{{goal.title}}</p>
        <p v-if="goal.completed === true">Completed? {{goal.completed}}</p>
        <button @click.prevent="handleUpdate">Mark as completed!</button>
    </li>
</template>

<script>
export default {
    props: {
        goal: Object
    },
    methods: {
        handleUpdate() {
            console.log(this.goal);
            console.log('true', this.goal); 
            this.goal.completed = true;
        }
    }
};
</script>

<style>
li {
    padding: 20px;
    font-weight: bold;   
}
button {
    width: 50px;
}
</style>
