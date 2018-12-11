<template>
    <section>
        <div v-if="method === 'signin'">
            <h2>Sign-in!</h2>
            <p>
                Need to register?  
                <button @click="method = 'signup'">Sign Up</button>
            </p>
            <form @submit.prevent="this.onSignIn(profile)">
                <label>
                    Username:
                    <input v-model="profile.username" type="text" required>
                </label>
                <label>
                    Password:
                    <input v-model="profile.password" type="password" required>
                </label>
                <label>
                    <button>Sign In</button>
                </label>
        </form>
        </div>
        <div v-else>
            <h2>Sign-Up!</h2>
            <p>
                Already have an account?  
                <button @click="method = 'signin'">Sign In</button>
            </p>
            <form @submit.prevent="this.onSignUp(credentials)">
                <label>
                    Username:
                    <input v-model="profile.username" type="text" required>
                </label>
                <label>
                    Password:
                    <input v-model="profile.password" type="password" required>
                </label>
                <label>
                    <button>Sign Up</button>
                </label>
        </form>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        onSignIn: Function,
        onSignUp: Function
    },
    data(){
        return {
            method: 'signin',
            profile: {
                username: '',
                password: ''
            }
        };
    }
};
</script>

<style>

</style>
