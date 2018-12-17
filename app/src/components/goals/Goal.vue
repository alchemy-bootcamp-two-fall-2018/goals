<template>
  <li class="goal-entries">
    <span class="name">{{goal.name}} </span>
    <span class="start-date"><DateDisplay :date="goal.startDate" /></span>
    <span class="end-date"><DateDisplay :date="goal.endDate" /></span>
    <span class="description">{{goal.description}}</span>
  </li>
</template>

<script>
import DateDisplay from '../shared/DateDisplay';

export default {
  props: {
    goal: null
  },
  components: {
    DateDisplay
  }
};

</script>

<style>
.goal-entries{
  margin:0 auto;
}
.name {
  font-size: 30px;
  font-weight: 500;
  padding-right: 20px;
  
}
.start-date{
 font-weight:200;
 font-size:1em;
 text-align: center;
}
.end-date{
 font-weight:200;
font-size:1em;
text-align: center;
}
.description {
    font-size: 1em;
    color: green;
    float:right;
    
}
.completed {
    font-color: tomato;
}
</style>
