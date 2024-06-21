<template>
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
</template>
<script setup>
import BaseTasks from '../layout/BaseTasks.vue'
import BaseCard from '../layout/BaseCard.vue'
</script>
