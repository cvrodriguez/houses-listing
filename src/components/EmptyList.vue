<script setup>
</script>
<template>
  <div class="container">

    <div class="img-empty-list">
      <img src="../assets/img_empty_houses@3x.png" />
    </div>

    <div class="text">
      <h2>No result found.</h2>
      <h2>Please try another keyword.</h2>
    </div>
    
  </div>
</template>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10vh;
}

.img-empty-list img {
  object-fit: contain;
  height: 30vh;
  width: 100%;
  /* height: 500px; */
}

.text {
  text-align: center;
}
</style>