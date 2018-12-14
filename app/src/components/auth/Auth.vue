<template>
  <section>
    <div v-if="method === 'signin'">
      <h2>Sign In</h2>

      <p>
        Need to register?
        <button @click="method = 'signup'">Sign Up</button>
      </p>

      <form @submit.prevent="handleSignInSubmit(profile)">
        <label>
          Username:
          <input v-model="profile.username" required>
        </label>
        <label>
          Password:
          <input type="password" v-model="profile.password" required>
        </label>
        <label>
          <button>Sign In</button>
        </label>
      </form>
    </div>

    <div v-else>
      <h2>Sign Up</h2>

      <p>
        Already have an account?
        <button @click="method = 'signin'">Sign In</button>
      </p>

      <form @submit.prevent="handleSignUpSubmit(profile)">
        <label>
          Username:
          <input v-model="profile.username" required>
        </label>
        <label>
          First Name:
          <input v-model="profile.firstName" required>
        </label>
        <label>
          Last Name:
          <input v-model="profile.lastName" required>
        </label>
        <label>
          Email:
          <input v-model="profile.email" required>
        </label>
        <label>
          Password:
          <input v-model="profile.password" required>
        </label>
        <label>
          <button>Sign Up</button>
        </label>
      </form>
    </div>
    <pre v-if="error">{{error}}</pre>
  </section>
</template>

<script>
export default {
  props: {
    onSignIn: Function,
    onSignUp: Function
  },
  data() {
    return {
      method: 'signin',
      error: '',
      profile: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    handleSignInSubmit() {
      this.error = '';

      this.onSignIn(this.profile)
        .catch(error => {
          this.error = error.error;
        });
    },
    handleSignUpSubmit() {
      this.error = '';

      this.onSignUp(this.profile)
        .catch(error => {
          this.error = error.error;
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
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
} */
</style>
