<template>
  <div>
    <li>
      {{goal.name}} due {{goal.start_date}}
    </li>
  </div>
</template>

<script>
// import DateDisplay from '../dates/DateDisplay';

export default {
  props: {
    goal: null
  }
};
</script>

<style>
template {
  display: block;
  border: 1px solid purple;
}
</style>
