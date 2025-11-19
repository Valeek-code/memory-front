<template>
    <!-- <v-container>
        <h2 class="ma-10" style="text-align: center;">File vault page</h2>
        <v-container class="ma-10 justify-center">
            <p>
                Тут люди смогут хранить свои файлы как на яндекс диске<br>
                за деньги конечно👹
            </p>
        </v-container>
    </v-container> -->

    <!-- <v-container>
        <div>


            <div class="card" :class="{ expanded: isExpandedCard }">
                <p @click="SwitchValue">
                    {{ isExpandedCard ? 'Скрыть' : 'Показать' }} контент
                </p>
                <div v-if="ValueContent" class="content" :class="{ expanded: isExpandedContent }">
                    <h3>Заголовок контента</h3>
                    <p>Этот контент плавно появляется при нажатии на кнопку</p>
                    <p>Можно добавить любой HTML контент</p>
                </div>
            </div>

        </div>
    </v-container> -->


  <v-card>
    <v-card-actions>
      <p @click="SwitchValue">
        {{ isExpanded ? 'Скрыть' : 'Показать' }}
      </p>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="isExpandedCard">
        <v-card-text class="content" :class="{ expanded: isExpandedContent }" >
          <p>Этот контент плавно расширяется</p>
          <p>Можно добавить любой контент</p>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>

  sdsd
</template>


<script setup lang="ts">
import { ref } from 'vue'

const isExpandedCard = ref(false)
const isExpandedContent = ref(false)
const ValueContent = ref(false)

function SwitchValue() {
    if (isExpandedCard.value) {
        // Закрываем
        isExpandedContent.value = false
        setTimeout(() => {
            isExpandedCard.value = false
        }, 400)
        setTimeout(() =>{
            ValueContent.value = false

        }, 450)
    } else {
        // Открываем
        isExpandedCard.value = true
        setTimeout(() => {
            ValueContent.value = true
        }, 400)
        setTimeout(() =>{
            isExpandedContent.value = true
        }, 450)
    }
}


</script>

<style scoped>
p {
    text-justify: auto;
    text-align: left;
    padding: 10px;
    margin: 5px;
    border-radius: 10px;
}




.card {
    height: 0;
    transition: 0.4s;
    background-color: #b9bcc0;

}

.card.expanded {
    height: 250px;

}

.content {
    padding: 20px;
    border-radius: 8px;
    margin-top: 10px;
    opacity: 0.0;
    transition: 0.5s;
    color: #f0f0f0;

    /* font-size: 0px; */
}

.content.expanded {
    opacity: 1;

    /* font-size: 20px; */
}
</style>
