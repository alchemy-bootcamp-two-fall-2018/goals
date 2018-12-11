<template>
  <div id="app">
      <header>
          <span v-if="user">Hello{{user.username}}</span>
          <nav v-if="user">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/goals">Goals</RouterLink>
            <a href="#" @click="handleLogout"> logout</a>
             </nav>
        </header>

      <main>
        <RouterView v-if="user" :user="user"/>
        <Auth v-else
        :onSignUp="handleSignUp"
        :onSignIn="handleSignIn"/>
      </main>
  </div>
</template>

<script>
import Auth from './components/auth/Auth.vue';
import api from './services/api';

export default {
    data() {
        return {
            user: null
        };
    },

    components: {
        Auth
    }, 
    created() {
        const json = window.localStorage.getItem('profile');
        if(json) {
            this.setUser(JSON.parse(json));
        }
    },
    methods: {
        handleSignUp(profile) {
            console.log('data to be added to profile table', profile);
            return api.signUp(profile)
                .then(user => {
                    this.setUser(user);
                });
        }, 


        handleSignIn(credentials) {
            console.log('would login with', credentials);
            return api.signIn(credentials)
                .then(user => {
                    this.setUser(user);
                })
            ;
        }, 

        setUser(user) {
            this.user = user;
            if(user) {
                api.setToken(user.token); 
                window.localStorage.setItem('profile', JSON.stringify(user));
            }
            else {
                api.setToken();
                window.localStorage.removeItem('profile');
            }
        }, 
        handleLogout() {
            // reset api 
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
</style>
