<script setup>
import Header from './components/HeaderComponent.vue'
import Footer from './components/FooterComponent.vue'
</script>

<template>
  <div class="main-container">
    <Header></Header>

    <div class="components-container">
      <RouterView />
    </div>

    <Footer></Footer>
  </div>
</template>

<style scoped>
.main-container {
  min-height: 100vh;
  width: 100%;
}
.components-container {
  flex-direction: column;
  padding-bottom: 10vh;
  min-height: 80vh;
}
</style>
