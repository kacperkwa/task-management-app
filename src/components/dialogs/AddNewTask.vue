<template>
  <base-dialog @close="closeForm">
    <h2>Add New Task</h2>
    <form @submit.prevent="submitForm">
      <label for="task">Task</label>
      <input type="text" id="task" placeholder="e.g take coffee break" v-model="taskTitle" />
      <label for="description">Description</label>
      <textarea
        id="description"
        placeholder="e.g. It’s always good to take a break. This 
15 minute break will  recharge the batteries 
a little."
        v-model="taskDescription"
      ></textarea>
      <label for="subtasks">Subtasks</label>
      <div v-for="(subtask, index) in subtasks" :key="index" class="subtask">
        <input
          class="subtask-input"
          v-model="subtask.text"
          type="text"
          placeholder="e.g take coffee break"
        />
        <button type="button" class="delete-subtask-btn" @click="removeSubtask(subtask.id)">
          <img src="../../assets/icons/icon-cross.svg" alt="cross sign/delete" />
        </button>
      </div>
      <base-button class="add-subtask" type="button" @click="addSubtask">+ Add Subtask</base-button>
      <label for="status">Status</label>
      <select id="status" v-model="status">
        <option value="todo">Todo</option>
        <option value="doing">Doing</option>
        <option value="done">Done</option>
      </select>
      <base-button type="submit">Create Task</base-button>
    </form>
  </base-dialog>
</template>

<script setup>
import { Guid } from 'js-guid'
import { ref } from 'vue'
import { useDialogStore } from '../../stores/dialog.js'
import { useTasksStore } from '../../stores/tasks.js'
const store = useDialogStore()
const taskStore = useTasksStore()
const subtasks = ref([])
const taskTitle = ref('')
const taskDescription = ref('')
const todoTasks = ref([])
const status = ref('todo')

const submitForm = () => {
  const newTask = {
    title: taskTitle.value,
    description: taskDescription.value,
    subtasks: subtasks.value.map((subtask) => ({
      text: subtask.text,
      isCompleted: subtask.isCompleted
    })),
    status: status.value
  }
  todoTasks.value.push(newTask)
  taskStore.addTask(newTask)
  store.hideAddTaskForm(), clearForm()
}
const clearForm = () => {
  taskTitle.value = ''
  taskDescription.value = ''
  subtasks.value = []
  status.value = 'todo'
}
const addSubtask = () => {
  subtasks.value.push({ id: Guid.newGuid().toString(), text: '', isCompleted: false })
}

const removeSubtask = (index) => {
  subtasks.value = subtasks.value.filter((subtask) => subtask.id !== index)
}
const closeForm = () => {
  store.hideAddTaskForm()
}
</script>

<style scoped>
h2 {
  text-align: left;
  font-size: 18px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 0;
}
form input,
textarea,
select {
  padding: 0.5rem;
  font-size: 13px;
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid rgba(130, 143, 163, 0.25);
  color: white;
}
label {
  font-size: 12px;
  margin-top: 1rem;
}
textarea {
  min-height: 100px;
  line-height: 20px;
}
.add-subtask {
  background-color: white;
  color: #635fc7;
}
.delete-subtask-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.subtask {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}
.subtask-input {
  flex: 1;
}
select {
  background-color: #2b2c37;
  margin-bottom: 1rem;
}
</style>
