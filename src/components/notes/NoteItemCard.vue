<template>
    <router-link :to="`/notes/${props.noteID}`">
        <v-container class="card">{{ props.noteTitle }}</v-container>
    </router-link>
</template>

<script setup>
const props = defineProps({
    noteTitle: {
        type: String,
        default: 'Note title'
    },
    noteID: {
        type: String,
        default: 'newNote'
    },
})

</script>

<style scoped>
.card {
    background-color: var(--bg-card);
    width: auto;
}

a{
    display: block;
}
</style>