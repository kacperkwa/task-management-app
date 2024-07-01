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
    async removeTaskFromCategory(task) {
      const category = this.getCategoryByStatus(task.status)
      const taskIndex = this[category].findIndex((t) => t.id === task.id)
      if (taskIndex !== -1) {
        this[category].splice(taskIndex, 1)
        await fetch(
          `https://management-app-d13cd-default-rtdb.europe-west1.firebasedatabase.app/tasks/${category}/${task.id}.json`,
          { method: 'DELETE' }
        )
      }
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
        this[category] = tasks
      }
    },
    async updateSubtask(taskId, updateSubtask) {
      const task = this.findTaskById(taskId)
      if (task) {
        task.subtask = updateSubtask
        await this.updateTask(taskId, task)
      }
    },
    async updateTaskStatus(taskId, newStatus) {
      const task = this.findTaskById(taskId)
      if (task) {
        const newCategory = this.getCategoryByStatus(newStatus)

        task.status = newStatus
        console.log(task.status)
        // Remove from old category
        this.removeTaskFromCategory(task)

        // Add to new category
        this[newCategory].push(task)

        // Update in the database
        await this.updateTask(taskId, task)
      }
    },
    async updateTask(taskId, updatedTask) {
      const category = this.getCategoryByStatus(updatedTask.status)
      await fetch(
        `https://management-app-d13cd-default-rtdb.europe-west1.firebasedatabase.app/tasks/${category}/${taskId}.json`,
        { method: 'PATCH', body: JSON.stringify(updatedTask) }
      )
    },
    findTaskById(taskId) {
      return [...this.todoTasks, ...this.doingTasks, ...this.doneTasks].find(
        (task) => task.id === taskId
      )
    },
    getCategoryByStatus(status) {
      if (status === 'todo') {
        return 'todoTasks'
      } else if (status === 'doing') {
        return 'doingTasks'
      } else if (status === 'done') {
        return 'doneTasks'
      }
    }
  }
})
