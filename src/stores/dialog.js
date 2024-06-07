import { defineStore } from 'pinia'

export const useDialogStore = defineStore('main', {
  state: () => ({
    isAddTaskFormVisible: false
  }),
  actions: {
    showAddTaskForm() {
      this.isAddTaskFormVisible = true
    },
    hideAddTaskForm() {
      this.isAddTaskFormVisible = false
    }
  }
})