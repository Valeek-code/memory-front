<template>
  <v-container class="header">
    <v-container class="burger">

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

<script lang="ts">
import inputCustom from '@/components/inputCustom.vue'

</script>

<style scoped>
.header {
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
  margin: 0px;
  max-width: 35px;
  max-height: 100%;
  /* background: aqua; */
  /* mix-blend-mode: color; */


}

/* .icon {
  width: 100%;
  mix-blend-mode: color;
  overflow: hidden;
  background: aqua;
  height: 100%;
  margin: 0%;
  color: transparent;
} */

.icon {
  width: 100%;
  background-size: cover;
  /* overflow:hidden; */
  height: 100%;
  margin: 0%;
  /* color: transparent; */
  /* opacity: 0; */
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