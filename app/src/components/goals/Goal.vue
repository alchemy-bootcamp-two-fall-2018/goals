<template>
<!-- @click="handleComplete" -->
    <li> 
      <div>
         Goal: {{goal.title}}
      </div>
      <div>
        Start  
        <DateDisplay 
          :date="goal.startDate"/>
      </div>
      <div v-if="false">
         Completed on:
        <DateDisplay 
          :date="goal.endDate"/>
      </div >
      <div>
        <button>Finish</button>
      </div>
    </li>
</template>

<script>
import DateDisplay from '../shared/DateDisplay';

export default {
  props: {
    goal: null,
  },
  components: {
    DateDisplay
  }
  // created: {
  //api update
  // },
  // methods: {
  //handleComplete
  //pass from parent
  // }
};
</script>

<style scoped>
li {
  border: 1px solid black;
}

</style>
