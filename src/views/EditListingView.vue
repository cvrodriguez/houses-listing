<script setup>
import {onBeforeMount} from 'vue'
import { useRouter, useRoute } from 'vue-router'
import BackNavegation from '../components/BackNavegationComponent.vue'
import { useHousesStore } from '../stores/houses-store'
import HouseForm from '../components/HouseFormComponent.vue'
import NavegationComponent from '../components/NavegationComponent.vue'

const housesStore = useHousesStore()
const house = housesStore.house
const router = useRouter()
const route = useRoute()
const id = route.params.id

const editListing = async (dataform, image) => {
  await housesStore.editListing(dataform)
  if (image) {
    await housesStore.uploadImage(house.id, image.value)
  }
  router.push({ path: `/detail-listing/${house.id}`, replace: true })
}

onBeforeMount(() => {
  housesStore.fetchHouses()
  housesStore.houseIdState = parseInt(id)
})
</script>

<template>
  <div class="margin-content">
    <div class="title">
      <BackNavegation></BackNavegation>
      <NavegationComponent></NavegationComponent>
    </div>
    <div class="container">
      <HouseForm v-if="housesStore.house" :on-save="editListing" :house="housesStore.house"></HouseForm>
    </div>
  </div>
</template>

<style  scoped>
.title {
  display: none;
}
.container {
  max-width: 25rem;
  padding: 10px;
  display: flex;
  flex-direction: column;
}
.container::before {
  content: '';
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.5;
  z-index: -1;
  background-image: url('../assets/img_background@3x.png');
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: contain;
}

@media screen and (min-width: 768px) {
  .title {
    display: block;
  }
}
</style>