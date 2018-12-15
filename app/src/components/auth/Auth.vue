<template>
    <section>
        <form v-if="method === 'signin'" @submit.prevent="this.onSignIn">
            <label>
                USERNAME:
                <input v-model="username" required>
            </label>
            <label>
                PASSWORD:
                <input type="password" v-model="username" required>
            </label>
        </form>
    </section>
</template>

<script>
export default {
  props: {
    onSignIn: Function,
    onSignUp: Function
  },
  data() {
    return {
      method: 'signin'   
    };  
  }
};
</script>

<style>

</style>
