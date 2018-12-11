<template>
  <div class="app">
      <header>
          <img src="./assets/logo.png">
          <span v-if="user">
              Hello {{user.username}}!
          </span>
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
import api from './services/api';
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
    handleLogout() {
      this.setUser(null);
      this.$router.push('/');
    }
  }
};
</script>

<style>
header {
  height: 75px;
  background: lightsteelblue;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
header img {
  height: 100%;
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
</style>
