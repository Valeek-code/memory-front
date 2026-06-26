<template>
  <v-container class="page-main-container">
    <v-container class="info-container"> Вставить картинку или тп </v-container>
    <v-container class="login-input-main-container">
      <v-container class="signin-signup-buttons">
        <v-container class="button left" :class="{ selected: selectedButton == 1 }" @click="selectedButton = 1">
          <p>Вход</p>
        </v-container>
        <v-container class="button right" :class="{ selected: selectedButton == 2 }" @click="selectedButton = 2">
          <p>Регистрация</p>
        </v-container>
      </v-container>

      <v-container class="inputs-container" v-if="selectedButton == 2">
        <ZOVInput class="input" title="Имя пользователя" type="text" placeholder="логин" v-model="oblectToSend.name">
        </ZOVInput>
        <ZOVInput class="input" title="Email" type="email" placeholder="Электронная_почта@example.ru"
          v-model="oblectToSend.email"></ZOVInput>
        <ZOVInput class="input" title="Пароль" type="password" placeholder="*********" v-model="oblectToSend.password">
        </ZOVInput>
      </v-container>
      <v-container class="inputs-container" v-if="selectedButton == 1">
        <ZOVInput class="input" title="Имя пользователя или Email" type="text" placeholder="Логин">
        </ZOVInput>
        <ZOVInput class="input" title="Пароль" type="password" placeholder="*********"></ZOVInput>
      </v-container>
      <v-container @click="sendResults" class="button submit-btn">
        <p>Подтвердить</p>
      </v-container>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ZOVInput from "@/components/ZOV/ZovInput.vue";
import axios from "axios";

const selectedButton = ref(1);

const oblectToSend = ref({
  name: "",
  email: "",
  password: "",
});

function sendResults() {
  axios.post("http://127.0.0.1:8000/api/v1/register", oblectToSend.value);
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

p {
  font-family: "Inter", sans-serif;
}

.page-main-container {
  display: flex;
  min-width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.info-container {
  background-color: #000;
  width: 100%;
  height: 100%;
}

.login-input-main-container {
  display: flex;
  flex-direction: column;
  background-color: var(--bg-page);
  min-width: 720px;
  max-width: 720px;
  height: 100%;
  margin-left: auto;
  padding: 0%;
}

.input {
  height: 60px;
  width: 480px;
  margin: 10px auto 0px auto;
}

.signin-signup-buttons {
  display: flex;
  height: 64px;
  margin: 0px;
  padding: 0%;
}

.button {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
  background-color: var(--bg-page);
  transition: all 0.2s ease;
}

.button:hover {
  background-color: var(--accent-hover);
}

button:hover p{
  color: var(--text-primary)
}

.button.selected p {
  color: var(--accent);
  font-size: 22px;
}

.button.selected:hover p{
  color: #fff;
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
  justify-items: center;
}

.submit-btn {
  display: flex;
  margin-top: 74px;
  height: 64px;
  width: 280px;
  justify-content: center;
  align-items: center;
  background-color: #303c4d;
  border-radius: 15px;
  border: 2px solid #242a31;
  font-size: 28px;
}
</style>
