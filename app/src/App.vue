<template>
  <div id="app">

    <header>
      <span v-if="user">
         HELLO {{user.username}}
      </span>
      <nav v-if="user">
        <RouterLink to="/">HOME</RouterLink>
        <button @click="logout()"> Logout </button>
      </nav>
    </header>

    <main>
      <RouterView v-if="user" :user="user"></RouterView>
      <Auth v-else
        :onSignUp="handleSignUp"
        :onSignIn="handleSignIn"/>
    </main>

  </div>
</template>

<script>
import api from '../src/services/api.js';
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
  created() {
    const json = window.localStorage.getItem('profile');
    if(json){
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
        api.setToken(user.id);
        window.localStorage.setItem('profile', JSON.stringify(user));
      }
      else {
        api.setToken();
        window.localStorage.removeItem('profile');
      }
    },
    logout() {
      window.localStorage.clear();
      this.user = null;
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
