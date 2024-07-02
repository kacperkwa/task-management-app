import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    todoTasks: [],
    doingTasks: [],
    doneTasks: []
  }),
  actions: {
    async addTask(task) {
      let category = this.getCategory(task.status)
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
      const responseData = await response.json()

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
          id: responseData[key].id,
          title: responseData[key].title,
          description: responseData[key].description || '',
          subtasks: responseData[key].subtasks || [],
          status: responseData[key].status
        })
        console.log(responseData[key].id)
        this[category] = tasks
      }
    },
    async updateSubtasks(taskId, subtaskIndex, isCompleted) {
      const task = await this.findTaskById(taskId)
      if (task) {
        task.subtasks[subtaskIndex].isCompleted = isCompleted
        await this.updateTask(task)
      }
    },
    async updateTaskStatus(taskId, newStatus) {
      const task = await this.findTaskById(taskId)
      if (task) {
        const oldCategory = this.getCategory(task.status)
        const newCategory = this.getCategory(newStatus)
        task.status = newStatus
        await this.updateTask(task)
        if (oldCategory !== newCategory) {
          await this.removeTaskFromCategory(taskId, oldCategory)
          await this.addTaskToCategory(task, newCategory)
        }
      }
    },
    async updateTask(task) {
      const category = this.getCategory(task.status)
      const response = await fetch(
        `https://management-app-d13cd-default-rtdb.europe-west1.firebasedatabase.app/tasks/${category}/${task.id}.json`,
        { method: 'PUT', body: JSON.stringify(task) }
      )
      await response.json()
    },
    async removeTaskFromCategory(taskId, category) {
      const response = await fetch(
        `https://management-app-d13cd-default-rtdb.europe-west1.firebasedatabase.app/tasks/${category}/${taskId}.json`,
        { method: 'DELETE' }
      )
      await response.json()
      await this.fetchTasks(category)
    },

    async addTaskToCategory(task, category) {
      const response = await fetch(
        `https://management-app-d13cd-default-rtdb.europe-west1.firebasedatabase.app/tasks/${category}.json`,
        { method: 'POST', body: JSON.stringify(task) }
      )
      await response.json()
      await this.fetchTasks(category)
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
          throw new Error(`Unknown status: ${status}`)
      }
    },
    async findTaskById(taskId) {
      // Iterate over all categories to find the task
      for (const category of ['todoTasks', 'doingTasks', 'doneTasks']) {
        const response = await fetch(
          `https://management-app-d13cd-default-rtdb.europe-west1.firebasedatabase.app/tasks/${category}/${taskId}.json`,
          { method: 'GET' }
        )
        if (response.ok) {
          const responseData = await response.json()
          for (const key in responseData) {
            return {
              id: responseData[key].id,
              title: responseData[key].title,
              description: responseData[key].description || '',
              subtasks: responseData[key].subtasks || [],
              status: responseData[key].status
            }
          }
        }
      }
      return null // Task not found
    }
  }
})
