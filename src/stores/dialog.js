import { defineStore } from 'pinia'

export const useDialogStore = defineStore('main', {
  state: () => ({
    isAddTaskFormVisible: false,
    isLogginFormVisible: false
  }),
  actions: {
    showAddTaskForm() {
      this.isAddTaskFormVisible = true
    },
    hideAddTaskForm() {
      this.isAddTaskFormVisible = false
    },
    showLoginForm() {
      this.isLogginFormVisible = true
    },
    hideLoginForm() {
      this.isLogginFormVisible = false
    }
  }
})
