<template>
  <section>
    <div class="sign" v-if="method === 'signin'">
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

    <div class="sign" v-else>
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
          Password:
          <input type="password" v-model="profile.password" required>
        </label>
        <label>
          First Name:
          <input v-model="profile.firstname" required>
        </label>
        <label>
          Last Name:
          <input v-model="profile.lastname" required>
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
        password: '',
        firstname: '',
        lastname: ''
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

<style>

label {
  display: block;
  padding: 10px 0;
}

pre {
  color: red;
}

.sign {
    background: #f0e2a3;
    width: 30%;
    padding: 10px;
    border: 1px solid black;
}

</style>
