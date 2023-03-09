<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container">

    <header class="margin-content">

      <router-link to="/">
        <img src="../assets/ic_back_grey@3x.png" />
      </router-link>

      <h1>Houses</h1>

      <RouterLink to="/create-new-listing">
        <img src="../assets/ic_plus_grey@3x.png" />
      </RouterLink>
      
    </header>
  </div>
</template>


<style scoped>
.container {
  position: sticky;
  top: 0;
  width: 100%;
 
}
header {
  /* position: fixed; */
  display: flex;
  height: 10vh;
  justify-content: space-between;
  align-items: center;
  background: var( --element-background1-color);
}

img {
  height: 18px;
  width: 18px;
}
</style>