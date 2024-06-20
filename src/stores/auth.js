import { defineStore } from 'pinia'
export const useAuthStore = defineStore('auth', {
  state: () => ({
    name: '',
    password: ''
  }),
  actions: {
    login(userName, userPassword) {
      this.name = userName
      this.password = userPassword
      console.log(this.name, this.password)
    },
    signup() {
      console.log('signup')
    }
  }
})

// https://management-app-d13cd-default-rtdb.europe-west1.firebasedatabase.app/
