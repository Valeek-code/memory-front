/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
// Composables
import MainPage from '@/components/pages/MainPage.vue'
import NotesPage from '@/components/pages/NotesPage.vue'
import FilesVaultPage from '@/components/pages/FilesVaultPage.vue'
import __TestPage__ from '@/components/__TestPage__.vue'

const routes: Array<RouteRecordRaw> = [
  {
    name: 'Main',
    path: '/',
    component: MainPage,
  },
  {
    name: 'Notes',
    path: '/notes',
    component: NotesPage,
  },
  {
    name: 'FilesVault',
    path: '/files',
    component: FilesVaultPage,
  },
  {
    name: 'TestPage',
    path: '/test_page',
    component: __TestPage__,
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (localStorage.getItem('vuetify:dynamic-reload')) {
      console.error('Dynamic import error, reloading page did not fix it', err)
    } else {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
