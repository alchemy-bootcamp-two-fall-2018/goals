<template>
    <section>
        <div v-if="method === 'signin'">
            <h2>SIGN IN</h2>
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
            Sign up comming soon
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
