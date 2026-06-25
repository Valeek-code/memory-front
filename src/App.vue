<template>
  <v-container class="app" :data-theme="theme" fluid>
    <HeaderComponent v-if="!$route.path.includes('/login')" />
    <RouterView class="routers" />
  </v-container>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/header/Header.vue'
import { onMounted, computed } from 'vue'
import { useThemeStore } from '@/composables/theme'


const themeStore = useThemeStore()
const theme = computed(() => themeStore.theme)

onMounted(() => {
  themeStore.loadTheme()
})
</script>

<style>
/* Глобальные стили */
* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
  overflow: hidden;
  /* Отключаем скролл у всей страницы */
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--bg-page);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Текст */
p,
h1,
h2,
h3,
span,
li,
a {
  color: var(--text-primary);
}

/* Карточки и блоки */
.card,
.v-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
}

.icon,
.icon-container {
  transition: 0.2s;
  color: var(--icon-color);
}

.icon:hover,
.icon-container:hover {
  color: var(--accent-hover);
}

/* Поля ввода */
input,
textarea,
select {
  background: var(--bg-input);
  color: var(--text-primary);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 8px 12px;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--accent);
}

/* Кнопки */
button {
  background: var(--button-bg);
  color: var(--button-text);
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.2s;
}

button:hover {
  background: var(--button-hover);
}

/* Контейнер приложения */
.app {
  display: flex;
  height: 100vh;
  max-width: 100vw;
  margin: 0;
  padding: 0;
  background: var(--bg-primary);
  overflow: hidden;
  transition: background 0.3s, color 0.3s;
}

.routers {
  margin: 68px 0 0 0;
  overflow-y: scroll;
}

/* WebKit браузеры (Chrome, Safari, Edge) */
::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
}

::-webkit-scrollbar-track {
  background: var(--scrollbar-track);
  border-radius: var(--scrollbar-radius);
}

::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb);
  border-radius: var(--scrollbar-radius);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--scrollbar-thumb-hover);
}
</style>