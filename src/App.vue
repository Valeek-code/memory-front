<template>
  <HeaderComponent />
  <RouterView />
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/Header.vue'
</script>

<style>
body{
  background-color: #1C2127;
}
</style>
