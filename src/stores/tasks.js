import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    todoTasks: [],
    doingTasks: [],
    doneTasks: []
  }),
  actions: {
    async addTask(task) {
      let category = ''
      if (task.status === 'todo') {
        category = 'todoTasks'
      } else if (task.status === 'doing') {
        category = 'doingTasks'
      } else if (task.status === 'done') {
        category = 'doneTasks'
      }
      const response = await fetch(
        `https://management-app-d13cd-default-rtdb.europe-west1.firebasedatabase.app/tasks/${category}.json`,
        { method: 'POST', body: JSON.stringify(task) }
      )
      const responseData = await response.json() // eslint-disable-line
      await this.fetchTasks(category)
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
          description: responseData[key].description || '',
          subtasks: responseData[key].subtasks || [],
          status: responseData[key].status
        })
        if (category === 'todoTasks') {
          this.todoTasks = tasks
        } else if (category === 'doingTasks') {
          this.doingTasks = tasks
        } else if (category === 'doneTasks') {
          this.doneTasks = tasks
        }
      }
    }
  }
})
