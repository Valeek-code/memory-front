<!--

Аргументы компонента
    title="Text" -> текст над инпутом
    type="text" -> тип инпута (text, password, email и т.д.)
    placeholder="Text" -> текст плейсхолдера
    :height -> высота инпута
    :textSize -> размер вводимого текста и плейсхолдера
    textAlign -> textAlign center, start и т.д

 -->
<template>
    <v-container class="input-container">
        <p v-if="props.title != ''">{{ props.title }}</p>
        <input 
        :style="cssVars" 
        :type="props.type" 
        :placeholder="props.placeholder" 
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)">
    </v-container>
</template>


<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    title: String,
    type: {
        type: String,
        default: 'text'
    },
    placeholder: String,
    modelValue: [String, Number], // Обязательно для v-model
    height: {
        type: Number,
        default: 62 
    },
    width: {
        type: Number,
        default: 62 
    },
    textSize: {
        type: Number,
        default: 24
    },
    textAlign: {
        type: String,
        default: 'start'
    }
})

const emit = defineEmits(['update:modelValue'])

const cssVars = computed(() => ({
    '--input-height': `${props.height}px`,
    '--input-text-size': `${props.textSize}px`,
    '--input-text-align': `${props.textAlign}`,

}));
</script>

<style scoped>
.input-container {
    font-size: 22px;
    padding: 0px;
    margin: 0%;
}

input {
    height: var(--input-height, 62px);
    width: var(--input-width,100px);
    width: 100%;
    padding: 20px;
    background-color: #2B323B;
    border-radius: 20px;
    border: 2px solid #252B33;
    font-size: var(--input-text-size);
    text-align: var(--input-text-align);
}

::placeholder {
    font-family: 'Inter', sans-serif;
    color: #5a6470;
    font-size: var(--input-text-size);
}


p {
    font-family: 'Inter', sans-serif;
}
</style>