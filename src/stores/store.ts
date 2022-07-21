import { defineStore } from "pinia";

export const useMainStore = defineStore({
    id: "main",
    state: () => ({
        board: [[], [], [], [], [], [], []] as [number[], number[], number[], number[], number[], number[], number[]],
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
        previousCard() {
            if (this.activeCardIndex === 0) {
                this.activeCardIndex += 1;
            }
            this.activeCardIndex -= 1;
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
        sendCardToSlot(card: number) {
            const suit = this.getCardSuit(card);
            const number = this.getCardNumber(card);
            if ((this.slots[suit] === -1 && number === "A") || this.isOneLess(number, this.getCardNumber(this.slots[suit]))) {
                this.slots[suit] = card;
                this.previousCard();
                this.cards.splice(this.cards.indexOf(card), 1);
            }
        },
        isOneLess(firstCard: number | string, secondCard: number | string) {
            if (typeof firstCard === "string" || typeof secondCard === "string") {
                return (
                    (firstCard === "A" && secondCard === "K") ||
                    (firstCard === "K" && secondCard === "Q") ||
                    (firstCard === "Q" && secondCard === "J") ||
                    (firstCard === "J" && secondCard === 10) ||
                    (firstCard === 2 && secondCard === "A")
                );
            }
            return firstCard === secondCard - 1;
        },
        checkDrop(targetCard: number, droppedSlot: number) {
            const lastCardOnSlot = this.board[droppedSlot][this.board[droppedSlot].length - 1];
            if (lastCardOnSlot === targetCard) {
                return;
            }
        },
    },
    persist: true,
});
