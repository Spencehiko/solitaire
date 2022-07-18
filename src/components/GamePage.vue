<script setup lang="ts">
import { useMainStore } from "@/stores/store";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";

const store = useMainStore();
const { cards, activeCardIndex, board, slots } = storeToRefs(store);
const {
    startGame,
    nextCard,
    getCardNumber,
    getCardSuit,
    selectCard,
    sendCardToSlot,
} = store;

onMounted(() => {
    activeCardIndex.value = -1;
    if (!cards.value[0]) {
        startGame();
    }
});
</script>

<template>
    <div class="p-10">
        <div class="flex gap-5">
            <div class="basis-1/7">
                <button
                    class="h-40 w-32 block mx-auto bg-darkest-green border-2 border-white rounded hover:bg-light-green transition-all duration-200"
                    @click="nextCard"
                    v-if="activeCardIndex !== cards.length - 1"
                ></button>
                <button
                    class="h-40 w-32 border-2 border-transparent"
                    @click="nextCard"
                    v-else
                >
                    <img class="h-20 w-20 m-auto" src="reset.png" />
                </button>
            </div>
            <div class="basis-1/7">
                <button
                    v-if="activeCardIndex !== -1"
                    class="h-40 w-32 mx-auto bg-white rounded relative"
                    @click="selectCard(cards[activeCardIndex])"
                    @dblclick="sendCardToSlot(cards[activeCardIndex])"
                >
                    <div class="absolute left-2 top-2 flex flex-col">
                        <span>{{ getCardNumber(cards[activeCardIndex]) }}</span>
                        <img
                            class="h-4 w-4"
                            :src="`suits/${getCardSuit(
                                cards[activeCardIndex]
                            )}.png`"
                        />
                    </div>
                    <img
                        :src="
                            'suits/' +
                            getCardSuit(cards[activeCardIndex]) +
                            '.png'
                        "
                        class="h-16 w-16 m-auto"
                    />
                    <div
                        class="absolute right-2 bottom-2 flex flex-col -scale-100"
                    >
                        <span>{{ getCardNumber(cards[activeCardIndex]) }}</span>
                        <img
                            class="h-4 w-4"
                            :src="`suits/${getCardSuit(
                                cards[activeCardIndex]
                            )}.png`"
                        />
                    </div>
                </button>
            </div>
            <div class="basis-1/7"></div>
            <div
                class="basis-1/7"
                v-for="(lastCard, index) in slots"
                :key="index"
            >
                <div
                    class="h-40 w-32 mx-auto border-2 border-white rounded flex"
                    v-if="lastCard === -1"
                >
                    <img
                        :src="'suits/' + index + '.png'"
                        class="h-24 w-24 m-auto"
                    />
                </div>
                <div
                    v-else
                    class="h-40 w-32 mx-auto bg-white rounded relative flex"
                >
                    <div class="absolute left-2 top-2 flex flex-col">
                        <span>{{ getCardNumber(lastCard) }}</span>
                        <img
                            class="h-4 w-4"
                            :src="`suits/${getCardSuit(lastCard)}.png`"
                        />
                    </div>
                    <img
                        :src="'suits/' + getCardSuit(lastCard) + '.png'"
                        class="h-16 w-16 m-auto"
                    />
                    <div
                        class="absolute right-2 bottom-2 flex flex-col -scale-100"
                    >
                        <span>{{ getCardNumber(lastCard) }}</span>
                        <img
                            class="h-4 w-4"
                            :src="`suits/${getCardSuit(lastCard)}.png`"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-10 flex gap-5">
            <div
                class="basis-1/7"
                v-for="(column, index) in board"
                :key="index"
            >
                <div
                    class="mx-auto flex flex-col relative"
                    v-for="(card, cardIndex) in column"
                    :key="cardIndex"
                >
                    <div
                        v-if="card > 0"
                        class="absolute left-1/2 -translate-x-1/2"
                        :style="{ top: cardIndex * 1.25 + 'rem' }"
                    >
                        <button
                            class="h-40 w-32 bg-white rounded relative"
                            @click="selectCard(card)"
                            @dblclick="sendCardToSlot(card)"
                        >
                            <div class="absolute left-2 top-2 flex flex-col">
                                <span>{{ getCardNumber(card) }}</span>
                                <img
                                    class="h-4 w-4"
                                    :src="`suits/${getCardSuit(card)}.png`"
                                />
                            </div>
                            <img
                                :src="'suits/' + getCardSuit(card) + '.png'"
                                class="h-16 w-16 m-auto"
                            />
                            <div
                                class="absolute right-2 bottom-2 flex flex-col -scale-100"
                            >
                                <span>{{ getCardNumber(card) }}</span>
                                <img
                                    class="h-4 w-4"
                                    :src="`suits/${getCardSuit(card)}.png`"
                                />
                            </div>
                        </button>
                    </div>
                    <div
                        class="h-40 w-32 bg-darkest-green border-2 border-white rounded absolute left-1/2 -translate-x-1/2"
                        :style="{ top: cardIndex * 1.25 + 'rem' }"
                        v-else
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>
