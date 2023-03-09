<script setup>
import Button from '../components/Button.vue'
</script>

<template>
  <div class="delete-container">
    <div class="confirmation-container margin-content">
      <h1>Delete listing</h1>

      <div class="message-confirmation">
        <p>Are you sure you want to delete this listing?</p>
        <p>This action cannot be undone</p>
      </div>

      <div class="button-container">
        <Button class="post-primary">YES, DELET</Button>
        <Button class="post-secondary">GO BACK</Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.delete-container {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background: rgba(34, 34, 34, 0.75);
  background-color: rgba(0, 0, 0, 0.2);
}
.confirmation-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--element-background2-color);
  border-radius: 8px;
  margin-top: 30vh;
  padding-top: 3vh;
  height: 30vh;
}

.button-container {
  display: flex;
  flex-direction: column;
  width: 250px;
  margin-top: 30px;
  margin-bottom: 30px;
  gap: 10px;
}
p {
  margin: 0%;
  text-align: center;
}
</style>