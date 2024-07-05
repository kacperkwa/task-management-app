import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    todoTasks: [],
    doingTasks: [],
    doneTasks: []
  }),
  actions: {
    async addTask(task) {
      const category = this.getCategory(task.status)
      const response = await fetch(
        `https://management-app-d13cd-default-rtdb.europe-west1.firebasedatabase.app/tasks/${category}.json`,
        { method: 'POST', body: JSON.stringify(task) }
      )
      const responseData = await response.json()
      task.id = responseData.name
      this[category].push({ ...task })
      console.log(responseData.name)
    },

    async fetchTasks(category) {
      const response = await fetch(
        `https://management-app-d13cd-default-rtdb.europe-west1.firebasedatabase.app/tasks/${category}.json`,
        { method: 'GET' }
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
        console.log()
        this[category] = tasks
      }
    },
    async saveSubtaskChange(category, taskId, subtaskIsCompleted, subtaskId) {
      const response = await fetch(
        `https://management-app-d13cd-default-rtdb.europe-west1.firebasedatabase.app/tasks/${category}/${taskId}/subtasks/${subtaskId}/isCompleted.json`,
        { method: 'PUT', body: JSON.stringify(subtaskIsCompleted) }
      )
      const responseData = await response.json()
      console.log(responseData)
    },
    getCategory(status) {
      switch (status) {
        case 'todo':
          return 'todoTasks'
        case 'doing':
          return 'doingTasks'
        case 'done':
          return 'doneTasks'
        default:
          return ''
      }
    }
  }
})
