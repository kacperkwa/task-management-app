<template>
  <div class="tasks-menu">
    <button class="edit-task-btn">Edit Task</button>
    <button class="delete-task-btn">Delete Task</button>
  </div>
</template>

<style scoped>
div {
  position: absolute;
  top: 40px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  padding: 1rem 5rem 1rem 1rem;
  border-radius: 8px 2px 8px 8px;
  background-color: #20212c;
  box-shadow: 0px 10px 20px 0px rgba(54, 78, 126, 0.25);
}
button {
  background-color: transparent;
  border: none;
  font-size: 13px;
  cursor: pointer;
}
.edit-task-btn {
  color: #828fa3;
}
.delete-task-btn {
  color: #ea5555;
}
</style>
