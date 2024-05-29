<template>
  <div class="app">
    <the-header></the-header>
    <empty-board></empty-board>
    <add-form></add-form>
  </div>
</template>
<script setup>
import TheHeader from './components/layout/TheHeader.vue'
import EmptyBoard from './components/board/EmptyBoard.vue'
import AddForm from './components/dialogs/AddForm.vue'
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
