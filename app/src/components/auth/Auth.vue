<template>
    <div class="signin" v-if="method === 'signin'">
        <h3>SIGN IN</h3>
        <p>NEED TO REGISTER?
            <button @click="method = 'signup'">SIGN UP</button>
        </p>
        <form @submit.prevent="handleSignInSubmit(profile)">
            <h4>SIGN INTO YOUR EXISTING ACCOUNT
                </h4>
            <label>
                USERNAME:
                <input v-model="profile.username" v-focus required>
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
    <div class="signup" v-else>
        <h3>SIGN UP</h3>
        <p>ALREADY HAVE AN ACCOUNT?
            
            <button @click="method = 'signin'">SIGN IN</button>
            
        </p>
        <form @submit.prevent="handleSignUpSubmit(profile)">
            <h3>REGISTER</h3>
            <label>
            FIRST NAME:
                <input v-model="profile.first" v-focus required>
            </label>
            <label>
                LAST NAME:
                <input v-model="profile.last" required>
            </label>
            <label>
                EMAIL:
                <input v-model="profile.email" required>
            </label>
                <label>
                    USERNAME:<pre v-if="error">{{error}}</pre>
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
p {
    margin: 0 auto;
    margin-bottom: 19px;
    width: 330px;
    padding:10px;
    background-color: rgba(182, 182, 182, 0.4);
    }
 form {
    padding:10px;
    margin: 0 auto;
    align-content: center;
    width:330px;
    background-color: rgba(182, 182, 182, 0.4);
    }

h3 {
    text-align: center;
    }    
.signup {}

input {
   display: block;
   padding: 10px;
   width:300px;
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
  pre{color:rgb(201, 94, 94);}
</style>
