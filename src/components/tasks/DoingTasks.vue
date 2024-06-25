<template>
  <base-tasks v-if="tasks.length > 0" category="DOING" :tasks="tasks">
    <template #icon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
      >
        <circle cx="7.5" cy="7.5" r="7.5" fill="#8471F2" />
      </svg>
    </template>
    <template #list-of-tasks>
      <li v-for="task in tasks" :key="task.id">
        <base-card
          :task-title="task.title"
          :done-subtasks="task.subtasks.filter((subtask) => subtask.isCompleted).length"
          :all-subtasks="task.subtasks.length"
        ></base-card>
      </li>
    </template>
  </base-tasks>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useTasksStore } from '@/stores/tasks'
import BaseTasks from '../layout/BaseTasks.vue'
import BaseCard from '../layout/BaseCard.vue'

const taskStore = useTasksStore()
const tasks = ref([])

onMounted(async () => {
  await taskStore.fetchTasks('doingTasks')
  tasks.value = taskStore.doingTasks
})
</script>
