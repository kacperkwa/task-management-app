<template>
  <base-dialog>
    <div class="container">
      <div class="title-section">
        <h3>
          {{ taskTitle }} Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex, error,
        </h3>
        <button class="options-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="20"
            viewBox="0 0 5 20"
            fill="none"
          >
            <circle cx="2.30769" cy="2.30769" r="2.30769" fill="#828FA3" />
            <circle cx="2.30769" cy="10.0001" r="2.30769" fill="#828FA3" />
            <circle cx="2.30769" cy="17.6925" r="2.30769" fill="#828FA3" />
          </svg>
        </button>
      </div>

      <p class="description">
        We know what we're planning to build for version one. Now we need to finalise the first
        pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.
      </p>
      <div class="subtasks">
        <h3>Subtasks</h3>
        <ul>
          <li>
            <input type="checkbox" id="subtask1" name="subtask1" />
            <label for="subtask1">Create a pricing model</label>
          </li>
          <li>
            <input type="checkbox" id="subtask2" name="subtask2" />
            <label for="subtask2">Create a pricing model</label>
          </li>
          <li>
            <input type="checkbox" id="subtask3" name="subtask3" />
            <label for="subtask3">Create a pricing model</label>
          </li>
        </ul>
      </div>
    </div>
  </base-dialog>
</template>

<script setup>
import BaseDialog from '../layout/BaseDialog.vue'
</script>
<style scoped>
h3 {
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
}
.title-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}
.options-btn {
  background-color: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
}
.description {
  font-size: 14px;
  color: #828fa3;
  line-height: 23px;
}
</style>