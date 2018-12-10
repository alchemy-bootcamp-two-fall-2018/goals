<template>
  <section>
    <h2>SignIn/Up Page!</h2>

    <form @submit.prevent="onSignIn(user)">
      <label>Username:
        <input v-model="user.username">
      </label>
      <label>Password:
        <input v-model="user.password">
      </label>
      <button>SignIn</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {}
    };
  },
  props: {
    onSignIn: Function,
  }
};
</script>

<style>

</style>
