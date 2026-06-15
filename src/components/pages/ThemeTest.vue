<template>
  <v-container class="theme-page">
    <v-container class="theme-buttons">
      <button 
        class="theme-btn dark-btn" 
        :class="{ active: theme === 'dark' }"
        @click="setTheme('dark')"
      >
        🌙 Тёмная
      </button>
      <button 
        class="theme-btn light-btn" 
        :class="{ active: theme === 'light' }"
        @click="setTheme('light')"
      >
        ☀️ Светлая
      </button>
    </v-container>
    <v-col>
    <p>Весь текст на странице</p>
    <v-container class="card"><p>Карточки, модальные окна, блоки</p></v-container>
    <input type="text" name="sadasd" id="" placeholder="Любые рамки	input">
	<button>Наведи на кнопку</button>
    </v-col>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const theme = ref('dark')

function setTheme(newTheme: 'dark' | 'light') {
  theme.value = newTheme
  document.documentElement.setAttribute('data-theme', newTheme)
  localStorage.setItem('theme', newTheme)
}

onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') {
    theme.value = saved
    document.documentElement.setAttribute('data-theme', saved)
  }
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Тёмная тема */
html[data-theme="dark"] {
  --bg: #e94560;
  --square2: #42b883;
  --square3: #3498db;
  --bg: #1e1e1e;
}

/* Светлая тема */
html[data-theme="light"] {
  --square1: #ff6b6b;
  --square2: #4ecdc4;
  --square3: #45b7d1;
  --bg: #f5f5f5;
}

body {
  background: var(--bg);
  transition: background 0.3s;
}

.theme-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
}

/* Кнопки */
.theme-buttons {
  display: flex;
  gap: 20px;
}

.theme-btn {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.theme-btn.active {
  transform: scale(1.05);
  box-shadow: 0 0 0 2px white, 0 0 0 4px var(--square1);
}

.dark-btn {
  background: #1e1e1e;
  color: white;
  border: 1px solid #444;
}

.light-btn {
  background: white;
  color: #333;
  border: 1px solid #ddd;
}

.theme-btn:hover {
  transform: scale(1.05);
}

/* 3 квадрата */
.squares {
  display: flex;
  gap: 30px;
}

.square {
  width: 150px;
  height: 150px;
  border-radius: 12px;
  transition: all 0.3s;
}

.square-1 {
  background: var(--box-bg);
}

.square-2 {
  background: var(--text);
}

.square-3 {
  background: var(--button-bg);
}

/* Адаптация для маленьких экранов */
@media (max-width: 600px) {
  .squares {
    gap: 15px;
  }
  
  .square {
    width: 100px;
    height: 100px;
  }
}
</style>