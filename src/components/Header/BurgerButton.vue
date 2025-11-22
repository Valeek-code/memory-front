<template>
    <button class="main-border" @click="sidebarStore.toggleSidebar">
        <v-container class="sidebar-state" :class="{expanded: sidebarStore.isSidebarExpanded}">
            <v-container></v-container>
        </v-container>
    </button>
</template>


<script setup lang="ts">

import { usePersistentSidebarStore } from '@/components/Header/useSidebarState';

const sidebarStore = usePersistentSidebarStore();

</script>


<style scoped>

.main-border{
    margin: 0%;
    padding: 3px;
    background-color: transparent;
    border: 3px solid #D9D9D9;
    width: 100%;
    height: 100%;
    border-radius: 6px;
}

.sidebar-state{
    background-color: #D9D9D9;
    border-radius: 3px;
    max-height: 100%;
    margin: 0%;
    padding: 0%;
    width: 3px;
    transition: 0.2s;
}

.sidebar-state.expanded{
    width: 8px;
}

</style>