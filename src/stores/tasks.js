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
    },

    async fetchTasks(category) {
      const response = await fetch(
        `https://management-app-d13cd-default-rtdb.europe-west1.firebasedatabase.app/tasks/${category}.json`
      )
      const responseData = await response.json()
      const tasks = []
      for (const key in responseData) {
        tasks.push({
          id: key,
          title: responseData[key].title,
          description: responseData[key].description,
          subtasks: responseData[key].subtasks,
          status: responseData[key].status
        })
        if (category === 'todoTasks') {
          this.todoTasks = tasks
        } else if (category === 'doingTasks') {
          this.doingTasks = tasks
        } else if (category === 'completedTasks') {
          this.completedTasks = tasks
        }
      }
    }
  }
})