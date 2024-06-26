<template>
  <base-dialog @close="dialogStore.hideTaskDetails">
    <div class="container">
      <div class="title-section">
        <h3>{{ props.task.title }}</h3>
        <button class="options-btn">
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

      <p class="description">
        {{ props.task.description }}
      </p>
      <div class="subtasks">
        <h3>Subtasks</h3>
        <p v-if="props.subtasks">Edit your task to add subtask.</p>
        <ul>
          <li v-for="(subtask, index) in task.subtasks" :key="index">
            <input
              type="checkbox"
              :id="'subtask' + index"
              v-model="subtask.isCompleted"
              @change="saveSubtaskChanges(subtask, index)"
            />
            <label :class="{ completed: subtask.isCompleted }" :for="'subtask' + index">{{
              subtask.text
            }}</label>
          </li>
        </ul>
      </div>
      <div class="status">
        <label for="status">Current Status</label>
        <select id="status" v-model="task.status" @change="saveTaskStatus">
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
import { useDialogStore } from '@/stores/dialog'
import { toRefs, defineProps } from 'vue'
import { useTasksStore } from '@/stores/tasks'

const dialogStore = useDialogStore()
const taskStore = useTasksStore()
const props = defineProps(['task', 'subtasks'])
const { task } = toRefs(props)
const saveSubtaskChanges = async (subtask, index) => {
  const updatedSubtask = [...task.value.subtasks]
  updatedSubtask[index] = { ...subtask, isCompleted: !subtask.isCompleted }
  await taskStore.updateSubtask(task.value.id, updatedSubtask)
}
const saveTaskStatus = async () => {
  await taskStore.updateTaskStatus(task.value.id, task.value.status)
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
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 4px;
  background-color: #20212c;
  font-size: 12px;
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
