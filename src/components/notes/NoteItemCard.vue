<template>
    <router-link to="/about" v-if="props.isRouter">
        <v-container class="card">{{ props.noteTitle }}</v-container>
    </router-link>
</template>

<script setup>
const props = defineProps({
    noteTitle: {
        type: String,
        default: 'Note title'
    },
    isRouter: {
        type: Boolean,
        default: true
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