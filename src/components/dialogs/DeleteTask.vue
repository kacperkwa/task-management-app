<template>
  <base-dialog @close="dialogStore.hideDeleteDialog">
    <div class="container">
      <h3>Delete this task?</h3>
      <p>
        Are you sure you want to delete the <span> '{{ props.taskTitle }}'</span> task and its
        subtasks? This action cannot be reversed.
      </p>
      <div class="buttons-container">
        <base-button class="delete-btn" @click="deleteTask">Delete</base-button>
        <base-button class="cancel-btn" @click="dialogStore.hideDeleteDialog">Cancel</base-button>
      </div>
    </div>
  </base-dialog>
</template>
<script setup>
import { useDialogStore } from '@/stores/dialog'
import { defineProps, defineEmits } from 'vue'
import BaseDialog from '../layout/BaseDialog.vue'
import BaseButton from '../UI/BaseButton.vue'
const dialogStore = useDialogStore()
const emit = defineEmits(['deleteTask'])
const props = defineProps(['taskTitle'])
const deleteTask = () => {
  emit('deleteTask')
}
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
h3 {
  color: #ea5555;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
}
p {
  font-size: 13px;
  font-weight: 500;
  line-height: 23px;
  color: #828fa3;
}
.buttons-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.delete-btn {
  background-color: #ea5555;
  color: #fff;
}
.cancel-btn {
  background-color: #fff;
  color: #635fc7;
}
button {
  font-size: 13px;
  width: 100%;
}
span {
  color: #fff;
}
</style>
