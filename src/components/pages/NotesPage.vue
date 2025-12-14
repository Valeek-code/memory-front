<template>
  <v-container>
    <h2 class="note-title">Новая заметка</h2>
    <p>asddawdaws</p>
  </v-container>
</template>

<script setup lang="ts">
import axios from 'axios';


function getNoteData() {
    axios.post("http://127.0.0.1:8000/api/v1/user/add", oblectToSend.value)
}

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

.note-title{
  text-align: center;
  margin: 30px;
}

</style>
