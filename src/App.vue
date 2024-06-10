<template>
  <div class="app">
    <the-header></the-header>
    <empty-board v-if="isEmpty"></empty-board>
    <task-board v-if="!isEmpty"></task-board>
    <add-new-task v-if="store.isAddTaskFormVisible"></add-new-task>
    <user-auth v-if="store.isLogginFormVisible"></user-auth>
  </div>
</template>
<script setup>
import { useDialogStore } from './stores/dialog.js'
import UserAuth from './components/dialogs/UserAuth.vue'
import TheHeader from './components/layout/TheHeader.vue'
import EmptyBoard from './components/board/EmptyBoard.vue'
import AddNewTask from './components/dialogs/AddNewTask.vue'
import TaskBoard from './components/board/TaskBoard.vue'

const store = useDialogStore()
const isEmpty = true
</script>
<style>
.app {
  min-height: 100vh;
}
body {
  background-color: #20212c;
}
</style>
