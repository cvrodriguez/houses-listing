import { ref, computed} from 'vue'
import { defineStore } from 'pinia'


import * as api from '../api'

export const useHousesStore = defineStore('houses-store', () => {
    // States
    const housesState = ref([])
    const searchCriteria = ref('')

    // Getters
    const housesByzip = computed(() => housesState.value.filter((h) => h.location.zip.includes(searchCriteria.value)) )
    const quantityHousesFound = computed(() => housesByzip.value.length )
    // Action
    async function fetchHouses() {
        housesState.value = await api.getListing()
    }

return{housesState, fetchHouses, housesByzip, searchCriteria,quantityHousesFound}
})
