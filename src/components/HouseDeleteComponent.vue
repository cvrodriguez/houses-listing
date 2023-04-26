<script setup>
import Button from './ButtonComponent.vue'
import { useRouter } from 'vue-router'
import { useHousesStore } from '../stores/houses-store'

const router = useRouter()
const props = defineProps(['houseId', 'toggleGoBack'])
const housesStore = useHousesStore()

const goBack = () => {
  router.push({ path: `/detail-listing/${props.houseId}` })
  props.toggleGoBack()
}

const deleteHouseConfirmation = async () => {
  await housesStore.deleteHouse(props.houseId)
  router.push({ path: '/' })
}
</script>

<template>
  <div class="delete-container">
    <div class="confirmation-container margin-content">
      <h1>Delete listing</h1>

      <div class="message-confirmation">
        <p>Are you sure you want to delete this listing?</p>
        <p>This action cannot be undone</p>
      </div>

      <div class="button-container">
        <Button @click="deleteHouseConfirmation" class="post-primary">YES, DELETE</Button>
        <Button @click="goBack" class="post-secondary">GO BACK</Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.delete-container {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background: rgba(34, 34, 34, 0.75);
  background-color: rgba(0, 0, 0, 0.2);
}
.confirmation-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--element-background2-color);
  border-radius: 8px;
  margin-top: 30vh;
  padding-top: 1.5rem;
  height: 15rem;
}

.button-container {
  display: flex;
  flex-direction: column;
  width: 250px;
  margin-top: 30px;
  margin-bottom: 30px;
  gap: 10px;
}
p {
  margin: 0%;
  text-align: center;
}

@media screen and (min-width: 768px) {
  .delete-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .confirmation-container {
    padding: 2rem 5rem;
    max-width: 40rem;
    margin-top: 12rem;
  }
  .button-container {
    width: 350px;
  }
}
</style>