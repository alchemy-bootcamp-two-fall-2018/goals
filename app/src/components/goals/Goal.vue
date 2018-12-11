<template>
    <li>
        {{goal.goal}} By {{goal.date}}
    </li>
</template>

<script>
export default {
    props: {
        goal: null 
    }
};
</script>

<style>

</style>
