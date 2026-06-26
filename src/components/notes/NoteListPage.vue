<template>
  <v-row justify="center">
    <v-col cols="4" class="mx-4">
      <NoteTypeCard class="ma-1 mt-3" title="Мои заметки" />
      <NoteCard class="ma-1" noteTitle="Новая заметка"/>
      <NoteCard class="ma-1" v-for="n in 10" noteTitle="My note" noteID="3" />
    </v-col>
    <v-col cols="4" class="mx-4">
      <NoteTypeCard class="ma-1 mt-3" title="Сохранённые" />
      <NoteCard class="ma-1" v-for="n in 4" noteTitle="Saved note" noteID="1" />

      <NoteTypeCard class="ma-1 mt-3" title="Открытый доступ" />
      <NoteCard class="ma-1" v-for="n in 4" noteTitle="Shared note" noteID="2" />

      <NoteTypeCard class="ma-1 mt-3" title="Избранное" />
      <NoteCard class="ma-1" v-for="n in 4" noteTitle="Favorite note" noteID="4" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import NoteCard from '@/components/notes/NoteItemCard.vue';
import NoteTypeCard from '@/components/notes/NoteTypeCard.vue';
</script>

<style scoped></style>
