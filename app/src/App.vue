<template>
  <div class="app">
    <header>
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

</style>
