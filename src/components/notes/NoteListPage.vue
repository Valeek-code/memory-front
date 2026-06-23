<template>
    <v-row justify="center">
        <v-col cols="4" class="mx-4">
                <NoteTypeLabel class="ma-1 mt-3" title="Сохраненные" />
            <v-col class="pa-0">
                <NoteCard class="ma-1" v-for="n in 4" />
            </v-col>
                <NoteTypeLabel class="ma-1 mt-3" title="Открытый доступ" />
            <v-col class="pa-0">
                <NoteCard class="ma-1" v-for="n in 4" />
            </v-col>
                <NoteTypeLabel class="ma-1 mt-3" title="ss" />
            <v-col class="pa-0">
                <NoteCard class="ma-1" v-for="n in 4" />
            </v-col>
        </v-col>

        <v-col cols="4" class="mx-4">
            <NoteTypeLabel class="ma-1 mt-3" title="Сохраненные" />
            <NoteCard class="ma-1" v-for="n in 4" />
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import NoteCard from '@/components/notes/NoteItemCard.vue';
import NoteTypeLabel from '@/components/notes/NoteTypeLabel.vue';
</script>

<style scoped></style>
