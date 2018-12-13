<template>
  <div class="app">
    <header>
      <nav v-if="user">
        <p class=menu-button><RouterLink to="/">Home</RouterLink></p>
        <p class=menu-button><RouterLink to="/goals">Goals</RouterLink></p>
        <p class=menu-button><a href="#" @click="handleLogout">Logout</a></p>
       </nav>
      <span v-if="user">
        <p class="greet">Hello {{user.username}}!</p>
      </span>

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
      // TODO: tell api to forget token
      this.setUser(null);
      this.$router.push('/');
    }
  }
};
</script>

<style>
  header {
    display: flex;
    background: #664e4c;
    color: #c1d37f;
  }
  header a {
    color: #c1d37f;
    text-decoration: none;
  }
  header a:hover {
    color: #f0e2a3;
  }

  body {
    margin: 0;
    padding: 0;
  }

  nav {
    display: flex;
    align-content: center;
  }

  .app {
    margin: 0;
    padding: 0;
  }

  .menu-button {
    margin: 20px;
  }

  .greet {
    color:#f0e2a3;
    font-size: 1.4em;
    margin-top: 16px;
    margin-left: 40px;
  }

</style>
