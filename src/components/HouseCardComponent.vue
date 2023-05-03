<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import HouseDeleteComponent from './HouseDeleteComponent.vue'

const props = defineProps(['house'])
const router = useRouter()
const deleteTrue = ref(false)

const goToDetailHouse = () => {
  router.push(`/detail-listing/${props.house.id}`)
  console.log('soy metiche')
}

const handleImageClick = async (imageName) => {
  if (imageName === 'edit') {
    router.push(`/edit-listing/${props.house.id}`)
  } else if (imageName === 'delete') {
    deleteHouse()
  }
}

const deleteHouse = () => {
  deleteTrue.value = !deleteTrue.value
}
</script>

<template>
  <div class="card" @click="goToDetailHouse()">
    <div class="img-container" :style="`background-image: url(${house.image})`"></div>

    <div class="inf-container">
      <div class="title-and-icos">
        <h2>{{ house.location.street }}</h2>
        <div class="icos">
          <img
            @click.stop="handleImageClick('edit')"
            v-if="house.madeByMe"
            src="../assets/ic_edit@3x.png"
            alt=""
          />
          <img
            @click.stop="handleImageClick('delete')"
            v-if="house.madeByMe"
            src="../assets/ic_delete@3x.png"
            alt=""
          />
          <HouseDeleteComponent
            v-show="deleteTrue"
            :houseId="house.id"
            :toggleGoBack="deleteHouse"
          ></HouseDeleteComponent>
        </div>
      </div>

      <p class="price">€{{ house.price }}</p>
      <p class="address">{{ house.location.zip }} {{ house.location.city }}</p>

      <div class="utilitis">
        <img src="../assets/ic_bed@3x.png" alt="" />
        <span>{{ house.rooms.bedrooms }}</span>
        <img src="../assets/ic_bath@3x.png" alt="" />
        <span>{{ house.rooms.bathrooms }}</span>
        <img src="../assets/ic_size@3x.png" alt="" />
        <span>{{ house.size }} m2</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  height: 100px;
  background-color: var(--element-background2-color);
  padding: 10px;
  border-radius: 8px;
  margin: 10px 0 10px 0;
  cursor: pointer;
}
.img-container {
  width: 100px;
  height: 100px;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
}
.inf-container {
  margin-left: 15px;
  flex-grow: 1;
}
.title-and-icos {
  display: flex;
  justify-content: space-between;
}
.icos {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}
.title-and-icos img {
  width: 12px;
  height: 14px;
  margin-left: 0;
}

.inf-container h2 {
  margin: 0;
}
.price {
  margin-top: 8px;
  font-size: 14px;
  color: var(--font-secondary-color);
  font-weight: bold;
}
.address {
  margin-top: -3px;
  color: var(--font-secondary-color);
  font-size: 14px;
  font-weight: lighter;
}
.utilitis {
  display: flex;
  gap: 10px;
}
.utilitis img {
  width: 14px;
  height: 14px;
}
</style>
