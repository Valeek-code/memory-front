<template>
    <v-container class="page-main-container">
        <v-container class="info-container">
        </v-container>
        <v-container class="login-input-main-container">
            <v-container class="signin-signup-buttons">
                <v-container class="button left" :class="{ selected: selectedButton == 1 }"
                    @click="selectedButton = 1;">
                    <p>Вход</p>
                </v-container>
                <v-container class="button right" :class="{ selected: selectedButton == 2 }"
                    @click="selectedButton = 2;">
                    <p>Регистрация</p>
                </v-container>
            </v-container>

            <v-container class="inputs-container">
                <v-container class="login-inputs" v-if="selectedButton == 1">
                    <ZOVInput title="Имя пользователя" type="text" placeholder="Крутятский ник"></ZOVInput>
                    <ZOVInput title="Пароль" type="password" placeholder="*********"></ZOVInput>
                    <ZOVInput title="Email" type="email" placeholder="Your_email@example.ru"></ZOVInput>
                </v-container>
                <v-container class="login-inputs" v-if="selectedButton == 2">
                    <ZOVInput title="Имя пользователя или Email" type="text" placeholder="Крутятский ник"></ZOVInput>
                    <ZOVInput title="Пароль" type="password" placeholder="*********"></ZOVInput>
                </v-container>
                <v-container class="button submit-btn">
                    <p>Подтвердить</p>
                </v-container>

            </v-container>
        </v-container>
    </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ZOVInput from './ZOV-Input.vue';

const selectedButton = ref(1)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');


p {
    font-family: 'Inter', sans-serif;
}

.page-main-container {
    display: flex;
    min-width: 100vw;
    height: 100vh;
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
    flex-direction: column;
    background-color: #2B323B;
    min-width: 720px;
    max-width: 720px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-weight: 400;
    background-color: #232931;
}

.button.selected {
    background-color: #2B323B;
    font-size: 28px;
}

.button.left {
    border-radius: 0px 0px 20px 0px;
}

.button.right {
    border-radius: 0px 0px 0px 20px;
}

.inputs-container {
    margin-top: 153px;
    display: flex;
    flex-direction: column;
}

.submit-btn {
    display: flex;
    margin-top: 74px;
    height: 64px;
    width: 280px;
    justify-content: center;
    align-items: center;
    background-color: #2C5D9F;
    border-radius: 15px;
    border: 2px solid #252B33;
    font-size: 28px;
}
</style>