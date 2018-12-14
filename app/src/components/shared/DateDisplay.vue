<template>
    <span>
        {{formatedDate}}
    </span>
</template>

<script>
export default {
  props: {
    date: String
  },
  //need something here but what?
  data() {
    return {
      goal: null
    };
  },
  computed: {
    formatedDate() {
      return new Date(this.date).toLocaleDateString();
    }
  }
};
</script>

<style>

</style>
