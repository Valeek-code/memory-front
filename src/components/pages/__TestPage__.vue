
<template>
    <div class="mt-20 justify-center">
        <ZOVInput v-model="oblectToSend.name"></ZOVInput>
        <ZOVInput v-model="oblectToSend.email"></ZOVInput>
        <ZOVInput v-model="oblectToSend.password"></ZOVInput>
        {{ oblectToSend }}
        <v-container style="width: 400px;" class="text-container-btn">
            <v-label @click="sendResults">
                SEND
            </v-label>
        </v-container>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axios from 'axios';
import ZOVInput from '../ZOV/ZovInput.vue';

const oblectToSend = ref({
    name: "string",
    email: "string",
    password: "string",
})

function sendResults() {
    axios.post("http://127.0.0.1:8000/api/v1/user/add", oblectToSend.value)
}


onMounted(() => {
})
</script>



<style scoped>
.mt-20 {
    margin-top: 100px;
}
</style>