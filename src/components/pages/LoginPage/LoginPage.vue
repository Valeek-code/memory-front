<template>
    <v-container class="page-main-container">
        <v-container class="info-container">
        </v-container>
        <v-container class="login-input-main-container">
            <v-container class="signin-signup-buttons">
                <v-container class="button left" :class="{ selected: selectedButton == 1 }"
                    @click="selectedButton = 1;">
                    <p>Войти</p>
                </v-container>
                <v-container class="button right" :class="{ selected: selectedButton == 2 }"
                    @click="selectedButton = 2;">
                    <p>Зарегестрироваться</p>
                </v-container>
            </v-container>
        </v-container>
    </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const selectedButton = ref(1)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

p {
    font-family: 'Inter', sans-serif;

}

.page-main-container {
    display: flex;
    max-width: 100%;
    margin: 0;
    padding: 0;
}

.info-container {
    background-color: black;
    width: 100%;
    height: 100%;
}

.login-input-main-container {
    display: flex;
    background-color: #2B323B;
    width: 720px;
    height: 100%;
    margin-left: auto;
    padding: 0%;
}

.signin-signup-buttons {
    display: flex;
    height: 64px;
    margin: 0px;
    padding: 0%;
}

.button {
    cursor: pointer !important;
    /*background-color: #2B323B;*/
    display: flex;
    justify-content: center;
    font-size: 22px;
    font-weight: 400;
    background-color: #2B323B;
    margin: 0%;
}

.button.selected {
    background-color: #232931
}

.button.left {
    border-radius: 0px 0px 20px 0px;
}

.button.right {
    border-radius: 0px 0px 0px 20px;
}
</style>