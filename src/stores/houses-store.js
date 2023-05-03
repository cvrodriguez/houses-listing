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
    const housesByzipAndCity = computed(() => housesState.value.filter((h) => h.location.city.toLowerCase().includes(searchCriteria.value.toLowerCase()) || h.location.zip.includes(searchCriteria.value)))
    const house = computed(() => housesState.value.find((h) => h.id === houseIdState.value))
    const quantityHousesFound = computed(() => housesByzipAndCity.value.length)
    const sortedHouses = computed(() => {
        if (sortBy.value === 'price') {
            return housesByzipAndCity.value.sort((a, b) => a.price < b.price ? 1 : -1)
        } else if (sortBy.value === 'size') {
            return housesByzipAndCity.value.sort((a, b) => a.size < b.size ? 1 : -1)
        } else {
            return housesByzipAndCity.value
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

    async function editListing(dataHouseForm) {
        await api.editListing(dataHouseForm, house.value.id)
    }

    async function uploadImage(id, image) {
        await api.uploadImage(id, image)
        await fetchHouses()
    }

    async function deleteHouse(id) {
        await api.deleteListing(id)
        await fetchHouses()
    }

    return { housesState, fetchHouses, housesByzipAndCity, searchCriteria, quantityHousesFound, sortedHouses, sortBy, house, houseIdState, newHouseState, addNewListing, uploadImage, deleteHouse, editListing }
})
