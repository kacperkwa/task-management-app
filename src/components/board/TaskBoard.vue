<template>
  <main>
    <tasks-list
      @show-details="handleShowDetails"
      :tasks="todoTasksArr"
      :category="'TODO'"
      :color="'#49C4E5'"
    ></tasks-list>
    <tasks-list
      @show-details="handleShowDetails"
      :tasks="doingTasksArr"
      :category="'DOING'"
      :color="'#8471F2'"
    ></tasks-list>
    <tasks-list
      @show-details="handleShowDetails"
      :tasks="doneTasksArr"
      :category="'DONE'"
      :color="'#67E2AE'"
    ></tasks-list>

    <task-details v-if="dialogStore.isTaskDialogVisible"></task-details>
  </main>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useTasksStore } from '@/stores/tasks'
import { useDialogStore } from '@/stores/dialog'
import TaskDetails from '../dialogs/TaskDetails.vue'
import TasksList from '../tasks/TasksList.vue'

const taskStore = useTasksStore()
const dialogStore = useDialogStore()
const todoTasksArr = ref([])
const doingTasksArr = ref([])
const doneTasksArr = ref([])
const handleShowDetails = (task) => {
  dialogStore.showTaskDetails(task)
}

onMounted(async () => {
  await taskStore.fetchTasks('todoTasks')
  await taskStore.fetchTasks('doingTasks')
  await taskStore.fetchTasks('doneTasks')

  todoTasksArr.value = taskStore.todoTasks
  doingTasksArr.value = taskStore.doingTasks
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
