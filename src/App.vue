<script setup lang="ts">
import HeaderMenu from "./components/HeaderMenu.vue";
import GamePage from "./components/GamePage.vue";
import ConfirmDialog from "./components/ConfirmDialog.vue";

import { storeToRefs } from "pinia";
import { useMainStore } from "@/stores/store";

const store = useMainStore();
const { confirmDialog, isGameFinished } = storeToRefs(store);
</script>

<template>
    <div :class="{ blur: confirmDialog.show }" class="overflow-hidden">
        <HeaderMenu />
        <main class="bg-dark-green h-screen-20">
            <GamePage />
        </main>
    </div>
    <ConfirmDialog />
    <div class="pyro" v-if="isGameFinished">
        <div class="before"></div>
        <div class="after"></div>
    </div>
</template>
<style>
.pyro {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
}
.pyro > .before,
.pyro > .after {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
        0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff,
        0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff;
    -moz-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
    -webkit-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
    -o-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
    -ms-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
    animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
}
.pyro > .after {
    -moz-animation-delay: 1.25s, 1.25s, 1.25s;
    -webkit-animation-delay: 1.25s, 1.25s, 1.25s;
    -o-animation-delay: 1.25s, 1.25s, 1.25s;
    -ms-animation-delay: 1.25s, 1.25s, 1.25s;
    animation-delay: 1.25s, 1.25s, 1.25s;
    -moz-animation-duration: 1.25s, 1.25s, 6.25s;
    -webkit-animation-duration: 1.25s, 1.25s, 6.25s;
    -o-animation-duration: 1.25s, 1.25s, 6.25s;
    -ms-animation-duration: 1.25s, 1.25s, 6.25s;
    animation-duration: 1.25s, 1.25s, 6.25s;
}
@-webkit-keyframes bang {
    to {
        box-shadow: 171px -284.6666666667px #d000ff, 33px -404.6666666667px #4800ff, -198px -5.6666666667px #b7ff00, 218px -190.6666666667px #ff00bf, 54px -369.6666666667px #37ff00,
            123px -353.6666666667px #9100ff, -145px -26.6666666667px #00ff80, -199px -382.6666666667px #d500ff, 150px -100.6666666667px #f08, 221px -400.6666666667px #00ffd5,
            192px -32.6666666667px #04f, -238px -344.6666666667px #b0f, 32px -114.6666666667px #af0, -217px -388.6666666667px #00ff48, -200px -307.6666666667px #0026ff, 11px -202.6666666667px #00d0ff,
            27px 10.3333333333px #0f1, 215px -245.6666666667px #002fff, -198px -404.6666666667px #00ff6f, 91px 82.3333333333px #00ff15, 188px -16.6666666667px #05f, 133px 56.3333333333px #2bff00,
            -136px 55.3333333333px #3700ff, 168px -335.6666666667px #6200ff, -9px 26.3333333333px #48ff00, -134px -51.6666666667px #00d5ff, 58px -328.6666666667px #e600ff, 238px -77.6666666667px #f08,
            -27px -194.6666666667px #ff0004, -63px -22.6666666667px #00ff3c, 245px -40.6666666667px #006aff, 249px -107.6666666667px #f06, 28px -269.6666666667px #ff008c,
            90px -411.6666666667px #ff8400, -87px -358.6666666667px #6f00ff, 143px -112.6666666667px #ffd000, 210px -151.6666666667px #e0f, 140px -28.6666666667px #5900ff,
            -24px -24.6666666667px #ff00ae, 187px -338.6666666667px #80f, 34px -109.6666666667px #0f5, -125px -98.6666666667px #aeff00, -209px 40.3333333333px #f700ff, 152px -334.6666666667px #0f6,
            23px -368.6666666667px #02f, -75px -238.6666666667px #f09, -142px -314.6666666667px #ff1e00, -248px -408.6666666667px #7f0, 83px 18.3333333333px #006fff, -4px -308.6666666667px #0af,
            -226px -130.6666666667px #ff00e6;
    }
}
@-moz-keyframes bang {
    to {
        box-shadow: 171px -284.6666666667px #d000ff, 33px -404.6666666667px #4800ff, -198px -5.6666666667px #b7ff00, 218px -190.6666666667px #ff00bf, 54px -369.6666666667px #37ff00,
            123px -353.6666666667px #9100ff, -145px -26.6666666667px #00ff80, -199px -382.6666666667px #d500ff, 150px -100.6666666667px #f08, 221px -400.6666666667px #00ffd5,
            192px -32.6666666667px #04f, -238px -344.6666666667px #b0f, 32px -114.6666666667px #af0, -217px -388.6666666667px #00ff48, -200px -307.6666666667px #0026ff, 11px -202.6666666667px #00d0ff,
            27px 10.3333333333px #0f1, 215px -245.6666666667px #002fff, -198px -404.6666666667px #00ff6f, 91px 82.3333333333px #00ff15, 188px -16.6666666667px #05f, 133px 56.3333333333px #2bff00,
            -136px 55.3333333333px #3700ff, 168px -335.6666666667px #6200ff, -9px 26.3333333333px #48ff00, -134px -51.6666666667px #00d5ff, 58px -328.6666666667px #e600ff, 238px -77.6666666667px #f08,
            -27px -194.6666666667px #ff0004, -63px -22.6666666667px #00ff3c, 245px -40.6666666667px #006aff, 249px -107.6666666667px #f06, 28px -269.6666666667px #ff008c,
            90px -411.6666666667px #ff8400, -87px -358.6666666667px #6f00ff, 143px -112.6666666667px #ffd000, 210px -151.6666666667px #e0f, 140px -28.6666666667px #5900ff,
            -24px -24.6666666667px #ff00ae, 187px -338.6666666667px #80f, 34px -109.6666666667px #0f5, -125px -98.6666666667px #aeff00, -209px 40.3333333333px #f700ff, 152px -334.6666666667px #0f6,
            23px -368.6666666667px #02f, -75px -238.6666666667px #f09, -142px -314.6666666667px #ff1e00, -248px -408.6666666667px #7f0, 83px 18.3333333333px #006fff, -4px -308.6666666667px #0af,
            -226px -130.6666666667px #ff00e6;
    }
}
@-o-keyframes bang {
    to {
        box-shadow: 171px -284.6666666667px #d000ff, 33px -404.6666666667px #4800ff, -198px -5.6666666667px #b7ff00, 218px -190.6666666667px #ff00bf, 54px -369.6666666667px #37ff00,
            123px -353.6666666667px #9100ff, -145px -26.6666666667px #00ff80, -199px -382.6666666667px #d500ff, 150px -100.6666666667px #f08, 221px -400.6666666667px #00ffd5,
            192px -32.6666666667px #04f, -238px -344.6666666667px #b0f, 32px -114.6666666667px #af0, -217px -388.6666666667px #00ff48, -200px -307.6666666667px #0026ff, 11px -202.6666666667px #00d0ff,
            27px 10.3333333333px #0f1, 215px -245.6666666667px #002fff, -198px -404.6666666667px #00ff6f, 91px 82.3333333333px #00ff15, 188px -16.6666666667px #05f, 133px 56.3333333333px #2bff00,
            -136px 55.3333333333px #3700ff, 168px -335.6666666667px #6200ff, -9px 26.3333333333px #48ff00, -134px -51.6666666667px #00d5ff, 58px -328.6666666667px #e600ff, 238px -77.6666666667px #f08,
            -27px -194.6666666667px #ff0004, -63px -22.6666666667px #00ff3c, 245px -40.6666666667px #006aff, 249px -107.6666666667px #f06, 28px -269.6666666667px #ff008c,
            90px -411.6666666667px #ff8400, -87px -358.6666666667px #6f00ff, 143px -112.6666666667px #ffd000, 210px -151.6666666667px #e0f, 140px -28.6666666667px #5900ff,
            -24px -24.6666666667px #ff00ae, 187px -338.6666666667px #80f, 34px -109.6666666667px #0f5, -125px -98.6666666667px #aeff00, -209px 40.3333333333px #f700ff, 152px -334.6666666667px #0f6,
            23px -368.6666666667px #02f, -75px -238.6666666667px #f09, -142px -314.6666666667px #ff1e00, -248px -408.6666666667px #7f0, 83px 18.3333333333px #006fff, -4px -308.6666666667px #0af,
            -226px -130.6666666667px #ff00e6;
    }
}
@keyframes bang {
    to {
        box-shadow: 171px -284.6666666667px #d000ff, 33px -404.6666666667px #4800ff, -198px -5.6666666667px #b7ff00, 218px -190.6666666667px #ff00bf, 54px -369.6666666667px #37ff00,
            123px -353.6666666667px #9100ff, -145px -26.6666666667px #00ff80, -199px -382.6666666667px #d500ff, 150px -100.6666666667px #f08, 221px -400.6666666667px #00ffd5,
            192px -32.6666666667px #04f, -238px -344.6666666667px #b0f, 32px -114.6666666667px #af0, -217px -388.6666666667px #00ff48, -200px -307.6666666667px #0026ff, 11px -202.6666666667px #00d0ff,
            27px 10.3333333333px #0f1, 215px -245.6666666667px #002fff, -198px -404.6666666667px #00ff6f, 91px 82.3333333333px #00ff15, 188px -16.6666666667px #05f, 133px 56.3333333333px #2bff00,
            -136px 55.3333333333px #3700ff, 168px -335.6666666667px #6200ff, -9px 26.3333333333px #48ff00, -134px -51.6666666667px #00d5ff, 58px -328.6666666667px #e600ff, 238px -77.6666666667px #f08,
            -27px -194.6666666667px #ff0004, -63px -22.6666666667px #00ff3c, 245px -40.6666666667px #006aff, 249px -107.6666666667px #f06, 28px -269.6666666667px #ff008c,
            90px -411.6666666667px #ff8400, -87px -358.6666666667px #6f00ff, 143px -112.6666666667px #ffd000, 210px -151.6666666667px #e0f, 140px -28.6666666667px #5900ff,
            -24px -24.6666666667px #ff00ae, 187px -338.6666666667px #80f, 34px -109.6666666667px #0f5, -125px -98.6666666667px #aeff00, -209px 40.3333333333px #f700ff, 152px -334.6666666667px #0f6,
            23px -368.6666666667px #02f, -75px -238.6666666667px #f09, -142px -314.6666666667px #ff1e00, -248px -408.6666666667px #7f0, 83px 18.3333333333px #006fff, -4px -308.6666666667px #0af,
            -226px -130.6666666667px #ff00e6;
    }
}
@-webkit-keyframes gravity {
    to {
        transform: translateY(200px);
        -moz-transform: translateY(200px);
        -webkit-transform: translateY(200px);
        -o-transform: translateY(200px);
        -ms-transform: translateY(200px);
        opacity: 0;
    }
}
@-moz-keyframes gravity {
    to {
        transform: translateY(200px);
        -moz-transform: translateY(200px);
        -webkit-transform: translateY(200px);
        -o-transform: translateY(200px);
        -ms-transform: translateY(200px);
        opacity: 0;
    }
}
@-o-keyframes gravity {
    to {
        transform: translateY(200px);
        -moz-transform: translateY(200px);
        -webkit-transform: translateY(200px);
        -o-transform: translateY(200px);
        -ms-transform: translateY(200px);
        opacity: 0;
    }
}
@keyframes gravity {
    to {
        transform: translateY(200px);
        -moz-transform: translateY(200px);
        -webkit-transform: translateY(200px);
        -o-transform: translateY(200px);
        -ms-transform: translateY(200px);
        opacity: 0;
    }
}
@-webkit-keyframes position {
    0%,
    19.9% {
        margin-top: 10%;
        margin-left: 40%;
    }
    20%,
    39.9% {
        margin-top: 40%;
        margin-left: 30%;
    }
    40%,
    59.9% {
        margin-top: 20%;
        margin-left: 70%;
    }
    60%,
    79.9% {
        margin-top: 30%;
        margin-left: 20%;
    }
    80%,
    99.9% {
        margin-top: 30%;
        margin-left: 80%;
    }
}
@-moz-keyframes position {
    0%,
    19.9% {
        margin-top: 10%;
        margin-left: 40%;
    }
    20%,
    39.9% {
        margin-top: 40%;
        margin-left: 30%;
    }
    40%,
    59.9% {
        margin-top: 20%;
        margin-left: 70%;
    }
    60%,
    79.9% {
        margin-top: 30%;
        margin-left: 20%;
    }
    80%,
    99.9% {
        margin-top: 30%;
        margin-left: 80%;
    }
}
@-o-keyframes position {
    0%,
    19.9% {
        margin-top: 10%;
        margin-left: 40%;
    }
    20%,
    39.9% {
        margin-top: 40%;
        margin-left: 30%;
    }
    40%,
    59.9% {
        margin-top: 20%;
        margin-left: 70%;
    }
    60%,
    79.9% {
        margin-top: 30%;
        margin-left: 20%;
    }
    80%,
    99.9% {
        margin-top: 30%;
        margin-left: 80%;
    }
}
@keyframes position {
    0%,
    19.9% {
        margin-top: 10%;
        margin-left: 40%;
    }
    20%,
    39.9% {
        margin-top: 40%;
        margin-left: 30%;
    }
    40%,
    59.9% {
        margin-top: 20%;
        margin-left: 70%;
    }
    60%,
    79.9% {
        margin-top: 30%;
        margin-left: 20%;
    }
    80%,
    99.9% {
        margin-top: 30%;
        margin-left: 80%;
    }
}
</style>
