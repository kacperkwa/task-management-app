<template>
  <div class="base-dialog">
    <div class="dialog-card">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
// Add your script setup code here
</script>

<style scoped>
.base-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dialog-card {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  width: 90%;
  max-width: 480px;
  color: white;
  background-color: #2b2c37;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
