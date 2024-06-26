<template>
  <main>
    <todo-tasks :tasks="todoTasksArr"></todo-tasks>
    <doing-tasks :tasks="doingTasksArr"></doing-tasks>
    <done-tasks :tasks="doneTasksArr"></done-tasks>
    <task-details v-if="isClicked"></task-details>
  </main>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useTasksStore } from '@/stores/tasks'
import TaskDetails from '../dialogs/TaskDetails.vue'
import TodoTasks from '../tasks/TodoTasks.vue'
import DoingTasks from '../tasks/DoingTasks.vue'
import DoneTasks from '../tasks/DoneTasks.vue'

const isClicked = ref(false)
const taskStore = useTasksStore()
const todoTasksArr = ref([])
const doingTasksArr = ref([])
const doneTasksArr = ref([])

onMounted(async () => {
  await taskStore.fetchTasks('todoTasks')
  todoTasksArr.value = taskStore.todoTasks

  await taskStore.fetchTasks('doingTasks')
  doingTasksArr.value = taskStore.doingTasks

  await taskStore.fetchTasks('doneTasks')
  doneTasksArr.value = taskStore.doneTasks
})
</script>

<style scoped>
main {
  display: grid;
  grid-template-columns: repeat(auto-fit, max(280px));
  grid-gap: 1.5rem;
  justify-content: center;
  align-items: flex-start;
  padding: 80px 0;
  color: white;
}
</style>
