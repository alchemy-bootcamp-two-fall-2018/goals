<template>
  <section>
    <form v-if="method === 'signin'" @submit.prevent="this.onSignIn">
      <label>
        Username:
        <input v-model="username" required>
      </label>

      <label>
        Password:
        <input type="password" v-model="username" required>
      </label>
    </form>
  </section>
</template>

<script>
export default {
  props: {
    onSignUp: Function,
    onSignIn: Function
  },
  data() {
    return {
      method: 'signin'
    };
  }
};
</script>

<style>

</style>
