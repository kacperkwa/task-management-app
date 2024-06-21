<template>
  <div class="base-card">
    <h3>{{ props.taskTitle }}</h3>
    <p>{{ props.doneSubtasks }} of {{ props.allSubtasks }} subtask</p>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  taskTitle: {
    type: String,
    required: true
  },
  doneSubtasks: {
    type: Number,
    default: 0
  },
  allSubtasks: {
    type: Number,
    default: 0
  }
})
</script>

<style scoped>
.base-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 280px;
  padding: 1.5rem;
  background-color: #2b2c37;
  box-shadow: 0px 4px 6px 0px rgba(54, 78, 126, 0.1);
  border-radius: 8px;
  flex-shrink: 0;
}
h3 {
  font-size: 15px;
}
p {
  color: #828fa3;
  font-size: 12px;
}
</style>
