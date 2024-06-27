<template>
  <base-tasks v-if="props.tasks.length > 0" :category="category" :tasks="tasks">
    <template #icon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
      >
        <circle cx="7.5" cy="7.5" r="7.5" :fill="color" />
      </svg>
    </template>
    <template #list-of-tasks>
      <li v-for="task in props.tasks" :key="task.id" @click="showDetails">
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
import BaseTasks from '../layout/BaseTasks.vue'
import BaseCard from '../layout/BaseCard.vue'
import { defineProps } from 'vue'
const props = defineProps(['tasks', 'color', 'category'])
</script>
