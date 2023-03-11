<script setup>
import HouseDetail from '../components/HouseDetailComponent.vue'
import HouseCard from '../components/HouseCardComponent.vue'
import BackNavegation from '../components/BackNavegationComponent.vue'
// import HouseDelete from '../components/HouseDeleteComponent.vue'

import { onMounted } from 'vue'
import {useHeaderNavStore} from '../stores/header-nav'

const headerNavStore = useHeaderNavStore()

onMounted(() => {
 headerNavStore.title= ''
})
</script>

<template>
  <div class="listing-container">
    <BackNavegation class="arrow-back"></BackNavegation>
    <div class="detail-and-recommended">
      <HouseDetail></HouseDetail>

      <div class="recommended-container">
        <h2>Recommended for you</h2>
        <HouseCard></HouseCard>
      </div>
    </div>
  </div>

  <!-- <HouseDelete></HouseDelete> -->
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
  .detail-and-recommended{
    display: flex;
    
  }

  .recommended-container {
    min-width: 27rem;
  }
}
</style>