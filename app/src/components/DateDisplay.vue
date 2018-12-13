<template>
  <span>
    {{formattedDate}}
  </span>
</template>

<script>
export default {
    props: {
        date: String
    },
    data() {
        return {
            track: null
        };
    },
    computed: {
        formattedDate() {
            return new Date(this.date).toLocaleDateString();
        }
    }
};
</script>