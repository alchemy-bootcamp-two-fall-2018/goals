<template>
  <div class="app">
    <header>
      <span v-if="user">
        Hello {{user.username}}!
      </span>
      <nav v-if="user">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/pets">Goals</RouterLink>
      </nav>
    </header>
This is App
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


export default {
  data() {
    return {
      user: null
    };
  }
  
};
</script>

<style>




</style>
