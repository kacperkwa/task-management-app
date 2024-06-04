<template>
  <div class="app">
    <the-header @showAddForm="handleShowAddForm"></the-header>
    <empty-board @showAddForm="handleShowAddForm"></empty-board>
    <add-new-task :isShowAddFormVisible="isVisible"></add-new-task>
  </div>
</template>
<script setup>
import TheHeader from './components/layout/TheHeader.vue'
import EmptyBoard from './components/board/EmptyBoard.vue'
import AddNewTask from './components/dialogs/AddNewTask.vue'
import { ref } from 'vue'
const isVisible = ref(false)
const handleShowAddForm = () => {
  isVisible.value = true
  console.log(isVisible.value)
}
</script>
<style>
.app {
  min-height: 100vh;
}
* {
  font-family: 'Plus Jakarta Sans', sans-serif;
}
html {
  box-sizing: border-box;
  font-size: 16px;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}
body {
  background-color: #20212c;
}
</style>
./components/layout/TheHeader.vue
