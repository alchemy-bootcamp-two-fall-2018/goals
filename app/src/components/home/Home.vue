<template>
  <section class="home">
    <h2 class="welcome">Welcome to the amazing goal setter!</h2>
    <p class="look">
      <RouterLink to="/goals">Take a look at your current goals</RouterLink>
    </p>
  </section>
</template>

<style>

    .home {
        margin-top: -20px;
        background: #f0e2a3;
    }

    .welcome {
        padding: 20px;
    }

    .look {
        margin-top: 0px;
        padding: 0 0 0 20px;
    }

</style>
