<template>
    <v-container>
        <v-row>
            <v-col cols="1" class="task-time">
                <p>14:00</p>
            </v-col>
            <v-col cols="11" class="task-content">
                <p>Пресс качат</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
</script>

<style>
.task-time {
    background-color: #1C2632;
    border-radius: 20px 0px 0px 20px;
    text-align: center;
}

.task-content {
    background-color: #333C46;
    border-radius: 0px 20px 20px 0px;
}

p {
    color: #8393A9;
}
</style>