import BaseButton from '../UI/BaseButton.vue';
<template>
  <header>
    <nav>
      <div>
        <a href="home"><img src="../../assets/icons/logo-mobile.svg" alt="" /></a>
      </div>
      <ul>
        <li>Platform Launch</li>
        <li>
          <base-button
            ><img src="../../assets/icons/icon-add-task-mobile.svg" alt=""
          /></base-button>
        </li>
      </ul>
    </nav>
  </header>
</template>

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
</style>
