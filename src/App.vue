<template>
  <v-container class="app" :data-theme="theme" fluid>
    <HeaderComponent v-if="!$route.path.includes('/login')" />
    <v-container class="main-container">
      <RouterView class="routers" />
    </v-container>
  </v-container>
</template>

<script lang="ts" setup>
import { onMounted, computed } from 'vue'
import { useThemeStore } from '@/composables/theme'
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/header/Header.vue'

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
  box-sizing: border-box;
}

body {
  background-color: var(--bg-primary);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Текст */
p, h1, h2, h3, span, li, a {
  color: var(--text-primary);
}

/* Карточки и блоки */
.card,
.v-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
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
  min-height: 100vh;
  max-width: 100%;
  margin: 0;
  padding: 0;
  background: var(--bg-primary);
  transition: background 0.3s, color 0.3s;
}

.main-container {
  max-width: 100%;
  margin: 0;
  padding: 0;
}

.routers {
  flex: 1;
  width: 100%;
}

/* Скроллбар (опционально) */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--border);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: var(--accent);
  border-radius: 4px;
}
</style>