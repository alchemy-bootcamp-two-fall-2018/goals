<template>
  <div id="app">

    <header>
      <span >
       
      </span>
      <nav>
        <RouterLink to="/"> HOME </RouterLink>
      </nav>
    </header>

    <main>
      <RouterView></RouterView>
      <Auth/>
    </main>

  </div>
</template>

<script>
// import api from '../services/api';
import Auth from './components/auth/Auth';

export default {
  components: {
    Auth
  }

};
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
</style>
