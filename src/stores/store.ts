import { defineStore } from "pinia";

export const useMainStore = defineStore({
    id: "main",
    state: () => ({
        board: [[], [], [], [], [], [], []] as
            | [
                  number[],
                  number[],
                  number[],
                  number[],
                  number[],
                  number[],
                  number[]
              ],
        cards: [] as number[],
        activeCardIndex: -1 as number,
        slots: [-1, -1, -1, -1] as [number, number, number, number],
    }),
    getters: {},
    actions: {
        startGame() {
            const allCards = Array.from({ length: 52 }, (_, i) => i + 1);
            for (let i = allCards.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [allCards[i], allCards[j]] = [allCards[j], allCards[i]];
            }
            this.cards = allCards.splice(0, 24);
            const remainingCards = allCards;
            for (let i = 0; i < 7; i++) {
                for (let j = 0; j <= i; j++) {
                    if (i !== j) {
                        this.board[i][j] = -remainingCards.splice(0, 1)[0];
                    } else {
                        this.board[i][j] = remainingCards.splice(0, 1)[0];
                    }
                }
            }
        },
        nextCard() {
            if (this.activeCardIndex === this.cards.length - 1) {
                this.activeCardIndex = -1;
            } else {
                this.activeCardIndex += 1;
            }
        },
        getCardNumber(card: number): number | string {
            const cardNum = card % 13;
            if (cardNum === 1) {
                return "A";
            }
            if (cardNum === 11) {
                return "J";
            }
            if (cardNum === 12) {
                return "Q";
            }
            if (cardNum === 0) {
                return "K";
            }
            return cardNum;
        },
        getCardSuit(card: number): number {
            return Math.floor(card / 13) === 4 ? 3 : Math.floor(card / 13);
        },
    },
    persist: true,
});
