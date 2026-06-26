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
        <input :style="cssVars" :type="props.type" :placeholder="props.placeholder" :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)">
</template>


<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
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
        default: 20
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

input {
    height: var(--input-height, 62px);
    width: var(--input-width, 100px);
    width: 100%;
    padding: 20px;
    background-color: var(--bg-input);
    color: var(--text-primary);
    border-radius: 20px;
    border: 2px solid var(--border);
    font-size: var(--input-text-size);
    text-align: var(--input-text-align);
    transition: all 0.3s ease;
}

input:focus {
    outline: none;
    border-color: var(--border-focus);
    box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.2);
}

::placeholder {
    font-family: 'Inter', sans-serif;
    color: var(--text-muted);
    font-size: var(--input-text-size);
}


p {
    font-family: 'Inter', sans-serif;
    color: var(--border-focus);
}
</style>