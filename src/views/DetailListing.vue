<script setup>
import HouseDetail from '../components/HouseDetail.vue'
import houseCard from '../components/HouseCard.vue'
import HouseDelete from '../components/HouseDelete.vue'
</script>

<template>
  <HouseDetail></HouseDetail>

  <div class="margin-content container">

    <h2>Recommended for you</h2>
    <houseCard></houseCard>

  </div>
  <HouseDelete></HouseDelete>

</template>



<style scoped>
.container{
    margin-top: 10px;
}
</style>