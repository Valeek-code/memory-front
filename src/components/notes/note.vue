<template>

    <p @click="selectedOption = 1">sdsd</p>
    <p @click="selectedOption = 2">sdsd</p>
    <p @click="selectedOption = 3">sdsd</p>
    <p @click="selectedOption = 4">dsds</p>
    <p @click="selectedOption = 5">dsds</p>
    <p @click="selectedOption = 6">sdsd</p>

  <p>{{selectedOption }}</p>
</template>


<script setup lang="ts">
import { ref } from 'vue'

const selectedOption = ref<Number>(0)
</script>


<style scoped>
p {
    text-justify: auto;
    text-align: left;
    padding: 10px;
    margin: 5px;
    background-color: #3D4856;
    border-radius: 10px;
}
</style>