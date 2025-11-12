<template>
  <v-row class="header">
    <v-container class="icon-container">
      <img class="icon" src="@/assets/planer_icon.svg" />
    </v-container>
    <v-container class="icon-container">
      <img class="icon" src="@/assets/notes_icon.svg" />
    </v-container>
    <v-container class="icon-container">
      <img class="icon" src="@/assets/files_icon.svg" />
    </v-container>
  </v-row>
</template>

<script>

</script>

<style scoped>
.header {
  padding: 7px;
  height: 65px;
}

.icon {
  width: 40px;
  margin: 0%;
  color: transparent;
}

.icon-container {
  /* background: aqua;
overflow:hidden; */
  padding: 0px;
  max-width: 40px;
  margin: 5px;
  height: 40px;
}
</style>