<template>
  <div class="app" :data-theme="theme">
    <div class="icon-wrapper">
      <!-- ИСПРАВЛЕННАЯ иконка -->
      <svg 
        class="document-icon"
        width="120" 
        height="120" 
        viewBox="0 0 62 62" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Рамка -->
        <rect 
          x="2.5" y="2.5" 
          width="57" height="57" 
          rx="10" 
          stroke="currentColor" 
          stroke-width="3"
          fill="none"
        />
        
        <!-- Верхняя полоса -->
        <rect 
          x="12" y="12" 
          width="38" height="4" 
          rx="2" 
          fill="currentColor"
        />
        
        <!-- Подзаголовок -->
        <rect 
          x="12" y="20" 
          width="25" height="3" 
          rx="1.5" 
          fill="currentColor"
          opacity="0.6"
        />
        
        <!-- Основной контент -->
        <rect 
          x="12" y="30" 
          width="38" height="20" 
          rx="2" 
          fill="currentColor"
          opacity="0.4"
        />
      </svg>
    </div>
    
    <div class="controls">
      <p>Текущая тема: {{ theme === 'dark' ? '🌙 Тёмная' : '☀️ Светлая' }}</p>
      <button @click="toggleTheme">Сменить тему</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const theme = ref('dark')

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', theme.value)
  localStorage.setItem('theme', theme.value)
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
[data-theme="dark"] {
  --icon-color: #42b883;
  --bg: #1e1e1e;
  --card-bg: #2d2d2d;
  --text: #ffffff;
}

/* Светлая тема */
[data-theme="light"] {
  --icon-color: #e94560;
  --bg: #f5f5f5;
  --card-bg: #ffffff;
  --text: #333333;
}

body {
  background: var(--bg);
  font-family: system-ui, -apple-system, sans-serif;
  transition: background 0.3s;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
}

.icon-wrapper {
  background: var(--card-bg);
  padding: 40px;
  border-radius: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.document-icon {
  display: block;
  color: var(--icon-color);
  transition: color 0.3s;
}

.controls {
  text-align: center;
}

.controls p {
  color: var(--text);
  margin-bottom: 15px;
  font-size: 16px;
}

button {
  background: var(--icon-color);
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, background 0.3s;
}

button:hover {
  transform: scale(1.05);
}
</style>