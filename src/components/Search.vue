
<script setup>
</script>

<template>
  <div class="container">
    <span class="icon"><img src="../assets/ic_search@3x.png" alt="" /></span>
    <input type="search" id="search" placeholder="Search for a house" />
  </div>
</template>

<style  scoped>

.container {
  display: flex;
  align-items: center;
  height: 5vh;
  background: #E8E8E8;
  border-radius: 8px;
  margin-bottom: 20px;
}
.icon img {
  height: 18px;
  width: 18px;
  margin: 15px;
}
input {
  outline: none;
  display: flex;
  justify-content: space-between;
  width: 80%;
  background: #E8E8E8;
}
input:-webkit-autofill{ box-shadow: 0 0 0px 1000px  #E8E8E8 inset; }

</style>