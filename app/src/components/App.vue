<template>
  <div id="app">
    <RouterLink to="/"><img alt="Goals logo" class="logo" src="../assets/logo.png"></RouterLink>
    <header>
      <span v-if="user">Hello, {{user.username}}!</span>
      <nav v-if="user">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/goals">Goals</RouterLink>
        <a href="#" @click="handleLogout">Logout</a>
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
import api from '../services/api';
import Auth from './auth/Auth';

export default {
  name: 'app',
  data() {
    return {
      user: null
    };
  },
  components: {
    Auth
  },
  created() {
    const json = window.localStorage.getItem('profile');
    if(json) {
      this.setUser(JSON.parse(json));
    }
  },
  methods: {
    handleSignUp(profile) {
      return api.signUp(profile)
        .then(user => {
          this.setUser(user);
        });
    },
    handleSignIn(credentials) {
      return api.signIn(credentials)
        .then(user => {
          this.setUser(user);
        });
    },
    setUser(user) {
      this.user = user;
      if(user) {
        api.setToken(user.token);
        window.localStorage.setItem('profile', JSON.stringify(user));
      }
      else {
        api.setToken();
        window.localStorage.removeItem('profile');
      }
    },
    handleLogout() {
      this.setUser(null);
      this.$router.push('/');
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
}
img.logo {
  width: 10%;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: cyan;
}
</style>
