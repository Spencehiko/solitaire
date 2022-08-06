<script setup lang="ts">
import { useMainStore } from "@/stores/store";
import { storeToRefs } from "pinia";

const store = useMainStore();
const { showConfirmDialog, autoFinish } = store;
const { cards, board } = storeToRefs(store);
</script>

<template>
    <div class="h-20 bg-black flex justify-between px-28">
        <span>Solitaire</span>
        <div class="flex gap-5">
            <button
                @click="autoFinish(300)"
                class="text-white border-2 border-white rounded p-4 h-14 leading-3 my-auto disabled:text-gray-700 disabled:border-gray-700 disabled:cursor-not-allowed"
                :disabled="!(cards.length === 0 && board.every((column) => column.every((card) => card > 0) && column.length !== 0))"
            >
                Auto Finish
            </button>
            <button @click="showConfirmDialog()" class="text-white border-2 border-white rounded p-4 h-14 leading-3 my-auto">New Game</button>
        </div>
    </div>
</template>
