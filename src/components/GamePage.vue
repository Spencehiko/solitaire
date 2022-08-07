<script setup lang="ts">
import { useMainStore } from "@/stores/store";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const store = useMainStore();
const { cards, activeCardIndex, board, slots, confirmDialog } = storeToRefs(store);
const { startGame, nextCard, getCardNumber, getCardSuit, sendCardToSlot, sendCardToSlotFromBoard, checkDrop, checkDropFromCards } = store;

onMounted(() => {
    activeCardIndex.value = -1;
    confirmDialog.value.show = false;
    if (!cards.value[0] && board.value.every((column) => column.length === 0) && !slots.value.every((slot) => slot === -1)) {
        startGame();
    }
});

let targetCard = -1;
let droppedSlot = -1;
const dragEndHandler = (card: any) => {
    targetCard = card;
    checkDrop(targetCard, droppedSlot);
};
const dragEndHandlerFromCards = (card: any) => {
    targetCard = card;
    checkDropFromCards(targetCard, droppedSlot);
};
const dragOverHandler = (slot: any) => {
    droppedSlot = slot;
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
                <button
                    v-if="activeCardIndex !== -1"
                    class="h-40 w-32 mx-auto bg-white border-4 border-transparent rounded relative flex"
                    draggable="true"
                    @click="sendCardToSlot(cards[activeCardIndex])"
                    @dragend="dragEndHandlerFromCards(cards[activeCardIndex])"
                >
                    <div class="absolute left-2 top-2 flex flex-col" draggable="false">
                        <span>{{ getCardNumber(cards[activeCardIndex]) }}</span>
                        <img class="h-4 w-4" :src="`suits/${getCardSuit(cards[activeCardIndex])}.png`" draggable="false" />
                    </div>
                    <img :src="'suits/' + getCardSuit(cards[activeCardIndex]) + '.png'" class="h-16 w-16 m-auto" draggable="false" />
                    <div class="absolute right-2 bottom-2 flex flex-col -scale-100" draggable="false">
                        <span>{{ getCardNumber(cards[activeCardIndex]) }}</span>
                        <img class="h-4 w-4" :src="`suits/${getCardSuit(cards[activeCardIndex])}.png`" draggable="false" />
                    </div>
                </button>
            </div>
            <div class="basis-1/7"></div>
            <div class="basis-1/7" v-for="(lastCard, index) in slots" :key="index">
                <div class="h-40 w-32 mx-auto border-4 border-white rounded flex" v-if="lastCard === -1">
                    <img :src="'suits/' + index + '.png'" class="h-24 w-24 m-auto" />
                </div>
                <div v-else class="h-40 w-32 mx-auto bg-white rounded relative flex">
                    <div class="absolute left-2 top-2 flex flex-col">
                        <span>{{ getCardNumber(lastCard) }}</span>
                        <img class="h-4 w-4" :src="`suits/${getCardSuit(lastCard)}.png`" />
                    </div>
                    <img :src="'suits/' + getCardSuit(lastCard) + '.png'" class="h-16 w-16 m-auto" />
                    <div class="absolute right-2 bottom-2 flex flex-col -scale-100">
                        <span>{{ getCardNumber(lastCard) }}</span>
                        <img class="h-4 w-4" :src="`suits/${getCardSuit(lastCard)}.png`" />
                    </div>
                </div>
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
                        <div
                            class="h-40 w-32 bg-white border-2 border-darkest-green rounded relative flex cursor-pointer select-none draggable-card -mt-36 mb-8"
                            @click="sendCardToSlotFromBoard(card)"
                            draggable="true"
                            :data-number="card"
                            @dragend="dragEndHandler(card)"
                            @dragover="dragOverHandler(slot)"
                        >
                            <div class="absolute left-1 top-1 flex flex-col" draggable="false">
                                <span class="text-center">{{ getCardNumber(card) }}</span>
                                <img class="h-4 w-4" :src="`suits/${getCardSuit(card)}.png`" draggable="false" />
                            </div>
                            <img :src="'suits/' + getCardSuit(card) + '.png'" class="h-16 w-16 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" draggable="false" />
                            <div class="absolute right-1 bottom-1 flex flex-col -scale-100" draggable="false">
                                <span class="text-center">{{ getCardNumber(card) }}</span>
                                <img class="h-4 w-4" :src="`suits/${getCardSuit(card)}.png`" />
                            </div>
                        </div>
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
