import { defineStore } from 'pinia'

export const useDialogStore = defineStore('dialog', {
  state: () => ({
    isAddTaskFormVisible: false,
    isLogginFormVisible: false,
    isTaskDialogVisible: false,
    dialogTask: null
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
    showTaskDetails(task) {
      this.isTaskDialogVisible = true
      this.dialogTask = task
    },
    hideTaskDetails() {
      this.isTaskDialogVisible = false
      this.dialogTask = null
    }
  }
})
