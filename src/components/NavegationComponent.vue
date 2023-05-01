
<script setup>
import { useHeaderNavStore } from '../stores/header-nav'

const headerNavStore = useHeaderNavStore()
</script>
<template>
  
<h1>{{ headerNavStore.title }}</h1>
</template>



<style scoped>

</style>


