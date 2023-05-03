<script setup>
import { onBeforeMount } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import BackNavigation from '../components/BackNavigationComponent.vue'
import { useHousesStore } from '../stores/houses-store'
import HouseForm from '../components/HouseFormComponent.vue'
import NavigationComponent from '../components/NavigationComponent.vue'

const housesStore = useHousesStore()
const router = useRouter()
const route = useRoute()
const id = route.params.id

const editListing = async (dataform, image) => {
  await housesStore.editListing(dataform)
  if (image) {
    await housesStore.uploadImage(housesStore.house.id, image.value)
  }
  router.push({ path: `/detail-listing/${housesStore.house.id}`, replace: true })
}

onBeforeMount(() => {
  housesStore.fetchHouses()
  housesStore.houseIdState = parseInt(id)
})
</script>

<template>
  <div class="margin-content">
    <div class="title">
      <BackNavigation></BackNavigation>
      <NavigationComponent></NavigationComponent>
    </div>
    <div class="container">
      <HouseForm
        v-if="housesStore.house"
        :on-save="editListing"
        :house="housesStore.house"
      ></HouseForm>
    </div>
  </div>
</template>

<style scoped>
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
