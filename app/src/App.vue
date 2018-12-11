<template>
  <div id="app">

    <header>
      <span >
       
      </span>
      <nav>
        <RouterLink to="/"> HOME </RouterLink>
      </nav>
    </header>

    <main>
      <RouterView></RouterView>
      <Auth
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
