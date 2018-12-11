<template>
  <div>
    <header>
      <h1>Goals!</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/">Goals</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView v-if="user" :user="user"/>
      <Auth v-else
        :onSignUp="handleSignUp"
        :onSignIn="handleSignIn"
        />
    </main>
  </div>
</template>

<script>
import Auth from './components/auth/Auth';

export default {
  data() {
    return {
      user: null
    };
  },
  components: {
    Auth
  },
  methods: {
    handleSignUp(user) {
      return user;
    },
    handleSignIn(credentials) {
      console.log('sign in', credentials);
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
