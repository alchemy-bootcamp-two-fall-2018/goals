<template>
  <section>
    <div v-if="method === signin">
      <h2>Sign In</h2>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      method: 'signin',
      profile: {
        username: '',
        password: ''
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
