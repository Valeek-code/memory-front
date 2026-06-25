<template>
    <v-container class="card">{{ props.title }}</v-container>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'Note title'
    },
})

</script>

<style scoped>
.card {
    background-color: var(--bg-card);
    width: auto;
}
</style>