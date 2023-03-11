<script setup>

</script>

<template>
   <div class="back-navegation">
        <router-link to="/">
          <img src="../assets/ic_back_grey@3x.png" alt="" />
        </router-link>
        <label for="">Back to the overview</label>
      </div>
</template>



<style scoped>
@media screen and (min-width: 768px) {
  .back-navegation {
    display: flex;
    gap: 1rem;
  }
  .back-navegation img {
    width: 1rem;
    height: auto;
  }
  .back-navegation label {
    font-size: 16px;
  }
}
</style>