<template>
    <li>
        <p>{{goal.title}}</p>
    </li>
</template>

<script>
export default {
    props: {
        goal: Object
    }
};
</script>

<style>
li {
    padding: 20px;
    font-weight: bold;
    
}
</style>
