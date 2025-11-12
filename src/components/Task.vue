<template>
  <v-container v-for="p in props.items" :key="p">
    <v-row class="main-row">
      <v-container class="task-time">
        <p>{{ p.time }}</p>
      </v-container>
      <v-container class="task-content" cols="11">
        <p>{{ p.taskText }}</p>
      </v-container>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">

  interface Task {
    time: string
    taskText: string
  }

  const props = defineProps<{ items: Task }>()

</script>

<style scoped>
p{
    width: fit-content;
}

.main-row{
    flex-wrap: nowrap;
}

.task-time {
    background-color: #1C2632;
    border-radius: 20px 0px 0px 20px;
    text-align: center;
    max-width: fit-content;
}

.task-content {
    background-color: #333C46;
    border-radius: 0px 20px 20px 0px;
}

p {
    color: #8393A9;
}
</style>
