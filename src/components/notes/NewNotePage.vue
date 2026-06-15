<template>
  <div class="obsidian-editor">
    <textarea
      ref="editorRef"
      v-model="textContent"
      class="editor-textarea"
      placeholder="Начните писать..."
    ></textarea>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue'

const textContent = ref(`# Добро пожаловать в редактор Obsidian

Здесь можно писать текст как в обычном блокноте.

## Возможности:
- Полноэкранный режим
- Один скролл на всю страницу
- Редактирование как в поле ввода на сайтах
- Автосохранение

Напишите что-нибудь здесь...`)

const editorRef = ref<HTMLTextAreaElement | null>(null)

// Автосохранение в localStorage
watch(textContent, (newValue) => {
  localStorage.setItem('obsidian-content', newValue)
})

// Загрузка сохранённого текста
onMounted(() => {
  const saved = localStorage.getItem('obsidian-content')
  if (saved) {
    textContent.value = saved
  }
  // Автофокус на редактор
  nextTick(() => {
    editorRef.value?.focus()
  })
})


</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  overflow: hidden;
}

/* Текстовое поле на весь экран */
.editor-textarea {
  width: 100%;
  height: 100vh;
  background: #1e1e1e;
  color: #ddd;
  border: none;
  padding: 60px 80px;
  font-family: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace;
  font-size: 16px;
  line-height: 1.6;
  resize: none;
  outline: none;
  overflow-y: auto;
  scroll-behavior: smooth;
}

/* Стили для скроллбара (как в Obsidian) */
.editor-textarea::-webkit-scrollbar {
  width: 8px;
}

.editor-textarea::-webkit-scrollbar-track {
  background: #2d2d2d;
}

.editor-textarea::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 4px;
}

.editor-textarea::-webkit-scrollbar-thumb:hover {
  background: #7b62b6;
}

.editor-textarea::placeholder {
  color: #555;
  font-style: italic;
}

.editor-textarea:focus {
  outline: none;
}

</style>