<template>
  <div class="app">
    <header>
      <h1>Goals</h1>
      <span v-if="user">
        Hello {{user.username}}!
      </span>
      <div class="nav">
        <nav v-if="user">
          <RouterLink id="home" to="/">Home</RouterLink>
          <RouterLink id="goals" to="/goals">Goals</RouterLink>
          <a href="#" @click="handleLogout" id="logout">Logout</a>
        </nav>
      </div>
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  background-color: black;
}

h1{
  color: aliceblue;
  padding: 10px;
}

#home {
  color: lightblue;
  padding: 10px;
}
#goals {
  color: lightblue;
  padding: 10px;
}
#logout {
  color: lightblue;
  padding: 10px;
}
</style>
