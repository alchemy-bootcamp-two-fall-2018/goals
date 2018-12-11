<template>
  <form @submit.prevent="handleSubmit">
    <p>
      <label>Name:</label>
      <input required><!-- v-focus v-model="goal.name"-->
    </p>
    <p>
      <label>Type:</label>
      <input required><!-- v-focus v-model="goal.type"-->
    </p>
     <button>Add</button>
  </form>
</template>

<script>

</script>