<template>
  <section>
    <h3>SignIn:</h3>
    <form @submit.prevent="onSignIn(sIn)">
      <label>Username:
        <input v-model="sIn.username">
      </label>
      <label>Password:
        <input v-model="sIn.password">
      </label>
      <button>SignIn</button>
    </form>

    <h3>SignUp:</h3>
    <form @submit.prevent="onSignUp(sUp)">
      <label>Username:
        <input v-model="sUp.username">
      </label>
      <label>First Name:
        <input v-model="sUp.fname">
      </label>
      <label>Last Name:
        <input v-model="sUp.lname">
      </label>
      <label>Email:
        <input v-model="sUp.email">
      </label>
      <label>Password:
        <input v-model="sUp.password">
      </label>
      <button>SignUn</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      sIn: {},
      sUp: {}
    };
  },
  props: {
    onSignIn: Function,
    onSignUp: Function
  }
};
</script>

<style>

</style>
