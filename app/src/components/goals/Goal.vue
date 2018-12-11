<template>
    <li
    @click="toggle"
    :class="{'strikethrough': strike === true }"
    >{{goal.title}} at {{goal.type}}</li>
</template>

<script>
export default {
  props: {
    goal: null
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
