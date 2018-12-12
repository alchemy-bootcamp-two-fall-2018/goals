<template>
  <div id="app">
    <header>
      <h1>GOALS</h1>
      <nav v-if="user">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/goals">Goals</RouterLink>
        <a href="#" @click="handleLogout">Logout</a>
      </nav>
    </header>

    <main>
      <RouterView v-if="user" v-bind:user="user"/>
      <Auth v-else
        v-bind:onSignUp="handleSignUp"
        v-bind:onSignIn="handleSignIn"
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
}
nav a {
  text-decoration: none;
  color: black;
  padding: 5px;
  border: 1px solid black;
  margin: 0px 10px;
  border-radius: 5px;
  background: white;
}
header {
  background: black;
  color: white;
  height: 130px;
  margin-top: 0px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
h1 {
  margin: -20px 0px 10px 0px;
  font-size: 3em;
}
body {
  padding: 0px;
  margin: 0px;
}
</style>
