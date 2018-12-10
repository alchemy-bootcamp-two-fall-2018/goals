<template>
  <div class="app">
    <header>
      <span v-if="user">Hello {{user.username}}</span>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/sign">SignIn/Up</RouterLink>
      </nav>

      <main>
        <RouterView :onSignIn="handleSignIn"></RouterView>
      </main>
    </header>


  </div>
</template>

<script>

export default {
  data() {
    return {
      user: null
    };
  },
  methods: {
    handleSignIn(user) {
      console.log(user);
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
