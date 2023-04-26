<script setup>
import { useRouter } from 'vue-router'
import BackNavegation from '../components/BackNavegationComponent.vue'
import { useHousesStore } from '../stores/houses-store'
import HouseForm from '../components/HouseFormComponent.vue'
import { onMounted } from 'vue'
import { useHeaderNavStore } from '../stores/header-nav'

const housesStore = useHousesStore()
const house = housesStore.house
const router = useRouter()
const headerNavStore = useHeaderNavStore()

onMounted(() => {
  headerNavStore.title = 'Edit listing'
})

const editListing = async (dataform, image) => {
  await housesStore.editListing(dataform)
  if (image) {
    await housesStore.uploadImage(house.id, image.value)
  }

  router.push({ path: `/detail-listing/${house.id}`, replace: true })
}
</script>

<template>
  <div class="margin-content">
    <div class="title">
      <BackNavegation></BackNavegation>
      <h1>{{ headerNavStore.title }}</h1>
    </div>
    <div class="container">
      <HouseForm :on-save="editListing" :house="house"></HouseForm>
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