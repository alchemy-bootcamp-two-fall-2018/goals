<template>
  <div>
    <header v-if="user">
      <span>
        Hello {{user.username}}
      </span>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/goals">Goals</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView v-if="user" :user="user"></RouterView>
      <Auth v-else
        :onSignUp="handleSignUp"
        :onSignIn="handleSignIn"
      /> 
    </main>
  </div>
</template>

<script>
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
  methods: {
    handleSignUp(/*profile*/) {

    },
    handleSignIn(/*credentials*/) {
      
    }
  }

};
</script>

<style>

</style>
