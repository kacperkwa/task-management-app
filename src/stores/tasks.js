import { defineStore } from 'pinia'
import { useAuthStore } from './auth.js'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    todoTasks: [],
    doingTasks: [],
    doneTasks: []
  }),
  actions: {
    async addTask(task) {
      const authStore = useAuthStore()
      const category = this.getCategory(task.status)
      const response = await fetch(
        `https://management-app-d13cd-default-rtdb.europe-west1.firebasedatabase.app/tasks/${category}.json?auth=${authStore.token}`,
        { method: 'POST', body: JSON.stringify(task) }
      )

      if (!response.ok) {
        alert('Something went wrong')
        throw new Error('Something went wrong')
      }

      const responseData = await response.json()
      this[category].push({ ...task })
      console.log(responseData.name)
    },

    async fetchTasks(category) {
      const authStore = useAuthStore()
      const response = await fetch(
        `https://management-app-d13cd-default-rtdb.europe-west1.firebasedatabase.app/tasks/${category}.json?auth=${authStore.token}`,
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
      }
      this[category] = tasks
    },
    async removeTask(status, taskId) {
      const category = this.getCategory(status)
      const response = await fetch(
        `https://management-app-d13cd-default-rtdb.europe-west1.firebasedatabase.app/tasks/${category}/${taskId}.json`,
        { method: 'DELETE' }
      )
      const responseData = await response.json() // eslint-disable-line
      this[category] = this[category].filter((task) => task.id !== taskId)
    },

    async saveSubtaskChange(status, taskId, subtaskIsCompleted, subtaskId) {
      const category = this.getCategory(status)
      const response = await fetch(
        `https://management-app-d13cd-default-rtdb.europe-west1.firebasedatabase.app/tasks/${category}/${taskId}/subtasks/${subtaskId}/isCompleted.json`,
        { method: 'PUT', body: JSON.stringify(subtaskIsCompleted) }
      )

      const responseData = await response.json() // eslint-disable-line
    },
    async saveStatusChange(oldStatus, taskId, newStatus) {
      if (oldStatus === newStatus) return
      const oldCategory = this.getCategory(oldStatus)
      const newCategory = this.getCategory(newStatus)
      const taskResponse = await fetch(
        `https://management-app-d13cd-default-rtdb.europe-west1.firebasedatabase.app/tasks/${oldCategory}/${taskId}.json`,
        { method: 'GET' }
      )
      const taskData = await taskResponse.json()
      taskData.status = newStatus
      const addTaskResponse = await fetch(
        `https://management-app-d13cd-default-rtdb.europe-west1.firebasedatabase.app/tasks/${newCategory}/${taskId}.json`,
        { method: 'PUT', body: JSON.stringify(taskData) }
      )
      const addTaskData = await addTaskResponse.json() // eslint-disable-line

      console.log(oldStatus, taskId, newStatus)

      const removeTaskResponse = await fetch(
        `https://management-app-d13cd-default-rtdb.europe-west1.firebasedatabase.app/tasks/${oldCategory}/${taskId}.json`,
        { method: 'DELETE' }
      )
      const removeTaskData = await removeTaskResponse.json() // eslint-disable-line
      this[oldCategory] = this[oldCategory].filter((task) => task.id !== taskId)
      this[newCategory].push({ ...taskData, id: taskId })
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
