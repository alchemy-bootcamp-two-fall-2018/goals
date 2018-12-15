<template>
    <section>
        <div v-if="method === 'signin'">
            <h2>SIGN IN</h2>
            <p>NEED TO REGISTER?
                <button @click="method = 'signup'">SIGN UP</button>
            </p>
            <form @submit.prevent="this.onSignIn">
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
            <form @submit.prevent="onSignIn(profile)">
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
      profile: {
        username: '',
        password: ''   
      } 
    };
  }
};
</script>

<style>

</style>
