<template>
  <div class="app">
    <header>
      <img src="./assets/goal-logo.png">
      <h1>Welcome to the Goals App!</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/goals">Goals</RouterLink>
      </nav>
    </header>    
    <main>
      <RouterView></RouterView>
    </main>
  </div>
</template>

<script>

export default {};

 
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
  height: 75px;
  background: yellowgreen;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
 header img {
  height: 100%;
  background: yellowgreen;
}
 nav a {
  text-decoration: none;
  color: black;
  margin: 3px;
  padding: 3px;
  border: 1px solid black;
  justify-content: center;
}
 main {
  padding: 8px;
}
</style>
