import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


import * as api from '../api'

export const useHousesStore = defineStore('houses-store', () => {
    // States
    const housesState = ref([])
    const searchCriteria = ref('')
    const sortBy = ref('price')
    const houseIdState = ref(-1)


    // Getters
    const housesByzip = computed(() => housesState.value.filter((h) => h.location.zip.includes(searchCriteria.value)))
    const house = computed(() => housesState.value.find((h) => h.id === houseIdState.value))
    const quantityHousesFound = computed(() => housesByzip.value.length)
    const sortedHouses = computed(() => {
       
        if (sortBy.value === 'price') {
            return housesByzip.value.sort((a, b) => a.price < b.price ? 1 : -1)
        } else if (sortBy.value === 'size') {
            return housesByzip.value.sort((a, b) => a.size < b.size ? 1 : -1)
        } else{
            return housesByzip.value
        }

    })
    // Action
    async function fetchHouses() {
        housesState.value = await api.getListing()
    }

    return { housesState, fetchHouses, housesByzip, searchCriteria, quantityHousesFound, sortedHouses, sortBy, house, houseIdState }
})
