import { ref } from 'vue'
import { defineStore } from 'pinia'

// Manage the header title of each view
export const useHeaderNavStore = defineStore('header-nav', () => {
  // States
  const title = ref('') 

  // Getters
 

  // Action


  return { title}
})
