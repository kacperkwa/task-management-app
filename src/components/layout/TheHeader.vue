<template>
  <header>
    <section>
      <div>
        <a class="logo" href="home"><img src="../../assets/icons/logo-mobile.svg" alt="" /></a>
      </div>
      <ul>
        <li class="platform-launch">Platform Launch</li>
        <li>
          <base-button @click="showAddForm"
            ><img src="../../assets/icons/icon-add-task-mobile.svg" alt=""
          /></base-button>
        </li>
      </ul>
    </section>
  </header>
</template>
<script setup>
import { useDialogStore } from '@/stores/dialog'
const store = useDialogStore()
const showAddForm = () => {
  store.showAddTaskForm()
}
</script>
<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background-color: #2b2c37;
  color: white;
  font-size: 18px;
}
section {
  padding: 1rem;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
}
ul {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
li {
  display: flex;
  align-items: center;
}
li button img {
  width: 16px;
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
