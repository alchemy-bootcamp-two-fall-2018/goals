<template>
    <li> 
        {{goal.title}}
    </li>
</template>

<script>
export default {
  props: {
    goal: null
  }
};
</script>

<style scoped>
li {
  border: 1px solid black;
}

</style>
