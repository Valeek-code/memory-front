import { defineStore } from 'pinia';
import { ref, onMounted } from 'vue';

export const usePersistentSidebarStore = defineStore('persistentSidebar', () => {
  const isSidebarExpanded = ref<boolean>(false);

  // Загружаем состояние из localStorage при инициализации
  onMounted(() => {
    const saved = localStorage.getItem('sidebarState');
    if (saved !== null) {
      isSidebarExpanded.value = JSON.parse(saved);
    }
  });

  const toggleSidebar = (): void => {
    isSidebarExpanded.value = !isSidebarExpanded.value;
    // Сохраняем в localStorage
    localStorage.setItem('sidebarState', JSON.stringify(isSidebarExpanded.value));
  };

  return {
    isSidebarExpanded,
    toggleSidebar
  };
});