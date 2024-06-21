<template>
  <main>
    <base-tasks category="TODO">
      <template #icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
        >
          <circle cx="7.5" cy="7.5" r="7.5" fill="#49C4E5" />
        </svg>
      </template>
      <base-card></base-card>
    </base-tasks>
    <base-tasks category="DOING">
      <template #icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
        >
          <circle cx="7.5" cy="7.5" r="7.5" fill="#8471F2" />
        </svg>
      </template>
      <base-card></base-card>
    </base-tasks>
    <base-tasks category="DONE">
      <template #icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
        >
          <circle cx="7.5" cy="7.5" r="7.5" fill="#67E2AE" />
        </svg>
      </template>
      <base-card></base-card>
    </base-tasks>
  </main>
</template>
<script setup>
import BaseCard from '../layout/BaseCard.vue'
import BaseTasks from '../layout/BaseTasks.vue'
</script>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding-top: 80px;
  color: white;
}
.todo,
.doing,
.done {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  cursor: pointer;
}
.task-category {
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 0.5rem;
  align-self: flex-start;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2.4px;
  color: #8a8d9d;
  padding: 0.5rem;
}
</style>
