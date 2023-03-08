<script setup>
import Header from './components/Header.vue'
// import Button from './components/Button.vue'
import Footer from './components/Footer.vue'
// import Search from './components/Search.vue'
// import Menssage from './components/Message.vue'
// import HouseCard from './components/HouseCard.vue'
</script>

<template>
  <div class="main-container">
   
   
    <div class="components-container">
      <Header></Header>
    
      <RouterView />
    </div>
    
    <Footer class="footer"></Footer>
  </div>
 
</template>


<style scoped>
.main-container {
  min-height: 100vh;
  width: 100%;
}
.components-container {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 10vh;
}
.filter-buttons{
  display: flex;
}
</style>
