<template>
  <div class="tasks-menu">
    <button class="edit-task-btn" @click="editTask">Edit Task</button>
    <button class="delete-task-btn" @click="deleteTask">Delete Task</button>
  </div>
</template>
<script setup>
import { defineEmits } from 'vue'
const emit = defineEmits(['editTask', 'deleteTask'])
const editTask = () => {
  emit('editTask')
}
const deleteTask = (taskStatus, taskId) => {
  emit('deleteTask', taskStatus, taskId)
}
</script>
<style scoped>
div {
  position: absolute;
  top: 40px;
  right: 13px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  padding: 2rem 6rem 2rem 2rem;
  border-radius: 8px 0 8px 8px;
  background-color: #20212c;
  box-shadow: 0px 5px 20px 0px rgba(54, 78, 126, 0.25);
}
button {
  background-color: transparent;
  border: none;
  font-size: 13px;
  cursor: pointer;
}
.edit-task-btn {
  color: #828fa3;
}
.delete-task-btn {
  color: #ea5555;
}
</style>
