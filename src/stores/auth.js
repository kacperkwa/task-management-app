import { defineStore } from 'pinia'
export const useAuthStore = defineStore('main', {
  state: () => ({
    userName: '',
    password: '',
    formIsValid: true,
    actionMode: 'login'
  }),
  getters: {
    submitBtnCaption(state) {
      return state.actionMode === 'login' ? 'Login' : 'Signup'
    },
    switchModeBtnCaption(state) {
      return state.actionMode === 'login' ? 'Signup' : 'Login'
    },
    switchModeText(state) {
      return state.actionMode === 'login' ? 'Don’t have an account?' : 'Already have an account?'
    }
  },
  actions: {
    changeActionMode() {
      this.actionMode = this.actionMode === 'login' ? 'signup' : 'login'
    },
    async submitForm() {
      if (this.userName === '' || this.password.length < 6) {
        this.formIsValid = false
        console.log('Form is not valid')
        return
      }
      this.formIsValid = true
    }
  }
})

// https://management-app-d13cd-default-rtdb.europe-west1.firebasedatabase.app/
