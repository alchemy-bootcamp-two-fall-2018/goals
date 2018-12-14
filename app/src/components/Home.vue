<template>
    <section>
        <h2> Welcome Home buddy (HomeFile)</h2>
        <p v-if="stats">
            <li v-for="stat in stats"
            :key="stat.profileId">
            <span>NUMBER OF GOALS:{{stat.count}}</span>
            <span>AVERAGE TIME TO COMPLETE IN DAYS: {{stat.avg}}</span>
            <span>LONGEST TO COMPLETE: {{stat.max}}</span>
            <span>SHORTEST TO COMPLETE: {{stat.min}}</span>

            </li>
        </p>
    </section>
</template>

<script>
import api from '../services/api';
export default {
    data() {
        return {
            stats: null
        };
    }, 

    created() {
        api.getStats() 
            .then(stats => this.stats = stats);
    }

};
</script>

<style>
span {
    display: block;
}

</style>
