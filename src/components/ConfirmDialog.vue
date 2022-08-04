<script setup lang="ts">
import { useMainStore } from "@/stores/store";
import { storeToRefs } from "pinia";

const store = useMainStore();
const { isConfirmDialogOpen } = storeToRefs(store);
const { newGame } = store;
</script>

<template>
    <div class="absolute left-1/2 -translate-x-1/2 top-40 bg-white text-black rounded p-5" v-if="isConfirmDialogOpen">
        <div class="flex justify-between mb-4">
            <h3 class="text-xl font-bold">NEW GAME!</h3>
            <button @click="isConfirmDialogOpen = false" class="rounded-full border-2 border-red-500 px-2 text-red-500">X</button>
        </div>
        <span>Are you sure to start a new game? All progress will be lost.</span>
        <div class="flex justify-between mt-4">
            <button @click="isConfirmDialogOpen = false" class="rounded border-2 border-red-500 px-2 text-red-500">Cancel</button>
            <button @click="newGame" class="rounded border-2 border-black px-2 text-black">New Game</button>
        </div>
    </div>
</template>
