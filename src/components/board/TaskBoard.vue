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
      <template #list-of-tasks>
        <li>
          <base-card></base-card>
        </li>
        <li>
          <base-card></base-card>
        </li>
        <li>
          <base-card></base-card>
        </li>
      </template>
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
      <template #list-of-tasks>
        <li>
          <base-card></base-card>
        </li>
        <li>
          <base-card></base-card>
        </li>
      </template>
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
      <template #list-of-tasks>
        <li>
          <base-card></base-card>
        </li>
      </template>
    </base-tasks>
  </main>
</template>
<script setup>
import BaseCard from '../layout/BaseCard.vue'
import BaseTasks from '../layout/BaseTasks.vue'
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
