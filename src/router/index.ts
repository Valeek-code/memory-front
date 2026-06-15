/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
// Composables
import MainPage from '@/components/pages/MainPage.vue'
import NoteListPage from '@/components/notes/NoteListPage.vue'
import NotePage from '@/components/notes/NotePage.vue'
import NewNotePage from '@/components/notes/NewNotePage.vue'
import FilesVaultPage from '@/components/pages/FilesVaultPage.vue'
import __TestPage__ from '@/components/pages/__TestPage__.vue'
import LoginPage from '@/components/pages/LoginPage.vue'

import ThemeTestPage from '@/components/pages/ThemeTest.vue'

const routes: Array<RouteRecordRaw> = [
  {
    name: 'Main',
    path: '/',
    component: MainPage,
  },
  {
    name: 'Main',
    path: '/themeTest',
    component: ThemeTestPage,
  },
  {
    name: 'NotesList',
    path: '/notes/list',
    component: NoteListPage,
  },
  {
    name: 'NewNote',
    path: '/notes/newNote',
    component: NewNotePage,
  },
  {
    name: 'NotePage',
    path: '/notes/note',
    component: NotePage,
  },
  {
    name: 'FilesVault',
    path: '/files',
    component: FilesVaultPage,
  },
  {
    name: 'LoginPage',
    path: '/login',
    component: LoginPage
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
