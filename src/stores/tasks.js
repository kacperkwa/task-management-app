import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    todoTasks: [],
    doingTasks: [],
    completedTasks: []
  }),
  actions: {
    async addTask(task) {
      let category = ''
      if (task.status === 'todo') {
        category = 'todoTasks'
      } else if (task.status === 'doing') {
        category = 'doingTasks'
      } else {
        category = 'completedTasks'
      }
      const response = await fetch(
        `https://management-app-d13cd-default-rtdb.europe-west1.firebasedatabase.app/tasks/${category}.json`,
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
