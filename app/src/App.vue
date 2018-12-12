<template>
  <div>
    <header>
      <h1>Goals!</h1>
      <nav v-if="user">
      <span>
        Hello {{user.username}}
      </span>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/goals">Goals</RouterLink>
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
import api from './components/services/api';
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
    if(json) {
      this.setUser(JSON.parse(json));
    }
  },
  methods: {
    handleSignUp(user) {
      return api.signUp(user)
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
