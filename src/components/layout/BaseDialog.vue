<template>
  <teleport to="body">
    <div class="base-dialog" @click="closeDialog">
      <div class="dialog-card" @click.stop>
        <slot></slot>
      </div>
    </div>
  </teleport>
</template>
<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['close'])
const closeDialog = () => {
  emit('close')
}
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
  padding: 1.2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
