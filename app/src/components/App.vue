<template>
  <div id="app">
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/goals">Goals</RouterLink>
        <a href="#" @click="handleLogout">Logout</a>
      </nav>
    </header>
    <RouterView v-if="user" :user="user"></RouterView>
    <Auth v-else 
      :onSignUp="handleSignUp"
      :onSignIn="handleSignIn"/>
  </div>
</template>

<script>
import api from '../services/api';
import Auth from './auth/Auth';
export default {
    components: {
        Auth
    },
    data() {
        return {
            user:null
        };
    },
    created() {
        const json = window.localStorage.getItem('profile');
        if(json){
            this.setUser(JSON.parse(json));
        }
    },
    methods: {
        handleSignUp(profile) {
            return api.signUp(profile)
                .then(user => {
                    this.setUser(user);
                });
        },
        handleSignIn(credentials) {
            return api.signIn(credentials)
                .then(user => {
                    this.setUser(user);
                });
        },
        setUser(user) {
            this.user = user;
            if(user) {
                window.localStorage.setItem('profile', JSON.stringify(user));
            }
            else {
                window.localStorage.removeItem('profile');
            }
        },
        handleLogout() {
            this.setUser(null);
            this.$router.push('/');
        }
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
nav {
  display: flex;
  justify-content: space-around;
}
</style>
