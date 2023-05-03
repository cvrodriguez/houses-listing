<script setup>
import { useHousesStore } from '../stores/houses-store'
const housesStore = useHousesStore()
</script>

<template>
  <div class="container">
    <span class="icon"><img src="../assets/ic_search@3x.png" alt="" /></span>
    <input
      v-model="housesStore.searchCriteria"
      type="search"
      id="search"
      placeholder="Search for a house"
    />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  height: 5vh;
  background: var(--element-tertiary-color);
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
  background: var(--element-tertiary-color);
}
input:-webkit-autofill {
  box-shadow: 0 0 0px 1000px var(--element-tertiary-color) inset;
}
</style>
