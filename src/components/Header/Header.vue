<template>
  <v-container class="header">
    <v-container class="icon-container">
      <burger />
    </v-container>
    <v-col cols="6">
      <inputCustom field />
    </v-col>
    <v-container class="icon-container">
      <a href="/test_page">
        <img class="icon" src="@/assets/calendar_icon.svg" />
      </a>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import inputCustom from '@/components/inputCustom.vue'
import burger from '@/components/Header/BurgerButton.vue'
</script>

<style scoped>
.header {
  position: sticky;
  top:0%;
  left: 0%;
  max-height: 524px;
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
  width: 35px;
  height: 35px;
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
</style>