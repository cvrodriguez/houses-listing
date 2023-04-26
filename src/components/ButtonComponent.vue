<script setup></script>

<template>
  <button><slot></slot></button>
</template>

<style  scoped>
button {
  width: 100%;
  height: 2.5rem;
  border: none;
  color: var(--element-tertiary-color);
  border-radius: 10px 10px 10px 10px;
}

button.primary {
  background: var(--element-primary-color);
  border-radius: 10px 0 0 10px;
}

button.primary.inactive {
  background: var(--element-cuartiary-color);
}
button.secondary.active {
  background: var(--element-primary-color);
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
@media screen and (min-width: 768px) {
  button {
    width: 100%;
    border-radius: 5px 5px 5px 5px;
  }
}
</style>