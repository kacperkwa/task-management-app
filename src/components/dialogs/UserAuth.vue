<template>
  <base-dialog @close="closeLoginForm">
    <form @submit.prevent="submitForm">
      <h2>{{ submitCaption }}</h2>
      <input type="text" placeholder="Username" v-model="userName" />
      <input type="password" placeholder="Password" v-model="userPassword" />
      <p class="val-message" v-if="!isValid">{{ message }}</p>
      <base-button class="submit-action-btn">{{ submitCaption }}</base-button>
      <p class="mode-text">{{ switchModeText }}</p>
      <base-button class="change-action-btn" @click="changeActionMode" type="button">
        {{ switchModeBtnCaption }} instead!
      </base-button>
    </form>
  </base-dialog>
</template>
<script setup>
import { useDialogStore } from '@/stores/dialog'
import { useAuthStore } from '@/stores/auth'
import { ref, computed } from 'vue'
const dialogStore = useDialogStore()
const authStore = useAuthStore()
const userName = ref('')
const userPassword = ref('')
const actionMode = ref('login')
const message =
  'Please enter a valid username and password. Password should be at least 6 characters long.'
const isValid = ref(true)

const submitCaption = computed(() => (actionMode.value === 'login' ? 'Login' : 'Signup'))
const switchModeText = computed(() =>
  actionMode.value === 'login' ? 'Don’t have an account?' : 'Already have an account?'
)
const switchModeBtnCaption = computed(() => (actionMode.value === 'login' ? 'Signup' : 'Login'))
const closeLoginForm = () => {
  dialogStore.hideLoginForm()
}
const changeActionMode = () => {
  if (actionMode.value === 'login') {
    actionMode.value = 'signup'
  } else {
    actionMode.value = 'login'
  }
}
const submitForm = () => {
  isValid.value = true
  if (userName.value === '' || userPassword.value.length < 6) {
    isValid.value = false

    return
  }
  if (actionMode.value === 'login') {
    authStore.login(userName.value, userPassword.value)
  } else {
    console.log('Signing up')
  }
}
</script>

<style scoped>
h2 {
  font-size: 16px;
  /* text-align: center; */
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
input:focus {
  border: 3px solid #635fc7;
  background-color: #faf6ff;
  outline: none;
}

.mode-text {
  font-size: 14px;
  color: rgba(130, 143, 163, 0.75);
  text-align: center;
}
.val-message {
  font-size: 12px;
  color: #ff4d4f;
  text-align: center;
  letter-spacing: 1.2px;
}
</style>
