<template>
  <main>
    <tasks-list :tasks="todoTasksArr" :category="'TODO'" :color="'#49C4E5'"></tasks-list>
    <tasks-list :tasks="doingTasksArr" :category="'DOING'" :color="'#8471F2'"></tasks-list>
    <tasks-list :tasks="doneTasksArr" :category="'DONE'" :color="'#67E2AE'"></tasks-list>

    <task-details v-if="isClicked"></task-details>
  </main>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useTasksStore } from '@/stores/tasks'
import TaskDetails from '../dialogs/TaskDetails.vue'
import TasksList from '../tasks/TasksList.vue'

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
