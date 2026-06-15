<template>
  <v-container class="header">
    <v-row align="center">
      <v-col align="left">
        <v-row>
          <v-col cols="auto" class="">
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

      <v-col cols="5">
        <ZOVInput class="pa-0" :height="54" placeholder="найти" textAlign="center" />
      </v-col>

      <v-col align="right">
        <v-container class="icon-container">
          <a href="/test_page">
            <img class="icon" src="@/assets/calendar_icon.svg" />
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
  top: 0%;
  left: 0%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 7px;
  margin: 0%;
  background-color: #181C20;

}

.burger {
  display: flex;
  max-width: fit-content;
  max-height: 100%;
  padding: 0px;
  margin: 0%;
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

.search-container {
  max-width: 500px;
  max-height: 100%;
  padding: 0px;
  margin: 2.5px;
  background-color: #232931;
  display: flex;
  border-radius: 20px;
}

.calendar-container {
  max-width: fit-content;
  padding: 0px;
}


.main-border {
  margin: 0%;
  padding: 3px;
  background-color: transparent;
  border: 3px solid var(--text);
  width: 100%;
  height: 100%;
  border-radius: 6px;
}

.sidebar-state {
  background-color: var(--text);
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