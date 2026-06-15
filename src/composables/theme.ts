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

  return { theme, loadTheme, toggleTheme, applyTheme }
})