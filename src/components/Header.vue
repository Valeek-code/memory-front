<template>
  <v-container class="header">
    <v-row class=pages-btn-container>
      <v-container class="icon-container">
        <a href="/">
          <img class="icon" src="@/assets/planer_icon.svg" />
        </a>
      </v-container>
      <v-container class="icon-container">
        <a href="/notes">
          <img href="#/notes" class="icon" src="@/assets/notes_icon.svg" />
        </a>
      </v-container>
      <v-container class="icon-container">
        <a href="/files">
        <img class="icon" src="@/assets/files_icon.svg" />
        </a>
      </v-container>
    </v-row>
    <v-col class="search-container">
      <input v-model="message" placeholder="найти..." style="width: 100%; padding: 10px;" />
    </v-col style="max-height: 100%;">
    <v-container class="icon-container">
      <img class="icon" src="@/assets/calendar_icon.svg" />
    </v-container>
  </v-container>
</template>

<script>

</script>

<style scoped>

.header {
  max-height: 54px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 7px;
  margin: 0%;
  background-color: #181C20;

}

.pages-btn-container {
  display: flex;
  gap: 0px 5px;
  /* для добавления отступов между иконками страниц */
  justify-content: space-between;
  max-width: fit-content;
  max-height: 100%;
  padding: 0px;
  margin: 0%;
}

.icon-container {
  /* background: aqua;
overflow:hidden; */
  padding: 0px;
  margin: 0px;
  max-width: 35px;
  max-height: 100%;
}

.icon {
  width: 100%;
  height: 100%;
  margin: 0%;
  color: transparent;
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