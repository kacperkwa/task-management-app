<template>
  <main>
    <todo-tasks></todo-tasks>
    <doing-tasks></doing-tasks>
    <done-tasks></done-tasks>
  </main>
</template>
<script setup>
import TodoTasks from '../tasks/TodoTasks.vue'
import DoingTasks from '../tasks/DoingTasks.vue'
import DoneTasks from '../tasks/DoneTasks.vue'
</script>

<style scoped>
main {
  display: grid;
  grid-template-columns: repeat(auto-fit, max(280px));
  grid-gap: 1.5rem;
  justify-content: center;
  align-items: flex-start;
  padding: 80px 0;
  color: white;
}
</style>
