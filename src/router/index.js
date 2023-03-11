import { createRouter, createWebHistory } from 'vue-router'
import CreateListing from '../views/CreateListing.vue'
import Listing from '../views/Listing.vue'
import About from '../views/About.vue'
import DetailListing from '../views/DetailListing.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'listing',
      component: Listing
    },
    {
      path: '/create-new-listing',
      name: 'new-listing',
      component: CreateListing
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/detail-listing',
      name: 'detail-listing',
      component: DetailListing
    },
   
  ]
})

export default router
