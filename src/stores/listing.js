import { ref } from 'vue'
import { defineStore } from 'pinia'

import * as api from '../api'

export const useHousesStore = defineStore('houses-store', () => {
    // States
    const housesState = ref([])

    // Getters
   

    // Action
    async function fetchHouses() {
        housesState.value = await api.getListing()
    }

return{housesState, fetchHouses}
})
