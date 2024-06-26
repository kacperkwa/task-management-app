import { defineStore } from 'pinia'

export const useDialogStore = defineStore('dialog', {
  state: () => ({
    isAddTaskFormVisible: false,
    isLogginFormVisible: false,
    isTaskClicked: false
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
    },
    showTaskDetails() {
      this.isTaskClicked = true
      console.log('asd')
    },
    hideTaskDetails() {
      this.isTaskClicked = false
    }
  }
})
