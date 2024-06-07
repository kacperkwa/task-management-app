<template>
  <section>
    <p>This board is empty. Create a new column to get started.</p>
    <base-button @click="showAddForm">+ Add New Column</base-button>
  </section>
</template>

<script setup>
import { useDialogStore } from '@/stores/dialog'
const store = useDialogStore()
const showAddForm = () => {
  store.showAddTaskForm()
}
</script>
<style scoped>
section {
  height: 100vh;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 3rem;
  color: white;
}
button {
  padding: 1rem;
  font-size: 15px;
  font-weight: 600;
}
p {
  font-size: 18px;
  font-weight: 700;
  color: #828fa3;
}
</style>
