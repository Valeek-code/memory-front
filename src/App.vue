<template>
  <HeaderComponent />
  <RouterView />
</template>

<script lang="ts" setup>
  import { RouterView } from 'vue-router'
  import HeaderComponent from '@/components/Header.vue'
</script>

<style>
.header {
    background-color: #181C20;
    margin: 0px;
    max-width: 100%;
}
</style>
