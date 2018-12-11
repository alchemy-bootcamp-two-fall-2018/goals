<template>
  <div>
    <header>
      <img src="" alt="">
      <span>
        Hello {{user.username}}
      </span>
      <nav v-if="user">
        <RouterLink to="/">Home</RouterLink>"
      </nav>
    </header>

    <main>
      RouterView 
    </main>
  </div>
</template>

<script>
export default {

};
</script>

<style>

</style>
