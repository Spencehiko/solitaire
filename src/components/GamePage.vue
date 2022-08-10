<script setup lang="ts">
import { useMainStore } from "@/stores/store";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

import CardComponent from "./CardComponent.vue";

import { ref } from "vue";

const store = useMainStore();
const { cards, activeCardIndex, board, slots, confirmDialog } = storeToRefs(store);
const { startGame, nextCard, sendCardToSlot, sendCardToSlotFromBoard, checkDrop, checkDropFromCards } = store;

onMounted(() => {
    activeCardIndex.value = -1;
    confirmDialog.value.show = false;
    if (!cards.value[0] && board.value.every((column) => column.length === 0) && slots.value.every((slot) => slot === -1)) {
        startGame();
    }
});

let targetCard = -1;
const droppedSlot = ref(-1);
const dragEndHandler = (card: any) => {
    targetCard = card;
    checkDrop(targetCard, droppedSlot.value);
    droppedSlot.value = -1;
};
const dragEndHandlerFromCards = (card: any) => {
    targetCard = card;
    checkDropFromCards(targetCard, droppedSlot.value);
    droppedSlot.value = -1;
};
const dragOverHandler = (slot: any) => {
    droppedSlot.value = slot;
};
</script>

<template>
    <div class="p-10">
        <div class="flex gap-5">
            <div class="basis-1/7">
                <button
                    class="h-40 w-32 block mx-auto bg-darkest-green border-4 border-white rounded hover:bg-light-green transition-all duration-200"
                    @click="nextCard"
                    v-if="activeCardIndex !== cards.length - 1 && cards.length"
                ></button>
                <button class="h-40 w-32 border-2 border-transparent" @click="nextCard" v-else-if="cards.length">
                    <img class="h-20 w-20 m-auto" src="@/assets/reset.png" />
                </button>
            </div>
            <div class="basis-1/7">
                <CardComponent
                    v-if="activeCardIndex !== -1"
                    :card-number="cards[activeCardIndex]"
                    draggable="true"
                    @click="sendCardToSlot(cards[activeCardIndex])"
                    @dragend="dragEndHandlerFromCards(cards[activeCardIndex])"
                />
            </div>
            <div class="basis-1/7"></div>
            <div class="basis-1/7" v-for="(lastCard, index) in slots" :key="index">
                <div class="h-40 w-32 mx-auto border-4 border-white rounded flex" v-if="lastCard === -1">
                    <img :src="'suits/' + index + '.png'" class="h-24 w-24 m-auto" />
                </div>
                <CardComponent v-else :card-number="lastCard" />
            </div>
        </div>
        <div class="mt-10 flex gap-5">
            <div class="basis-1/7 flex flex-col mt-40" v-for="(column, slot) in board" :key="slot">
                <div class="mx-auto" v-for="(card, cardIndex) in column" :key="cardIndex">
                    <div
                        v-if="card > 0"
                        :style="{
                            'margin-left': cardIndex * 0.75 + 'rem',
                        }"
                    >
                        <CardComponent
                            class="border-2 border-darkest-green rounded -mt-36 mb-9"
                            :class="{ 'border-green-500': droppedSlot === slot }"
                            :card-number="card"
                            draggable="true"
                            @click="sendCardToSlotFromBoard(card)"
                            :data-number="card"
                            @dragend="dragEndHandler(card)"
                            @dragover="dragOverHandler(slot)"
                        />
                    </div>
                    <div
                        class="h-40 w-32 bg-darkest-green border-2 border-white rounded -mt-36"
                        :style="{
                            'margin-left': cardIndex * 0.75 + 'rem',
                        }"
                        v-else
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>
