<template>
    <section class="signin">
        <div v-if="method === 'signin'">
            <h2>SIGN IN</h2>
            <p>NEED TO REGISTER?
                <button @click="method = 'signup'">SIGN UP</button>
            </p>
            <form @submit.prevent="handleSignInSubmit(profile)">
                <label>
                    USERNAME:
                    <input v-model="profile.username" required>
                </label>
                <label>
                    PASSWORD:
                    <input type="password" v-model="profile.password" required>
                </label>
                <label>
                    <button>SIGN IN</button>
                </label>
            </form>
            </div>
            <div v-else>
                <h2>SIGN UP</h2>
                <p>ALREADY HAVE AN ACCOUNT?
                    <button @click="method = 'signin'">SIGN IN</button>
                </p>
                <form @submit.prevent="handleSignUpSubmit(profile)">
                    <label>
                        USERNAME:
                        <input v-model="profile.username" required>
                    </label>
                    <label>
                        PASSWORD:
                        <input type="password" v-model="profile.password" required>
                    </label>
                    <label>
                        <button>SIGN UP</button>
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

<style>
.signin{
    display:inline-block;
}
</style>
