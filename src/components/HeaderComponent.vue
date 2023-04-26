<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { useHeaderNavStore } from '../stores/header-nav'

const headerNavStore = useHeaderNavStore()
const router = useRouter()
const isDetail = () => router.currentRoute.value.name === 'detail-listing'

const goBack = () => {
  router.go(-1)
}
</script>

<template>
  <div class="container">
    <header class="margin-content">
      <div :class="`mobile ${isDetail() ? '' : 'visible'}`">
        <img src="../assets/ic_back_white@3x.png" @click="goBack" v-if="isDetail()" />
        <img
          src="../assets/ic_back_grey@3x.png"
          @click="goBack"
          v-else-if="router.currentRoute.value.name != 'listing'"
        />
        <div class="empty-image" v-else></div>
        <h1>{{ headerNavStore.title }}</h1>

        <RouterLink to="/create-new-listing">
          <img src="../assets/ic_plus_grey@3x.png" />
        </RouterLink>
      </div>
    </header>

    <div class="desktop">
      <img src="../assets/img_logo_dtt@3x.png" alt="" />
      <router-link to="/">Houses</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: sticky;
  top: 0;
  width: 100%;
}

.desktop {
  display: none;
}
.mobile {
  display: flex;
  height: 10vh;
  justify-content: space-between;
  align-items: center;
}

.visible {
  background: var(--element-background1-color);
}

img,
.empty-image {
  height: 18px;
  width: 18px;
}
@media screen and (min-width: 768px) {
  .mobile {
    display: none;
  }

  .desktop {
    display: flex;
    height: 7vh;
    align-items: center;
    gap: 10vh;
    background: var(--element-background2-color);
    padding-left: 15vh;
    margin-bottom: 3vh;
  }
  .desktop img {
    height: 24px;
    width: auto;
  }
  .desktop a {
    color: var(--element-tertiary-color);
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    font-weight: normal;
  }
  a.router-link-active {
    color: var(--font-secondary-color);
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    font-weight: bold;
  }
}
</style>