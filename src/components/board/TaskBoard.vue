<template>
  <main>
    <tasks-list
      @show-details="handleShowDetails"
      :tasks="taskStore.todoTasks"
      :category="'TODO'"
      :color="'#49C4E5'"
    ></tasks-list>
    <tasks-list
      @show-details="handleShowDetails"
      :tasks="taskStore.doingTasks"
      :category="'DOING'"
      :color="'#8471F2'"
    ></tasks-list>
    <tasks-list
      @show-details="handleShowDetails"
      :tasks="taskStore.doneTasks"
      :category="'DONE'"
      :color="'#67E2AE'"
    ></tasks-list>

    <task-details
      :task="dialogStore.dialogTask"
      :subtasks="
        Array.isArray(dialogStore.dialogTask.subtasks) ? dialogStore.dialogTask.subtasks : []
      "
      v-if="dialogStore.isTaskDialogVisible"
    ></task-details>
  </main>
</template>
<script setup>
import { onMounted } from 'vue'
import { useTasksStore } from '@/stores/tasks'
import { useDialogStore } from '@/stores/dialog'
import TaskDetails from '../dialogs/TaskDetails.vue'
import TasksList from '../tasks/TasksList.vue'

const taskStore = useTasksStore()
const dialogStore = useDialogStore()
const handleShowDetails = (task) => {
  dialogStore.showTaskDetails(task)
}

onMounted(async () => {
  await taskStore.fetchTasks('todoTasks')
  await taskStore.fetchTasks('doingTasks')
  await taskStore.fetchTasks('doneTasks')
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
