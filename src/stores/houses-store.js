import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


import * as api from '../api'

export const useHousesStore = defineStore('houses-store', () => {

    // States
    const housesState = ref([])
    const searchCriteria = ref('')
    const sortBy = ref('price')
    const houseIdState = ref(-1)
    const newHouseState = ref({})


    // Getters
    const housesByzip = computed(() => housesState.value.filter((h) => h.location.zip.includes(searchCriteria.value)))
    const house = computed(() => housesState.value.find((h) => h.id === houseIdState.value))
    const quantityHousesFound = computed(() => housesByzip.value.length)
    const sortedHouses = computed(() => {

        if (sortBy.value === 'price') {
            return housesByzip.value.sort((a, b) => a.price < b.price ? 1 : -1)
        } else if (sortBy.value === 'size') {
            return housesByzip.value.sort((a, b) => a.size < b.size ? 1 : -1)
        } else {
            return housesByzip.value
        }

    })
    // Action
    async function fetchHouses() {
        housesState.value = await api.getListing()
    }

    async function addNewListing(dataHouseForm) {
        const housewithId = await api.createListing(dataHouseForm)
        newHouseState.value = housewithId
    }

    async function uploadImage(id,image){
        await api.uploadImage(id, image)
        await fetchHouses()
    }

    return { housesState, fetchHouses, housesByzip, searchCriteria, quantityHousesFound, sortedHouses, sortBy, house, houseIdState, newHouseState, addNewListing, uploadImage }
})
