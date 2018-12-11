<template>
  <div>
    <headser v-if="user">
      <span>
        Hello {{user.username}}
      </span>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/goals">Goals</RouterLink>
      </nav>
    </headser>

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
header {
  height: 100px;
  background: rgb(144, 153, 118);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: black;
  margin: 5px;
  padding: 5px;
  border: 1px dashed black;
}

main {
  padding: 10px;
}
</style>