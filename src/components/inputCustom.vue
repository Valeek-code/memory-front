<template>
  <!-- <v-container class="pa-0">
    <v-row class="pa-0">
      <v-col cols="1">
      </v-col>
      <v-col class="ma-0" align="start" xl="3">
        <v-label style="font-size: 18px;">{{ props.title }}</v-label>
      </v-col>
    </v-row>
  </v-container> -->
  <v-container class="pa-0">
    <v-row align="center" justify="center">
      <v-col class="text-container">

        <v-text-field type="number" v-if="props.num" display:none single-line class="no-spin-buttons pa-0"
          variant="flat" :placeholder="props.placeholder" hide-details clearable v-model="localValue">
        </v-text-field>
        <v-text-field v-if="props.field" variant="flat" class="pa-0 cus" :placeholder="props.placeholder" hide-details
          clearable v-model="localValue">
        </v-text-field>
        <v-textarea v-if="props.area" :rows="props.rows" variant="flat" :placeholder="props.placeholder" class="pa-0"
          no-resize hide-details clearable v-model="localValue">
        </v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
const localValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
const props = defineProps({
  title: {
    type: String,
    default: "Название епт"
  },
  rows: {
    type: Number,
    default: 1,
  },
  area: {
    type: Boolean,
    default: false
  },
  field: {
    type: Boolean,
    default: false
  },
  num: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
    default: "Введите текст"
  },
  modelValue: {
    type: String,
    default: null
  }
})
</script>

<style scoped>
.v-label {
  font-size: 300%;
}
.text-container {
  border-radius: 30px;
  background-color: #232931;
  backdrop-filter: blur(9px);
  padding: 0px;
  max-height: -30px !important;
  transition: 0.5s;
}
.input {
  display: none;
}
.no-spin-buttons input[type="number"]::-webkit-outer-spin-button,
.no-spin-buttons input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.cus{
    padding-top: 0;
    padding-bottom: 0;
    min-height: 0px;
}
</style>