<template>
    <v-container>
        <v-container class="task-card">
            <v-container class="container-head">
                <p>Задачи на сегодня</p>
            </v-container>
            <v-container class="task-container">
                <Task />
                <Task />
                <Task />
                <Task />
            </v-container>
        </v-container>

        <v-container class="task-card">
            <v-container class="container-head">
                <p>Задачи в процессе</p>
            </v-container>
            <v-container class="task-container">
                <Task />
                <Task />
                <Task />
                <Task />
            </v-container>
        </v-container>
    </v-container>
</template>

<script>
import Task from '@/components/Task.vue';
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