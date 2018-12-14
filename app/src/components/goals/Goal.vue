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
        <div>
         End
           <DateDisplay v-if="false" 
              :date="goal.endDate"/>
       </div>
      <button>Finish</button>
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
