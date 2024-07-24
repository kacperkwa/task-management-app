import { defineStore } from 'pinia'
import { apiKey } from '../firebase.js'
export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    userId: null,
    isLoggedIn: false
  }),

  actions: {
    async auth(userEmail, userPassword, mode) {
      let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`

      if (mode === 'signup') {
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`
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
      if (mode === 'login') {
        this.isLoggedIn = true
        this.userId = responseData.localId
        console.log(this.isLoggedIn)
      }

      this.token = responseData.idToken
      console.log(responseData)
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
      } catch (error) {
        console.log('Login failed', error)
      }

      console.log(this.userId)
    },

    setIsLoggedIn(token, userId, isLoggedIn) {
      this.token = token
      this.userId = userId
      this.isLoggedIn = isLoggedIn
    }
  }
})
