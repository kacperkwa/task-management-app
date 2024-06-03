<template>
  <section>
    <p>This board is empty. Create a new column to get started.</p>
    <base-button @click="showAddForm">+ Add New Column</base-button>
    <add-new-task :showAddForm="isShow"></add-new-task>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import AddNewTask from '../dialogs/AddNewTask.vue'
import BaseButton from '../UI/BaseButton.vue'
const isShow = ref(false)

const showAddForm = () => {
  isShow.value = !isShow.value
  console.log(isShow.value)
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
