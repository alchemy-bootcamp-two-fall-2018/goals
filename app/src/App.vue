<template>
  <div class="app">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/goals">Goals</RouterLink>
        <!-- <RouterLink to="/goallist">See you Goals</RouterLink> -->
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
body {
  background-color: mediumvioletred;
}
nav {
  text-align: center;
  margin: 20px 0 0;
  padding: 10px 0;
}
</style>
