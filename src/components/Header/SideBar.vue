<template>
    <v-container class="main-container" :class="{ expended: true }">
        <a href="/">
            <v-row class='sidebar-btn-container'>
                <v-container class="icon-container">
                    <img class="icon" src="@/assets/planer_icon.svg" />
                </v-container>
                <p>Ежедневник</p>
            </v-row>
        </a>
        <a href="/notes">
            <v-row class='sidebar-btn-container'>
                <v-container class="icon-container">
                    <img class="icon" src="@/assets/notes_icon.svg" />
                </v-container>
                <p>Заметки</p>
            </v-row>
        </a>
        <a href="/files">
            <v-row class='sidebar-btn-container'>
                <v-container class="icon-container">
                    <img class="icon" src="@/assets/files_icon.svg" />
                </v-container>
                <p>Хранилище файлов</p>
            </v-row>
        </a>
    </v-container>
</template>

<script setup lang="ts">

</script>

<style scoped>
.main-container {
    overflow: hidden;
    width: 0px;
    min-height: 100vh;
    margin: 0%;
    padding: 0%;
    background-color: #282C34;
    transition: 0.4s;
}

.main-container.expended {
    width: 350px;
}

.sidebar-btn-container:hover {
    background-color: #3a3f4b;
}

.sidebar-btn-container {
    margin: 0%;
    padding: 8px;
}

.icon-container {
    overflow: hidden;
    top: 1000px;
    padding: 0px;
    margin: 0px 10px 0px 0px;
    max-width: 36px;
    max-height: 36px;
}

.icon {
    width: 36px;
    background-size: cover;
    height: 36px;
    margin: 0%;
}

p {
    width: fit-content;
    margin-top: auto;
    margin-bottom: auto;
}

a:active,
/* активная/посещенная ссылка */
a:hover,
/* при наведении */
a {
    text-decoration: none;
    color: #D9D9D9;
}
</style>