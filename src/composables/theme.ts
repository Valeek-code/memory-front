import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref('dark')

  const loadTheme = () => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') {
      theme.value = saved
    }
    applyTheme()
  }

  const applyTheme = () => {
    document.documentElement.setAttribute('data-theme', theme.value)
  }

  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    localStorage.setItem('theme', theme.value)
    applyTheme()
  }
  const getThemeName = (): string => {
    if (theme.value === 'dark') {
      return 'Темная тема'
    }
    else if (theme.value === 'light'){
      return 'Светлая тема'
    }
    else if (theme.value === 'pink'){
      return 'Розовая тема'
    }
  }

  return { theme, loadTheme, toggleTheme, applyTheme, getThemeName }
})