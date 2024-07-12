import { defineStore } from 'pinia'

export const useDialogStore = defineStore('dialog', {
  state: () => ({
    isAddTaskFormVisible: false,
    isLogginFormVisible: false,
    isTaskDialogVisible: false,
    isDeleteDialogVisible: false,
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
    },
    showDeleteDialog() {
      this.isDeleteDialogVisible = true
      console.log('asd')
    },
    hideDeleteDialog() {
      this.isDeleteDialogVisible = false
    }
  }
})
