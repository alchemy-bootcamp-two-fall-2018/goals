<template>
  <div class="app">
    <header>
      <span v-if="user">
        Hello {{user.username}}
      </span>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/goals">Goals</RouterLink>
        <!-- <a href="#" @click="handleLogout">Logout</a> -->
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
import Auth from './components/auth/Auth.vue';

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
      console.log('would sign up', profile);
    },
    handleSignIn(credentials) {
      console.log('would sign in', credentials);
    },
 
  }
};
</script>

<style>
header {
  height: 75px;
  background: green;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
body {
  background-color: mediumvioletred;
}
nav a {
  text-align: center;
  margin: 5px 0 0;
  padding: 5px 0;
  border: 1px solid black;
}
main {
    padding: 8px;
}
</style>
