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
        this[category] = tasks
      }
    },
    async saveSubtaskChange(category, taskId, subtaskIsCompleted, subtaskId) {
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
      const taskData = await taskResponse.json() // eslint-disable-line
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
