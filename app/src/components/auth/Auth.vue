<template>
    <div>
        <div v-if="method === 'signin'"> 
            <h2>Sign In</h2>

            <p>
                need to sign up?
                <button @click="method = 'signup'"> Sign up</button>
            </p>

            <form @submit.prevent="handleSignInSubmit(profile)">

                <label>
                    Username:
                    <input v-model="profile.username">
                </label>
                <label>
                    Password:
                    <input v-model="profile.password">
                </label>
                <label>
                    <button>Sign In</button>
                </label>
            </form>
        </div>
        <div v-else>

            <h2>
                Sign Up
            </h2>
            <p>
                Already have an account?
                <button @click="method = 'signin'"> Sign In</button>
            </p>
            <form @submit.prevent="handleSignUpSubmit(profile)">
                 <label>
                    Username:
                    <input v-model="profile.username" required>
                </label>
                <label>
                    Password:
                    <input type="password" v-model="profile.password" required>
                </label>
                <label>
                    <button>Sign Up</button>
                </label>
            </form>
        </div>
    </div>
</template>

<script>
export default {

    props: {
        onSignIn: Function, 
        onSignUp: Function
    }, 
    data() {
        return {
            method:'signin', 
            error: '',
            profile: {
                username: '', 
                password: ''
            }
        };
    }, 
    methods: {
        handleSignInSubmit() {
            this.error = '';
            this.onSignIn(this.profile)
                .catch(error => {
                    this.error = error.error;
                });
        }, 
        handleSignUpSubmit() {
            this.error = '';
            this.onSignUp(this.profile)
                .catch(error => {
                    this.error = error.error;
                });
        }
    }

};
</script>

<style>

</style>
