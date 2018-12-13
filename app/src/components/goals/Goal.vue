<template>
    <li>
        {{goal.goal}} By {{goal.dateStart}} Finish by {{goal.dateEnd}}
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
