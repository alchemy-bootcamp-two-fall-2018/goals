<template>
  <section>
    <h2>Welcome to the Goals app!</h2>
    <div v-if="method === 'signin'">
      <h2>Sign In</h2>
      <p>
        Need to register?
        <button @click="method = 'signup'">Sign Up</button>
      </p>
      <form @submit.prevent="handleSignInSubmit(profile)">
        <fieldset>
          <label>
            Username:
            <input v-focus v-model="profile.username" required>
          </label>
          <label>
            Password:
            <input type="password" v-model="profile.password" required>
          </label>
          <label>
            <button>Sign In</button>
          </label>
        </fieldset>
      </form>
    </div>
    <div v-else>
      <h2>Sign Up</h2>
      <p>
        Already have an account?
        <button @click="method = 'signin'">Sign In</button>
      </p>
      <form @submit.prevent="handleSignUpSubmit(profile)">
        <fieldset>
          <label>
            Username:
            <input v-model="profile.username" required>
          </label>
          <label>
            Password:
            <input type="password" v-model="profile.password" required>
          </label>
          <br>
          <label>
            First name:
            <input v-model="profile.firstName" required>
          </label>
          <label>
            Last name:
            <input v-model="profile.lastName" required>
          </label>
          <label>
            <br>
            <button>Sign Up</button>
          </label>
        </fieldset>
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