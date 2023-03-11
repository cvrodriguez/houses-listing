<script setup>
import { onMounted } from 'vue'
import {useHeaderNavStore} from '../stores/header-nav'

const headerNavStore = useHeaderNavStore()

onMounted(() => {
  headerNavStore.title= 'About'
})
</script>

<template>
  <div class="margin-content">
    <div class="container">
      <h2>About DTT Real Estate</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>

      <p>
        Various versions have evolved over the years, sometimes by accident, sometimes on purpose
        (injected humour and the like).
      </p>
    </div>

    <h2>Design and Development</h2>
    <div class="sign">
      <img src="../assets/img_logo_dtt@3x.png" alt="" />

      <div>
        <p>By DTT</p>
        <a href="https://www.d-tt.nl/">www.d-tt.nl</a>
      </div>
    </div>
  </div>
</template>


<style scoped>
.sign p {
  margin: 0;
  text-align: justify;
}
a {
  text-decoration: none;
}
img {
  width: 7rem;
  height: 2.2rem;
}
.container {
  margin: 40px 0 20px 0;
}
.sign {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1rem;
}

@media screen and (min-width: 768px) {
  img {
    width: 10rem;
    height: 3rem;
  }
}
</style>