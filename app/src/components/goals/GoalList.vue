<template>
  <ul v-if="goals" class="main">
  <li class= "goals-list">
    <ul class="goal-queue">
      <li>
        <div id="name">
          <Goal v-for="goal in goals" :key="goal.id" :goal="goal"/>
        </div>
      </li>
    </ul>  
  </li>
</ul>
  
      
    
        
 

</template>

<script>
import Goal from './Goal';
export default {
  props: {
    goals: null
  },
  components: {
    Goal
  }
};
</script>

<style>
.goals-list {
  margin:0 auto;
  width:750px;
  }  
ul {list-style-type: none;}
.start-time {color:green;}
.goal-queue li:nth-child(odd) { background: #ffffff;  }
.goal-queue li:nth-child(even) { background: #bdbdbd;  }
.goal-queue li:hover:nth-child(odd) { background: rgba(232, 131, 166, 0.3); }
.goal-queue li:hover:nth-child(even) { background: #e87fa3; }
.clip {width:20%}
</style>