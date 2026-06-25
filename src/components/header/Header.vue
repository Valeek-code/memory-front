<template>
  <v-container class="header">
    <v-row align="center">
      <v-col align="left">
        <v-row>
          <v-col cols="auto">
            <v-container class="icon-container">
              <button class="main-border" @click="switchSideBarState">
                <v-container class="sidebar-state" :class="{ expanded: sideBarState }">
                  <v-container></v-container>
                </v-container>
              </button>
            </v-container>
          </v-col>
          <v-col align="left" class="pa-0">
            <v-container class="burger-text pl-0" :class="{ expanded: sideBarState }">
              <p>Свернуть меню</p>
            </v-container>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="5" class="pa-0">
        <ZOVInput class="pa-3" :height="50" placeholder="найти" textAlign="center" />
      </v-col>

      <v-col align="right">
        <v-container class="icon-container">
          <a href="/test_page">
            <svg class="icon" width="40" height="40" viewBox="0 0 62 62" fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <rect x="2.5" y="2.5" width="57" height="57" rx="10" stroke="currentColor" stroke-width="5"
                fill="#00000000" />
              <rect x="4.5" y="3.5" width="53" height="14" fill="currentColor" />
              <rect x="10.5" y="23.5" width="41" height="27" fill="currentColor" />
            </svg>

          </a>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
  <SideBar :sideBarState="sideBarState" />
</template>

<script setup lang="ts">
import ZOVInput from '@/components/ZOV/ZovInput.vue'
import SideBar from '@/components/header/SideBar.vue'
import { ref } from 'vue'
const sideBarState = ref(false)


function switchSideBarState() {
  sideBarState.value = !sideBarState.value
}


</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 14px;
  margin: 0;
  background-color: var(--bg-header);
  z-index: 100;

}

.icon-container {
  padding: 0px;
  margin: 3px;
  width: 40px;
  height: 40px;
  margin-top: auto;
  margin-bottom: auto;
}

.icon {
  width: 100%;
  background-size: cover;
  height: 100%;
  margin: 0%;
}


.main-border {
  margin: 0%;
  padding: 3px;
  background-color: transparent;
  border: 3px solid var(--icon-color);
  width: 100%;
  height: 100%;
  border-radius: 6px;
}

.main-border:hover {
  border-color: var(--accent-hover);
}

.main-border:hover .sidebar-state {
  background-color: var(--accent-hover);
}

.sidebar-state {
  background-color: var(--icon-color);
  border-radius: 3px;
  max-height: 100%;
  margin: 0%;
  padding: 0%;
  width: 3px;
  transition: 0.2s;
}

.burger-text {
  opacity: 0;
  transition: 0.2s;
}

.burger-text.expanded {
  opacity: 1;
}

.sidebar-state.expanded {
  width: 8px;
}
</style>