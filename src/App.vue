<template>
  <div class="app">
    <the-header @showAddForm="handleShowAddForm"></the-header>
    <empty-board @showAddForm="handleShowAddForm" v-if="isEmpty"></empty-board>
    <task-board v-if="!isEmpty"></task-board>
    <add-new-task v-if="store.isAddTaskFormVisible"></add-new-task>
  </div>
</template>
<script setup>
import { useDialogStore } from './stores/dialog.js'
import TheHeader from './components/layout/TheHeader.vue'
import EmptyBoard from './components/board/EmptyBoard.vue'
import AddNewTask from './components/dialogs/AddNewTask.vue'
import TaskBoard from './components/board/TaskBoard.vue'

const store = useDialogStore()
</script>
<style>
.app {
  min-height: 100vh;
}
body {
  background-color: #20212c;
}
</style>

