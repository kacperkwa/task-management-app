import { defineStore } from 'pinia'
export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false
  }),

  actions: {
    async auth(userEmail, userPassword, mode) {
      let url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAmwGQlRKEJQC21a3aoHo8BSMu6PcMV3gs'

      if (mode === 'signup') {
        url =
          'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAmwGQlRKEJQC21a3aoHo8BSMu6PcMV3gs'
      }
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          email: userEmail,
          password: userPassword,
          returnSecureToken: true
        })
      })
      const responseData = await response.json()
      if (!response.ok) {
        const error = new Error(responseData.message || 'Failed to authenticate.')
        throw error
      }
    },
    async signup(userEmail, userPassword) {
      try {
        await this.auth(userEmail, userPassword, 'signup')
      } catch (error) {
        console.log('Signup failed', error)
      }
    },
    async login(userEmail, userPassword) {
      try {
        await this.auth(userEmail, userPassword, 'login')
        this.isLoggedIn = true
      } catch (error) {
        console.log('Login failed', error)
      }
    }
  }
})
