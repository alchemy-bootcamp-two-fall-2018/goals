<template>
  <div id="app">
    <header>
      <img alt="Gold fish wish" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs6OgBYoZd34-L2GUxkNY0JmU6dc010OvmkYyFpCs0phbGNHDp">
      <span v-if="user">
        Hello {{user.username}}!
      </span>
      <nav v-if="user">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/goals">Goals</RouterLink>
        <a href="#" @click="handleLogOut">Log Out</a>
    </nav>
  </header>

  <main>
    <RouterView v-if="user :user="user"/>
    <Auth v-else
      :onSignUp="handleSignUp"
      :onSignIn="handleSignIn"
    />
  </main>
    
  </div>
</template>

<script>
import api from '../api';
import Auth from './Auth.vue';

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
      return api.ignIn(credentials)
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
    handleLogOut() {
      this.setUser(null);
      this.$router.push('/');
    }
  }
};
</script>

<style>header {
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
  color: rgb(230, 118, 14);
  margin: 3px;
  padding: 3px;
  border: 1px solid black;
}
main {
  padding: 8px;
}
</style>
