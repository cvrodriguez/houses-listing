import { createRouter, createWebHistory } from 'vue-router'
import CreateListingView from '../views/CreateListingView.vue'
import ListingView from '../views/ListingView.vue'
import AboutView from '../views/AboutView.vue'
import DetailListingView from '../views/DetailListingView.vue'
import EditListingView from '../views/EditListingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'listing',
      component: ListingView
    },
    {
      path: '/create-new-listing',
      name: 'new-listing',
      component: CreateListingView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/detail-listing/:id',
      name: 'detail-listing',
      component: DetailListingView
    },
    {
      path: '/edit-listing/:id',
      name: 'edit-listing',
      component: EditListingView
    },
  ]
})

export default router
