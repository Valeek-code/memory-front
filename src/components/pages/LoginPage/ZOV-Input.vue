<template>
    <v-container class="input-container">
        <p>{{ props.title }}</p>
        <input :type="props.type" :placeholder="props.placeholder">
    </v-container>
</template>


<script setup lang="ts">

const props = withDefaults(defineProps<{
  title?: string
  type?: string
  placeholder?: string
}>(), {
  title: 'без названия',
  type: 'text',
  placeholder: ''
})
</script>

<style scoped>
.input-container {
    font-size: 22px;
    padding: 0px;
    height: 114px;
    width: 480px;
}

input {
    height: 62px;
    width: 100%;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.116);;
    border-radius: 15px;
    border: 2px solid #252B33;
    font-size: 20px;
}

::placeholder {
    font-family: 'Inter', sans-serif;
    color: #2b3036;
    font-size: 24px;
}


p {
    font-family: 'Inter', sans-serif;
}

</style>