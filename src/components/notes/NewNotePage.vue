<template>
  <v-row class="obsidian-editor">
    <v-col>
      <input type="text" name="" id="" class="title mb-4" v-model="title">
      <textarea ref="editorRef" v-model="textContent" class="editor-textarea pa-4"
        placeholder="Начните писать..."></textarea>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from 'vue'

const title = ref('Новая заметка')

const textContent = ref(`# Добро пожаловать в редактор Memory

Здесь можно писать текст как в обычном блокноте.

## Возможности:
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

html,
body {
  height: 100%;
  overflow: hidden;
}

.title {
  color: var(--text-primary);
  font-size: 20px;
  text-align: center;
}

.editor-textarea {
  width: 100%;
  height: 100vh;
  color: var(--text-secondary);
  font-size: 16px;
}

/* Текстовое поле на весь экран */
.editor-textarea,
.title {
  background: var(--bg-card);
  width: 100%;
  border: none;
  line-height: 1.6;
  resize: none;
  outline: none;
  overflow-y: hidden;
  scroll-behavior: smooth;
}
</style>