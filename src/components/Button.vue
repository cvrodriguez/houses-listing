<script setup>
</script>

<template>
  <button><slot></slot></button>
</template>

<style  scoped>
button {
  width: 100%;
  height: 5vh;
  border: none;
  color: var( --element-tertiary-color);
  border-radius: 10px 10px 10px 10px;
}

button.primary {
  background: var(--element-primary-color);
  border-radius: 10px 0 0 10px;
}
button.secondary {
  background: var(--element-cuartiary-color);
  border-radius: 0 10px 10px 0;
}
button.post-primary {
  background: var(--element-primary-color);
}
button.post-secondary {
  background: var(--element-secundary-color);
}
</style>