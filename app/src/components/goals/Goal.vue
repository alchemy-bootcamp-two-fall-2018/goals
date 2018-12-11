<template>
    <li
    @click="toggle"
    :class="{'strikethrough': strike === true }"
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
    toggle() {
      this.strike = this.strike === true ? false : true;
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
