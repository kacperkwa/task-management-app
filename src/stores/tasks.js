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
    async saveSubtaskChange(taskId, subtaskIsCompleted) {
      const response = await fetch(
        `https://management-app-d13cd-default-rtdb.europe-west1.firebasedatabase.app/tasks/todoTasks/${taskId}/subtasks.json`,
        { method: 'PATCH', body: JSON.stringify({ subtasks: subtaskIsCompleted }) }
      )
      const responseData = await response.json()
      console.log(responseData)
    }
  }
})
