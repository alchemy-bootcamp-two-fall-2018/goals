<template>
  <div id="app">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/goals">Goals</RouterLink>
      </nav>
    </header>
    <RouterView v-if="user" :user="user"></RouterView>
    <Auth v-else 
      :onSignUp="handleSignUp"
      :onSignIn="handleSignIn"/>
  </div>
</template>

<script>
import Auth from './auth/Auth';
export default {
    components: {
        Auth
    },
    data() {
        return {
            user:null
        };
    },
    methods: {
        handleSignUp() {

        },
        handleSignIn() {

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
nav {
  display: flex;
  justify-content: space-around;
}
</style>
