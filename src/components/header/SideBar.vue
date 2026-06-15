<template>
    <v-container class="main-container" :class="{ expanded: sideBarState }">
        <a href="/">
            <v-row class="sidebar-btn-container">
                <v-container class="icon-container">
                    <img class="icon" src="@/assets/planer_icon.svg" />
                </v-container>
                <p>Ежедневник</p>
            </v-row>
        </a>
        
        <a href="/notes/list">
            <v-row class="sidebar-btn-container">
                <v-container class="icon-container">
                    <img class="icon" src="@/assets/notes_icon.svg" />
                </v-container>
                <p>Заметки</p>
            </v-row>
        </a>
        
        <a href="/files">
            <v-row class="sidebar-btn-container">
                <v-container class="icon-container">
                    <img class="icon" src="@/assets/files_icon.svg" />
                </v-container>
                <p>Хранилище файлов</p>
            </v-row>
        </a>
        
        <!-- Кнопка переключения темы -->
        <v-container class="theme-switch" @click="toggleTheme">
            Темная тема
        </v-container>
    </v-container>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/composables/theme'

// Пропсы
const props = defineProps<{
    sideBarState: boolean
}>()

// Тема
const themeStore = useThemeStore()

function toggleTheme() {
    themeStore.toggleTheme()
}
</script>

<style scoped>
/* Сайдбар */
.main-container {
    position: fixed;
    top: 68px;  /* Ниже хэдера */
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    width: 0;
    overflow-x: hidden;
    overflow-y: auto;
    margin: 0;
    padding: 0;
    background-color: var(--bg-card, #282C34);
    transition: width 0.3s ease;
    z-index: 100;
}

/* Раскрытый сайдбар */
.main-container.expanded {
    width: 280px;
}

/* Кнопки в сайдбаре */
.sidebar-btn-container {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 12px 16px;
    min-width: 280px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.sidebar-btn-container:hover {
    background-color: var(--bg-hover, #3a3f4b);
}

/* Иконки */
.icon-container {
    overflow: hidden;
    padding: 0;
    margin: 0 12px 0 0;
    width: 36px;
    height: 36px;
    flex-shrink: 0;
}

.icon {
    width: 36px;
    height: 36px;
    object-fit: cover;
}

/* Текст кнопок */
p {
    margin: 0;
    font-size: 16px;
    color: var(--text-primary, #D9D9D9);
}

/* Ссылки */
a {
    text-decoration: none;
}

/* Переключатель темы */
.theme-switch {
    margin-top: auto;
    padding: 16px;
    cursor: pointer;
    color: var(--text-primary, #D9D9D9);
    border-top: 1px solid var(--border, #444);
}

.theme-switch:hover {
    background-color: var(--bg-hover, #3a3f4b);
}
</style>