<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="margin-content">

    <router-link to="/" >
      <img src="../assets/ic_back_grey@3x.png" />
    </router-link>
   
    <h1>Houses</h1>

    <RouterLink to="/create-new-listing">
      <img src="../assets/ic_plus_grey@3x.png" />
    </RouterLink>

  </header>
</template>


<style scoped>
header {
  display: flex;
  height: 10vh;
  justify-content: space-between;
  align-items: center;
  /* background: aqua; */
}

img {
  height: 18px;
  width: 18px;
}
</style>