<template>
  <HeaderComponent />
  <v-container class="test">
    <SideBar />
    <RouterView class="routers" />
  </v-container>
</template>


<script lang="ts" setup>

import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/Header/Header.vue'
import SideBar from '@/components/Header/SideBar.vue'

</script>


<style scoped>

body {
  background-color: #1C2127;
}

.test {
  display: flex;
  margin: 0 ;
  padding: 0;
  transition: 0.4s;
}

</style>
