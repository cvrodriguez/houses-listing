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
      <HouseForm :on-save="editListing" :house="house" ></HouseForm>
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

.form {
  display: flex;
  flex-direction: column;
}
.horizontal-group-control-field {
  display: flex;
  gap: 10px;
}

.control-field {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-bottom: 20px;
}

label {
  font-size: 12px;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin-bottom: 10px;
}
input,
select,
textarea {
  border-radius: 8px;
  height: 5vh;
  padding-left: 20px;
  outline: none;
  border: none;
}
textarea {
  padding-top: 20px;
}

input[type='file'] {
  display: none;
}

.custom-file-upload {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px dashed #ccc;
  cursor: pointer;
  width: 15vh;
  height: 15vh;
  margin: 5px 0 0px 0;
}
.custom-file-upload img {
  width: 50px;
  height: 50px;
}

textarea {
  border: none;
  height: 10vh;
}

@media screen and (min-width: 768px) {
  .title {
    display: block;
  }
}
</style>