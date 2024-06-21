<template>
  <base-tasks category="TODO">
    <template #icon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
      >
        <circle cx="7.5" cy="7.5" r="7.5" fill="#49C4E5" />
      </svg>
    </template>
    <template #list-of-tasks>
      <li v-for="task in todoTaks" :key="task.id">
        <base-card
          :task-title="task.title"
          :done-subtasks="task.doneSubtasks"
          :all-subtasks="task.allSubtasks"
        ></base-card>
      </li>
    </template>
  </base-tasks>
</template>
<script setup>
import { ref } from 'vue'
import BaseTasks from '../layout/BaseTasks.vue'
import BaseCard from '../layout/BaseCard.vue'

const todoTaks = ref([
  { id: 1, title: 'Task 1', doneSubtasks: 2, allSubtasks: 3 },
  { id: 2, title: 'Task 2', doneSubtasks: 0, allSubtasks: 1 },
  { id: 3, title: 'Task 3', doneSubtasks: 1, allSubtasks: 2 },
  { id: 4, title: 'Task 4', doneSubtasks: 3, allSubtasks: 3 },
  { id: 5, title: 'Task 5', doneSubtasks: 0, allSubtasks: 1 },
  { id: 5, title: 'Task 5', doneSubtasks: 0, allSubtasks: 1 }
])
</script>
