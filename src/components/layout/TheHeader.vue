<template>
  <header>
    <nav>
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
    </nav>
  </header>
</template>
<script setup>
import { ref, defineEmits } from 'vue'

const isAddFormVisible = ref(false)
const emit = defineEmits(['showAddForm'])
const showAddForm = () => {
  isAddFormVisible.value = true
  emit('showAddForm', isAddFormVisible.value)
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
nav {
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
