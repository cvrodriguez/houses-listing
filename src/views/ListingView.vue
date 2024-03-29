<script setup>
import Button from '../components/ButtonComponent.vue'
import Search from '../components/SearchComponent.vue'
import HouseCard from '../components/HouseCardComponent.vue'
import NavigationComponent from '../components/NavigationComponent.vue'
import EmptyListComponent from '../components/EmptyListComponent.vue'
import { computed, onBeforeMount } from 'vue'
import { useHousesStore } from '../stores/houses-store'

const housesStore = useHousesStore()
const isPice = () => housesStore.sortBy === 'price'

const searchCriteria = computed(
  () => housesStore.searchCriteria !== '' && housesStore.quantityHousesFound !== 0
)
const emptyList = computed(() => housesStore.quantityHousesFound === 0)

onBeforeMount(() => {
  housesStore.fetchHouses()
})
</script>

<template>
  <div>
    <div class="margin-content">
      <div class="desktop-title-and-create-button">
        <NavigationComponent></NavigationComponent>
        <router-link to="/create-new-listing">
          <Button class="post-primary button-create">+ CREATE NEW </Button>
        </router-link>
      </div>
      <div class="filter-section">
        <Search class="search-filter"></Search>
        <div class="filter-buttons">
          <Button
            :class="`primary button ${isPice() ? '' : 'inactive'}`"
            @click="housesStore.sortBy = 'price'"
            >Price</Button
          >
          <Button
            :class="`secondary button ${isPice() ? '' : 'active'}`"
            @click="housesStore.sortBy = 'size'"
            >Size</Button
          >
        </div>
      </div>
      <h2 v-if="searchCriteria">{{ housesStore.quantityHousesFound }} results found</h2>
      <EmptyListComponent v-if="emptyList"></EmptyListComponent>
      <HouseCard :key="h" v-for="h in housesStore.sortedHouses" :house="h"></HouseCard>
    </div>
  </div>
</template>

<style scoped>
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
  .search-filter {
    width: 50%;
  }
}
</style>
