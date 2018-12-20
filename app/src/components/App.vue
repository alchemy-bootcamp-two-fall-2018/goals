<template>
  <div id="app">
    <header>
      <h2><strong>GOAL FOR IT</strong></h2>
      <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
      <nav v-if="user">
        <RouterLink to="/">HOME</RouterLink>
        <RouterLink to="/goals">GOALS</RouterLink>
        <a href="#" @click="handleLogout">LOGOUT</a>
      </nav>
    </header>
    <main>
      <RouterView v-if="user" :user="user" />
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
  data() {
    return {
      user:null
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
@import url('https://fonts.googleapis.com/css?family=Varela+Round');

header{
  height: 75px;
  background: #3cae69;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
header {
  text-align: center;
  }
h2 {
  font-family: 'Varela Round', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #615e5e;
      font-size: 30px;
      margin-top: 60px;
      margin-bottom: 60px;
      margin-left:60px;
  }
nav a {
  text-decoration: none;
  color: black;
  margin: 3px;
  padding: 3px;
  border: 1px solid black;
}
main {
  padding: 8px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #3d7453;
  margin-top: 60px;
}
</style>
