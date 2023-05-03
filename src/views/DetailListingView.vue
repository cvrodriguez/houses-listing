<script setup>
import HouseDetail from '../components/HouseDetailComponent.vue'
import BackNavigation from '../components/BackNavigationComponent.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
</script>

<template>
  <div class="listing-container">
    <BackNavigation class="arrow-back"></BackNavigation>
    <div class="detail-and-recommended">
      <HouseDetail :house-id="id"></HouseDetail>

      <div class="recommended-container">
        <h2>Recommended for you</h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.arrow-back {
  display: none;
}

.recommended-container {
  margin: 1.25rem var(--main-margin) 0 var(--main-margin);
}

@media screen and (min-width: 768px) {
  .listing-container {
    display: flex;
    flex-direction: column;
    margin: 0 var(--main-margin) 0 var(--main-margin);
  }
  .arrow-back {
    display: flex;
  }
  .detail-and-recommended {
    display: flex;
  }
  .recommended-container {
    min-width: 27rem;
  }
}
</style>
