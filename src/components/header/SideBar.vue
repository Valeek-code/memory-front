<template>
    <v-container class="main-container" :class="{ expanded: sideBarState }">
        <a href="/">
            <v-row class="sidebar-btn-container">
                <v-container class="icon-container">
                    <svg class="icon" width="59" height="60" viewBox="0 0 59 60" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="2.5" y="2.5" width="54" height="55" rx="7.5" stroke="currentColor" stroke-width="3" />
                        <rect x="25" y="14" width="26" height="3" rx="1.5" fill="currentColor" />
                        <path
                            d="M25 29.5C25 28.6716 25.6716 28 26.5 28H49.5C50.3284 28 51 28.6716 51 29.5C51 30.3284 50.3284 31 49.5 31H26.5C25.6716 31 25 30.3284 25 29.5Z"
                            fill="currentColor" />
                        <rect x="25" y="42" width="26" height="3" rx="1.5" fill="currentColor" />
                        <rect x="10" y="11" width="9" height="9" rx="2" stroke="currentColor" stroke-width="2" />
                        <rect x="10" y="25" width="9" height="9" rx="2" stroke="currentColor" stroke-width="2" />
                        <rect x="10" y="39" width="9" height="9" rx="2" stroke="currentColor" stroke-width="2" />
                    </svg>
                </v-container>
                <p>Ежедневник</p>
            </v-row>
        </a>

        <a href="/notes/list">
            <v-row class="sidebar-btn-container">
                <v-container class="icon-container">
                    <svg class="icon" width="59" height="60" viewBox="0 0 59 60" fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="2.5" y="2.5" width="54" height="55" rx="7.5" stroke="currentColor" stroke-width="3"
                            fill="none" />

                        <rect x="18" y="3" width="3" height="54" fill="currentColor" />
                        <rect x="36" y="3" width="3" height="54" fill="currentColor" />

                        <rect x="7" y="44" width="9" height="9" rx="4.5" fill="currentColor" />
                        <rect x="25" y="44" width="9" height="9" rx="4.5" fill="currentColor" />
                        <rect x="43" y="44" width="9" height="9" rx="4.5" fill="currentColor" />

                        <rect x="7" y="18" width="9" height="2" fill="currentColor" />
                        <rect x="25" y="18" width="9" height="2" fill="currentColor" />
                        <rect x="43" y="18" width="9" height="2" fill="currentColor" />

                        <rect x="7" y="22" width="9" height="2" fill="currentColor" />
                        <rect x="25" y="22" width="9" height="2" fill="currentColor" />
                        <rect x="43" y="22" width="9" height="2" fill="currentColor" />

                        <rect x="7" y="26" width="9" height="2" fill="currentColor" />
                        <rect x="25" y="26" width="9" height="2" fill="currentColor" />
                        <rect x="43" y="26" width="9" height="2" fill="currentColor" />
                    </svg>
                </v-container>
                <p>Заметки</p>
            </v-row>
        </a>

        <a href="/files">
            <v-row class="sidebar-btn-container">
                <v-container class="icon-container">
                    <svg class="icon" width="59" height="60" viewBox="0 0 59 60" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 7C18 3.68629 20.6863 1 24 1H46C51.5228 1 56 5.47715 56 11V12H18V7Z"
                            fill="currentColor" opacity="0.6" />
                        <path d="M-4 6C-4 2.68629 -1.31371 0 2 0H24C29.5228 0 34 4.47715 34 10V12H-4V6Z"
                            fill="currentColor" transform="translate(5, 0)" />
                        <path
                            d="M49 9.5C53.1421 9.5 56.5 12.8579 56.5 17V50C56.5 54.1421 53.1421 57.5 49 57.5H10C5.85786 57.5 2.5 54.1421 2.5 50V9.5H49Z"
                            stroke="currentColor" stroke-width="3" fill="none" />
                    </svg>
                </v-container>
                <p>Хранилище файлов</p>
            </v-row>
        </a>

        <!-- Кнопка переключения темы -->
        <v-container class="theme-switch" @click="toggleTheme">
            {{ themeStore.getThemeName() }}
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
    top: 68px;
    /* Ниже хэдера */
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

.sidebar-btn-container:hover .icon,
.sidebar-btn-container:hover p {
    color: var(--accent-hover);
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

p {
    margin: 0;
    font-size: 16px;
    color: var(--icon-color);
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