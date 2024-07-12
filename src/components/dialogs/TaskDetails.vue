<template>
  <base-dialog @close="dialogStore.hideTaskDetails">
    <div class="container">
      <div class="title-section">
        <h3>{{ props.task.title }}</h3>
        <button @click="toggleTaskMenu" class="options-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="20"
            viewBox="0 0 5 20"
            fill="none"
          >
            <circle cx="2.30769" cy="2.30769" r="2.30769" fill="#828FA3" />
            <circle cx="2.30769" cy="10.0001" r="2.30769" fill="#828FA3" />
            <circle cx="2.30769" cy="17.6925" r="2.30769" fill="#828FA3" />
          </svg>
        </button>
      </div>
      <tasks-menu v-if="toggleMenu"></tasks-menu>
      <p class="description">
        {{ props.task.description }}
      </p>
      <div class="subtasks">
        <h3>Subtasks</h3>
        <p v-if="!task.subtasks || task.subtasks.length === 0">Edit your task to add subtask.</p>
        <ul v-else>
          <li v-for="(subtask, index) in task.subtasks" :key="index" @click="toggleSubtask(index)">
            <input
              type="checkbox"
              :id="'subtask' + index"
              v-model="subtask.isCompleted"
              @change="subtaskChange(index)"
            />
            <label
              @click="toggleSubtask(index)"
              :class="{ completed: subtask.isCompleted }"
              :for="'subtask' + index"
              >{{ subtask.text }}</label
            >
          </li>
        </ul>
      </div>
      <div class="status">
        <label for="status">Current Status</label>
        <select id="status" v-model="task.status" @change="statusChange">
          <option value="todo">Todo</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
      </div>
    </div>
  </base-dialog>
</template>

<script setup>
import BaseDialog from '../layout/BaseDialog.vue'
import TasksMenu from '../tasks/TasksMenu.vue'
import { useDialogStore } from '@/stores/dialog'
import { toRefs, defineProps, ref } from 'vue'
import { useTasksStore } from '@/stores/tasks'

const dialogStore = useDialogStore()
const taskStore = useTasksStore()
const props = defineProps(['task', 'subtasks'])
const { task } = toRefs(props)
const status = task.value.status
const reactiveTask = ref(task.value)
const toggleMenu = ref(false)

const subtaskChange = (index) => {
  const subtaskIsCompleted = task.value.subtasks[index].isCompleted
  taskStore.saveSubtaskChange(task.value.status, reactiveTask.value.id, subtaskIsCompleted, index)
}
const statusChange = () => {
  taskStore.saveStatusChange(status, reactiveTask.value.id, reactiveTask.value.status)
}
const toggleSubtask = (index) => {
  reactiveTask.value.subtasks[index].isCompleted = !reactiveTask.value.subtasks[index].isCompleted
  subtaskChange(index)
}
const toggleTaskMenu = () => {
  toggleMenu.value = !toggleMenu.value
}
</script>
<style scoped>
.completed {
  text-decoration: line-through;
  color: #828fa3;
}
h3 {
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
}
.title-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  position: relative;
}
.options-btn {
  background-color: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
}
.description {
  font-size: 14px;
  color: #828fa3;
  line-height: 23px;
}
.subtasks {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.subtasks h3 {
  font-size: 12px;
}
.subtasks li {
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
  align-items: center;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  background-color: #20212c;
  font-size: 12px;
}
.subtasks li:hover {
  background-color: #635fc7;
  cursor: pointer;
}
.subtasks li input {
  width: 20px;
  height: 20px;
}

.subtasks li label {
  cursor: pointer;
}

select {
  padding: 0.5rem;
  font-size: 13px;
  background-color: #2b2c37;
  border-radius: 4px;
  border: 1px solid rgba(130, 143, 163, 0.25);
  color: white;
}
.status {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  font-size: 12px;
}
.subtasks p {
  font-size: 14px;
  color: #828fa3;
  line-height: 23px;
}
</style>
