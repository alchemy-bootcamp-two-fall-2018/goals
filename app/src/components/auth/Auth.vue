<template>
  <section>
    <div v-if="method === 'signin'">
      <h2>Sign-in</h2>
      <p>
        Register?
        <button @click="method = 'signup'">Sign-up</button>
      </p>

      <form @submit.prevent="this.onSignIn">
        <label>
          Username:
          <input v-model="profile.username" required>
        </label>

        <label>
          Password:
          <input type="password" v-model="profile.password" required>
        </label>

        <label>
          <button @click="method = 'signin'">Sign-in</button>
        </label>
      </form>
    </div>

    <div v-else>
      <h2>Sign-up</h2>
      <p>
        Already have an account?
        <button @click="method = 'signin'">Sign-in</button>
      </p>
    </div>

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
      method: 'signin',
      profile: {
        username: '',
        password: ''
      }
    };
  }
};
</script>

<style>
body {
  font-family: 'Courier New', Courier, monospace;
}

label {
  display: block;
  padding: 5px;
}
</style>