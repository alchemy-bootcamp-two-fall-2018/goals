<template>
  <div class="app">
    <header>
      <span v-if="user">Hello {{user.username}}</span>
      <nav>
        <RouterLink v-if="user" to="/">Home</RouterLink>
        <RouterLink to="/sign">SignIn/Up</RouterLink>
      </nav>

      <main>
        <Sign v-if="!user"
        :onSignIn="handleSignIn"
        :onSignUp="handleSignUp"/>
        <RouterView v-else></RouterView>
      </main>
    </header>


  </div>
</template>

<script>

import Sign from './components/Sign';
import api from './services/api';

export default {

  data() {
    return {
      user: null
    };
  },
  components: {
    Sign
  },
  methods: {
    handleSignIn(user) {
      console.log(user);
    },
    handleSignUp(user) {
      api.addUser(user);
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
