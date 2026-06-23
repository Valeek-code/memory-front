<template>
    <v-container class="card">{{ props.title }}</v-container>
</template>

<script setup lang="ts">
const props = defineProps({
    title: String
})
</script>

<style scoped>
.card {
    background-color: var(--bg-card);
}
</style>