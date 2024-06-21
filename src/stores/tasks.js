import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    todoTasks: [],
    doingTasks: [],
    completedTasks: []
  }),
  actions: {
    async addTask(task) {
      const response = await fetch(
        'https://management-app-d13cd-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
        { method: 'POST', body: JSON.stringify(task) }
      )
      const responseData = await response.json()
      console.log(responseData)
    },
    removeTask(task) {
      this.todoTasks = this.todoTasks.filter((t) => t !== task)
    }
  }
})
