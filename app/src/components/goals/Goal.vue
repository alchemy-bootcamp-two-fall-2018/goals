<template>
    <li
    :class="{'strikethrough': strike === true }"
    @click="handleCompleted"
    >{{goal.title}} at {{goal.type}} 
    <p>
    Start Date: <DateDisplay :date="goal.startDate"/>
    </p>
    <p>
    End Date: <DateDisplay :date="goal.endDate"/>
    </p>
    </li>
</template>

<script>
import DateDisplay from '../DateDisplay';

export default {
  props: {
    goal: null
  },
  components: {
    DateDisplay
  },
  data() {
      return {
        strike: false
      }
  },
  methods: {
    handleCompleted() {
      this.strike = this.strike === true ? false : true;
      this.goal.endDate = new Date().toLocaleDateString();
      this.onEdit(this.goal);
    }
  },
};
</script>

<style scoped>
li {
    list-style: none;
    padding: 10px;
}
.strikethrough {
    text-decoration: line-through;
}
</style>
