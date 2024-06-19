<template>
  <base-dialog @close="closeLoginForm">
    <form @submit.prevent="submitForm">
      <h2>{{ submitBtnCaption }}</h2>
      <input type="text" placeholder="Username" v-model="userName" />
      <input type="password" placeholder="Password" v-model="password" />
      <base-button class="submit-action-btn">{{ submitBtnCaption }}q</base-button>
      <p class="mode-text">{{ switchModeText }}</p>
      <base-button class="change-action-btn" @click="changeActionMode" type="button">
        {{ switchModeBtnCaption }}instead!
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
const userName = ref(authStore.userName)
const password = ref(authStore.password)

const closeLoginForm = () => {
  dialogStore.hideLoginForm()
}

const changeActionMode = () => {
  authStore.changeActionMode()
}
const submitBtnCaption = computed(() => authStore.submitBtnCaption)
const switchModeBtnCaption = computed(() => authStore.switchModeBtnCaption)
const switchModeText = computed(() => authStore.switchModeText)
const submitForm = () => {
  authStore.userName = userName.value
  authStore.password = password.value
  authStore.submitForm()
  console.log('form submitted')
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
.mode-text {
  font-size: 14px;
  color: rgba(130, 143, 163, 0.75);
  text-align: center;
}
</style>
