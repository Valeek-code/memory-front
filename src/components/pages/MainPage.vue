<template>
  <v-row>
    <v-col>
      <v-container class="task-card">
        <v-container class="container-head">
          <p>Задачи на сегодня</p>
        </v-container>
        <v-container class="task-container">
          <Task :items="todayTasks" />
        </v-container>

        <transition name="slide" @enter="setMaxHeight">
          <v-container class="tomorrow-task-container" v-if="ShowTommorowTasksCard"
            :class="{ expended: ShowTommorowTasksContent }">
            <Task :items="tomorrowTasks" />
          </v-container>
        </transition>

        <v-container class="tomorrow-task-btn" @click="toggleTommorowTasks">
          {{ ShowTommorowTasksCard ? 'Скрыть задачи на завтра' : 'Посмотреть задачи на завтра' }}
        </v-container>
      </v-container>

      <v-container class="task-card">
        <v-container class="container-head">
          <p>Задачи в процессе</p>
        </v-container>
        <v-container class="task-container">
          <Task :items="inProccessTask" />
        </v-container>
      </v-container>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import Task from '@/components/Task.vue'
import { ref } from 'vue'

const ShowTommorowTasksCard = ref(false);
const ShowTommorowTasksContent = ref(false);
/* const toggleTommorowTasks = () => {
    ShowTommorowTasksCard.value = !ShowTommorowTasksCard.value;
}; */
function toggleTommorowTasks() {

  if (!ShowTommorowTasksCard.value) {
    ShowTommorowTasksCard.value = true;
    setTimeout(() => {
      ShowTommorowTasksContent.value = ShowTommorowTasksCard.value
    }, 400)
  } else {
    ShowTommorowTasksContent.value = false;
    setTimeout(() => {
      ShowTommorowTasksCard.value = ShowTommorowTasksContent.value
    }, 400)
  }
}
const setMaxHeight = (element) => {
  element.style.setProperty(
    '--max-height',
    element.scrollHeight + 'px'
  );
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
  margin: 30px;
  justify-self: center;

}

.tomorrow-task-btn {
  max-width: 100%;
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

.tomorrow-task-container {
  margin: 0;
  padding: 0px 30px 30px 30px;
  opacity: 0;
  transition: 0.4s;
}

.tomorrow-task-container.expended {
  opacity: 1;
}

p {
  color: #8393A9;
}

.slide-enter-active {
  transition: 0.3s max-height;
}

.slide-leave-active {
  transition: 0.3s max-height;
}

.slide-enter-to,
.slide-leave-from {
  max-height: var(--max-height, 1000px);
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}
</style>
