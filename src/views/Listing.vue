<script setup>
import Button from '../components/Button.vue'
import Search from '../components/Search.vue'
import HouseCard from '../components/HouseCard.vue'
import EmptyList from '../components/EmptyList.vue';
</script>

<template >
  <div>
    <div class="margin-content">
      <div class="desktop-title-and-create-button">
        <h1>Houses</h1>
        <router-link to="/create-new-listing">
          <Button class="post-primary button-create">+ CREATE NEW </Button>
        </router-link>
      </div>
      <div class="filter-section">
        <Search class="search-filter"></Search>
        <div class="filter-buttons">
          <Button class="primary button ">Price</Button>
          <Button class="secondary button">Size</Button>
        </div>
      </div>

      <HouseCard></HouseCard>
     <!-- <EmptyList></EmptyList> -->
    </div>
  </div>
</template>



<style  scoped>
.filter-buttons {
  display: flex;
}

.desktop-title-and-create-button {
  display: none;
}

@media screen and (min-width: 768px) {
  .desktop-title-and-create-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .button-create {
    width: 10rem;
  }
  .filter-section {
    display: flex;
    justify-content: space-between;
  }

  .filter-buttons {
    display: flex;
  }
  .filter-buttons .button {
    width: 8rem;
  }
  .search-filter{
    width: 50%;
    
  }
}
</style>