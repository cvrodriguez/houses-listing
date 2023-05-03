<script setup>
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="container">
    <router-link to="/">
      <img
        v-if="router.currentRoute.value.name != 'about'"
        src="../assets/ic_mobile_navigarion_home_active@3x.png"
        alt=""
      />
      <img v-else src="../assets/ic_mobile_navigarion_home@3x.png" alt="" />
    </router-link>

    <router-link to="/about">
      <img
        v-if="router.currentRoute.value.name == 'about'"
        src="../assets/ic_mobile_navigarion_info_active@3x.png"
        alt=""
      />
      <img v-else src="../assets/ic_mobile_navigarion_info@3x.png" alt="" />
    </router-link>
  </div>
</template>

<style scoped>
.container {
  position: fixed;
  bottom: 0;
  display: flex;
  height: 10vh;
  width: 100%;
  background: var(--element-background2-color);
  align-items: center;
  justify-content: space-around;

  -webkit-box-shadow: -1px -7px 17px -9px rgba(195, 195, 195, 1);
  -moz-box-shadow: -1px -7px 17px -9px rgba(195, 195, 195, 1);
  box-shadow: -1px -7px 17px -9px rgba(195, 195, 195, 1);
}
.container img {
  width: 40px;
  height: 40px;
}
@media screen and (min-width: 768px) {
  .container {
    display: none;
  }
}
</style>
