<script setup lang="ts">
import { useMainStore } from "@/stores/store";

const store = useMainStore();
const { getCardNumber, getCardSuit } = store;
const props = defineProps(["cardNumber"]);
</script>
<template>
    <button class="h-40 w-32 mx-auto bg-white border-4 border-transparent rounded relative flex" draggable="true">
        <div class="absolute left-2 top-2 flex flex-col" draggable="false">
            <span class="font-extrabold">{{ getCardNumber(props.cardNumber) }}</span>
            <img class="h-4 w-4" :src="`suits/${getCardSuit(props.cardNumber)}.png`" draggable="false" />
        </div>
        <img :src="'suits/' + getCardSuit(props.cardNumber) + '.png'" class="h-16 w-16 m-auto" draggable="false" />
        <div class="absolute right-2 bottom-2 flex flex-col -scale-100" draggable="false">
            <span class="font-extrabold">{{ getCardNumber(props.cardNumber) }}</span>
            <img class="h-4 w-4" :src="`suits/${getCardSuit(props.cardNumber)}.png`" draggable="false" />
        </div>
    </button>
</template>
