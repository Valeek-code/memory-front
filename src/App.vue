<template>
  <HeaderComponent v-if="!$route.path.includes('/login')" />
  <v-container class="main-container">
    <SideBar v-if="!$route.path.includes('/login')"/>
    <RouterView class="routers" />
  </v-container>
</template>


<script lang="ts" setup>

import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/Header/Header.vue'
import SideBar from '@/components/Header/SideBar.vue'

</script>


<style>
body {
  background-color: #1C2127;

}

.main-container {
  max-width: 100%;
  display: flex;
  margin: 0px;
  padding: 0;
  transition: 0.4s;
}

.routers {
  flex: 1;
  width: 100%;

}
</style>
