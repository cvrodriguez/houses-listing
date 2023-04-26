<script setup>
import Button from '../components/ButtonComponent.vue'
import Search from '../components/SearchComponent.vue'
import HouseCard from '../components/HouseCardComponent.vue'
import EmptyListComponent from '../components/EmptyListComponent.vue'
import { onMounted, onBeforeMount } from 'vue'
import { useHeaderNavStore } from '../stores/header-nav'
import { useHousesStore } from '../stores/houses-store'

const headerNavStore = useHeaderNavStore()
const housesStore = useHousesStore()
const isPice = () => housesStore.sortBy === 'price'

onMounted(() => {
  headerNavStore.title = 'Houses'
})

onBeforeMount(() => {
  housesStore.fetchHouses()
})
</script>

<template >
  <div>
    <div class="margin-content">
      <div class="desktop-title-and-create-button">
        <h1>{{ headerNavStore.title }}</h1>
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
      <h2 v-if="housesStore.searchCriteria !== '' && housesStore.quantityHousesFound !== 0">
        {{ housesStore.quantityHousesFound }} results found
      </h2>
      <EmptyListComponent v-if="housesStore.quantityHousesFound === 0"></EmptyListComponent>
      <HouseCard :key="h" v-for="h in housesStore.sortedHouses" :house="h"></HouseCard>
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
  .search-filter {
    width: 50%;
  }
}
</style>