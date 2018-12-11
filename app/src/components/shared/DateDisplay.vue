<template>
  <span>
    {{formattedDate}}
  </span>
</template>

<script>

export default {
  props: {
    date: String
  },
  data() {
    return {
      goal: null
    };
  },
  computed: {
    formattedDate() {
      return new Date(this.date).toLocaleDateString();
    }
  }
};
</script>