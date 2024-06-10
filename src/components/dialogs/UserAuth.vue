<template>
  <base-dialog @close="closeLoginForm">
    <form>
      <h2>Login or Signup</h2>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <base-button type="submit">Signup instead!</base-button>
      <base-button type="submit">Login</base-button>
    </form>
  </base-dialog>
</template>
<script setup>
import { useDialogStore } from '@/stores/dialog'
const store = useDialogStore()

const closeLoginForm = () => {
  store.hideLoginForm()
}
</script>

<style scoped>
h2 {
  font-size: 16px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
input {
  padding: 0.5rem;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid rgba(130, 143, 163, 0.25);
}
</style>
