<template>
  <base-dialog @close="closeLoginForm">
    <form @submit.prevent>
      <h2>Login or Signup</h2>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <base-button class="submit-action-btn" type="submit">{{ submitBtnCaption() }}</base-button>
      <p class="mode-text">{{ switchModeText() }}</p>
      <base-button class="change-action-btn" @click="changeActionMode" type="button"
        >{{ switchModeBtnCaption() }} instead!</base-button
      >
    </form>
  </base-dialog>
</template>
<script setup>
import { useDialogStore } from '@/stores/dialog'
import { ref } from 'vue'
const store = useDialogStore()

const actionMode = ref('login')
const closeLoginForm = () => {
  store.hideLoginForm()
}
const changeActionMode = () => {
  actionMode.value = actionMode.value === 'login' ? 'signup' : 'login'
}
const submitBtnCaption = () => {
  if (actionMode.value === 'login') {
    return 'Login'
  } else {
    return 'Signup'
  }
}
const switchModeBtnCaption = () => {
  if (actionMode.value === 'login') {
    return 'Signup'
  } else {
    return 'Login'
  }
}
const switchModeText = () => {
  if (actionMode.value === 'login') {
    return 'Don’t have an account?'
  } else {
    return 'Already have an account?'
  }
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
.mode-text {
  font-size: 14px;
  color: rgba(130, 143, 163, 0.75);
  text-align: center;
}
</style>
