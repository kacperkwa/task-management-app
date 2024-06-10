<template>
  <section>
    <div class="add-column" v-if="isLoggedIn">
      <p>This board is empty. Create a new column to get started.</p>
      <base-button @click="showAddForm">+ Add New Column</base-button>
    </div>
    <div class="login" v-if="!isLoggedIn">
      <p>You are not logged in.</p>
      <p>Please login or signup first!</p>
      <base-button @click="showLogForm">Login now!</base-button>
    </div>
  </section>
</template>

<script setup>
import { useDialogStore } from '@/stores/dialog'
import { ref } from 'vue'
const isLoggedIn = ref(false)
const store = useDialogStore()
const showAddForm = () => {
  store.showAddTaskForm()
}
const showLogForm = () => {
  store.showLoginForm()
}
</script>
<style scoped>
.add-column,
.login {
  height: 100vh;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 2rem;
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
