<template>
  <v-container>
    <v-container class="task-card">
      <v-container class="container-head">
        <p>Задачи на сегодня</p>
      </v-container>
      <v-container class="task-container">
        <Task :items="todayTasks" />
      </v-container>
      <v-container v-if="EnableTomorrowTasks" class="task-container">
        <Task :items="tomorrowTasks" />
      </v-container>
      <v-container class="tomorrow-task" @click="SwitchTomorrowTasksEnable">
         {{ EnableTomorrowTasks ? 'Скрыть задачи на завтра' : 'Посмотреть задачи на завтра'}}
      </v-container>
    </v-container>

    <!-- <v-container class="task-card">
      <v-container class="task-container">
        sddsd
      </v-container>
    </v-container> -->
    <v-container class="task-card">
      <v-container class="container-head">
        <p>Задачи в процессе</p>
      </v-container>
      <v-container class="task-container">
        <Task :items="inProccessTask" />
      </v-container>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import Task from '@/components/Task.vue'
import { ref } from 'vue' 

const EnableTomorrowTasks = ref<Boolean>(false)

function SwitchTomorrowTasksEnable(){
  EnableTomorrowTasks.value = !EnableTomorrowTasks.value
}

const todayTasks = [
  {
    time: '14:20',
    taskText: 'Встать',
  },
  {
    time: '18:09',
    taskText: 'Умыться',
  },
  {
    time: '14:20',
    taskText: 'Встать',
  },
  {
    time: '18:09',
    taskText: 'Умыться',
  },
  {
    time: '14:20',
    taskText: 'Встать',
  },
  {
    time: '18:09',
    taskText: 'Умыться',
  },
  {
    time: '02:40',
    taskText: 'приступить к работе',
  },
  {
    time: '03:03',
    taskText: 'сдать смену',
  },
  {
    time: '05:10',
    taskText: 'спать)',
  },
]

const tomorrowTasks = [
  {
    time: '14:20',
    taskText: 'Встать',
  },
  {
    time: '18:09',
    taskText: 'Умыться',
  },
  {
    time: '14:20',
    taskText: 'Встать',
  },
  {
    time: '18:09',
    taskText: 'Умыться',
  },
  {
    time: '14:20',
    taskText: 'Встать',
  },
  {
    time: '18:09',
    taskText: 'Умыться',
  },
  {
    time: '02:40',
    taskText: 'приступить к работе',
  },
  {
    time: '03:03',
    taskText: 'сдать смену',
  },
  {
    time: '05:10',
    taskText: 'спать)',
  },
]

const inProccessTask = [
  {
    time: '12.12.2025',
    taskText: 'Доделатб проект',
  },
  {
    time: '31.12.2025',
    taskText: 'Купить елку',
  },
]

</script>

<style scoped>
.task-card {
  background-color: #272E36;
  border-radius: 10px;
  width: 60vw;
  padding: 0px;
  margin: 27px;
  justify-self: center;
}

.tomorrow-task {
  border-radius: 0px 0px 10px 10px;
  background-color: #38434E;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
}

.container-head {
  background-color: #13181D;
  border-radius: 10px 10px 0px 0px;

  text-align: center;
  font-size: 25px;
  font-weight: 600;
}

.task-container {
  margin: 0px;
  padding: 30px;
}

p {
  color: #8393A9;
}
</style>
