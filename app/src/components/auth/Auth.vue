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
                <h3>ALREADY HAVE AN ACCOUNT?</h3>
                    <p>
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
input {
   display: block;
   padding: 10px;
   width:250px;
   background-color: #e8eeef;
   color: black;
   box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
   margin: 5px 0 10px 0;
   font-size: 15px;
   text-align: left;
  }
  input:focus {
    background-color: #f7ffe0;
    border-radius: 5px;
    outline:none;
  }
</style>
