<script setup>
  import { RouterView } from 'vue-router'
  import SidebarMenu from './components/SidebarMenu.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
    <h3 class="logo-text">Zid Vue Test</h3>
  </header>
  <div class="main-container">
    <SidebarMenu />
    <div class="content-container col-12">
      <!-- <ProfilePage /> -->
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
  header {
    padding: 10px 10px;
    background-color: bisque;
    box-shadow: 0px 3px 10px grey;
    vertical-align: middle;
  }
  img {
    padding-left: 20px;
  }
  .logo-text {
    display: inline;
    padding-left: 15px;
    font-weight: 700;
  }
  .main-container {
    display: flex;
  }
  .v-sidebar-menu {
    top: 70px;
    position: fixed;
  }
</style>
