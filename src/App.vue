<script setup lang="ts">
import HeaderMenu from "./components/HeaderMenu.vue";
import GamePage from "./components/GamePage.vue";
import ConfirmDialog from "./components/ConfirmDialog.vue";

import { storeToRefs } from "pinia";
import { useMainStore } from "@/stores/store";

const store = useMainStore();
const { isConfirmDialogOpen } = storeToRefs(store);
</script>

<template>
    <div :class="{ blur: isConfirmDialogOpen }">
        <HeaderMenu />
        <main class="bg-dark-green h-screen-20">
            <GamePage />
        </main>
    </div>
    <ConfirmDialog />
</template>
