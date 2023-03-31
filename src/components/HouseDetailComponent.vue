<script setup>
import { useHousesStore } from '../stores/houses-store'

const housesStore = useHousesStore()

housesStore.houseIdState
const props = defineProps(['house-id'])

housesStore.houseIdState = parseInt(props.houseId)
</script>

<template>
  <div class="container">
    <div class="container-house-detail">
      <div
        class="house-imagen-background"
        :style="`background-image: url(${housesStore.house.image})`"
      ></div>

      <div class="container-inf">
        <div class="modification-section">
          <h1>{{ housesStore.house.location.street }}</h1>

          <div class="icons-container" v-if="housesStore.house.madeByMe">
            <router-link to="">
              <img src="../assets/ic_edit@3x.png" alt="" />
            </router-link>
            <router-link to="">
              <img src="../assets/ic_delete@3x.png" alt="" />
            </router-link>
          </div>
        </div>

        <div class="field-style">
          <img src="../assets/ic_location@3x.png" alt="" />
          <p for="">{{ housesStore.house.location.zip }}{{ housesStore.house.location.city }}</p>
        </div>

        <div class="field-style">
          <img src="../assets/ic_price@3x.png" alt="" />
          <p for="">{{ housesStore.house.price }}</p>

          <img src="../assets/ic_size@3x.png" alt="" />
          <p for="">{{ housesStore.house.size }} m2</p>

          <img src="../assets/ic_construction_date@3x.png" alt="" />
          <p for="">Built in{{ housesStore.house.constructionYear }}</p>
        </div>
        <div class="field-style">
          <img src="../assets/ic_bed@3x.png" alt="" />
          <p for="">{{ housesStore.house.rooms.bedrooms }}</p>

          <img src="../assets/ic_bath@3x.png" alt="" />
          <p for="">{{ housesStore.house.rooms.bathrooms }}</p>

          <img src="../assets/ic_garage@3x.png" alt="" />
          <p for="" v-if="housesStore.house.hasGarage">Yes</p>
          <p for="" v-else>No</p>
        </div>
        <p>{{ housesStore.house.description }}</p>
      </div>
    </div>
  </div>
</template>


<style scoped>
.arrow-back {
  display: none;
}
.house-imagen-background {
  position: relative;
  top: -10vh;
  width: 100%;
  height: 30vh;
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: -14vh;
  z-index: -1;
}

.container-inf {
  padding: 20px;
  border-radius: 20px 20px 0 0;
  background: var(--element-background2-color);
}
.modification-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.icons-container{
  display: flex;
  gap: 3rem;
}

.modification-section img {
  width: 16px;
  height: 18px;
}
.field-style {
  display: flex;
  gap: 10px;
  align-items: center;
}
.field-style img {
  width: auto;
  height: 12px;
}
p {
  text-align: justify;
}
@media screen and (min-width: 768px) {
  .container {
    display: flex;
    flex-direction: column;
    min-width: 40rem;
  }

  .house-imagen-background {
    top: 2rem;
  }
  .container-house-detail {
    display: flex;
    flex-direction: column;
  }
  .house-imagen-background {
    margin-bottom: 2vh;
    height: 55vh;
  }

  .container-inf {
    widows: 100%;
    border-radius: 0 0 0 0;
    background: var(--element-background2-color);
  }

  .modification-section img {
  width: 23px;
  height: 25px;
}
}
</style>