<template>
  <section>
    <p class="task-category">
      <slot name="icon"></slot>
      {{ props.category }} ({{ props.tasks.length }})
    </p>
    <ul>
      <slot></slot>
    </ul>
  </section>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  category: {
    type: String,
    default: ''
  },
  tasks: {
    type: Array,
    default: () => []
  }
})
</script>
<style scoped>
section {
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
