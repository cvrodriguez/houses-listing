<script setup>
import Button from '../components/Button.vue'
import Search from '../components/Search.vue'
import HouseCard from '../components/HouseCard.vue'

</script>

<template >
  <div class="margin-content">
    <Search></Search>
    <div class="filter-buttons">
      <Button class="primary">Price</Button>
      <Button class="secondary">Size</Button>
    </div>
    <HouseCard></HouseCard>
    
  </div>
</template>



<style  scoped>
.filter-buttons {
  display: flex;
}
</style>