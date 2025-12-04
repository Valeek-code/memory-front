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
                    <p>Регестрация</p>
                </v-container>
            </v-container>

            <v-container class="inputs-container">

                <v-container class="input-container">
                    <p>Имя/никнейм</p>
                    <input class="text-input" type="text" placeholder="Крутятский ник">
                </v-container>
                <v-container class="input-container">
                    <p>Пароль</p>
                    <input type="password" placeholder="*********">
                </v-container>
                <v-container class="input-container">
                    <p>Эл. почта</p>
                    <input type="email" placeholder="Your_email@example.ru">
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

const selectedButton = ref(1)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');


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
    flex-direction: column;
    background-color: #2B323B;
    width: 720px;
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
    display: flex;
    flex-direction: column;
}

.input-container {
    font-size: 22px;
    padding: 16px;
    height: 114px;
    width: 420px;
}

input {
    height: 62px;
    width: 100%;
    padding: 20px;
    background-color: #3d444d;
    border-radius: 15px;
    border: 2px solid #252B33;
    font-size: 20px;
}

::placeholder {
    font-family: 'Inter', sans-serif;
    color: #2b3036;
    font-size: 24px;
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