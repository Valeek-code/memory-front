<template>
    <p @click="toggleTommorowTasks">toggle</p>
    <transition name="slide" @enter="setMaxHeight">
        <v-container class="child" v-if="ShowTommorowTasksCard">
            <p>item 1</p>
            <p>item 2</p>
            <p>item 3</p>
            <p>item 4</p>
        </v-container>
    </transition>
</template>


<script setup lang="ts">
import { ref } from 'vue'

const ShowTommorowTasksCard = ref(false);
const toggleTommorowTasks = () => {
    ShowTommorowTasksCard.value = !ShowTommorowTasksCard.value;
};
const setMaxHeight = (element) => {
    element.style.setProperty(
        '--max-height',
        element.scrollHeight + 'px'
    );
}

</script>


<style scoped>
.slide-enter-active {
    transition: 0.3s max-height ease-in;
}

.slide-leave-active {
    transition: 0.3s max-height cubic-bezier(0, 1, 0.5, 1);
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

p {
    text-justify: auto;
    text-align: left;
    padding: 10px;
    margin: 5px;
    border-radius: 10px;
}
</style>
