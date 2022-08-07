<script setup lang="ts">
import { useMainStore } from "@/stores/store";
import { storeToRefs } from "pinia";

const store = useMainStore();
const { confirmDialog } = storeToRefs(store);
const { newGame } = store;
</script>

<template>
    <div class="absolute left-1/2 -translate-x-1/2 top-40 bg-white text-black rounded p-5 z-50" v-if="confirmDialog.show">
        <div class="flex justify-between mb-4">
            <h3 class="text-xl font-bold">NEW GAME!</h3>
            <button @click="confirmDialog.show = false" class="rounded-full border-2 border-red-500 px-2 text-red-500 hover:bg-red-500 hover:text-white transition-all">X</button>
        </div>
        <span>{{ confirmDialog.message }}</span>
        <div class="flex justify-between mt-4">
            <button @click="confirmDialog.show = false" class="rounded border-2 border-red-500 px-2 text-red-500" v-show="confirmDialog.type === 'restart'">Cancel</button>
            <button @click="newGame" class="rounded border-2 border-black px-2 text-black p-2 hover:bg-black hover:text-white transition-all">New Game</button>
        </div>
    </div>
</template>
