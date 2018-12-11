<template>
  <div id="app">
    <RouterLink to="/"><img alt="Goals logo" class="logo" src="../assets/logo.png"></RouterLink>
    <header>
      <span>Hello, user.username!</span>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/goals">Goals</RouterLink>
        <a href="#">Logout</a>
      </nav>
    </header>
    <main>
      <RouterView/>
      <!-- <Auth/> -->
    </main>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
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
}
img.logo {
  width: 10%;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
</style>
