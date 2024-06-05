<template>
  <main>
    <section class="todo">
      <p class="task-category">TODO (3)</p>
      <base-card></base-card>
      <base-card></base-card>
      <base-card></base-card>
    </section>
  </main>
</template>
<script setup>
import BaseCard from '../layout/BaseCard.vue'
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
.todo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
}
.task-category {
  align-self: flex-start;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2.4px;
  color: #8a8d9d;
  padding: 0.5rem;
}
</style>
