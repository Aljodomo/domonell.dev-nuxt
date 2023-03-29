<template>
    <div class="h-full p-8">
        <div class="h-full flex flex-col justify-between">
            <div>
                <div class="fading-text" :style="{'--animation-index': giveMeMyMsDelay('fade-text', 0)}">class Home {</div>
                <div class="res-mlr-5 fading-text" :style="{'--animation-index': giveMeMyMsDelay('fade-text', 0)}">public static void main(String args[]){</div>
            </div>
            <div id="welcome-message" class="res-mlr-5 mt-4">
                <div>
                    <div class="fading-text" :style="{'--animation-index': giveMeMyMsDelay('fade-text', 0)}">System.out.println("</div>
                    <div class="big-letters sm:ml-4">
                        <div class="mb-1 children_inline-block">
                            <span v-for="char, index in encode('Hey,')" :key="index" v-html="char" class="animate-pop-in-700" :style="{'--animation-index': giveMeMyMsDelay('hi', index)}"></span>
                        </div>
                        <div class="mb-1 children_inline-block">
                            <span class="children_inline-block">
                                <span v-for="char, index in encode('ich bin ')" :key="index" v-html="char" class="animate-pop-in-700"  :style="{'--animation-index': giveMeMyMsDelay('iam', index)}"></span>
                            </span>
                            <span class="bg-gradient-to-r from-p-hightlight-blue text-center to-p-hightlight bg-clip-text text-transparent children_inline-block animate-right-slide-in-500 pb-1 pr-1 pt-1" :style="{'--animation-index': giveMeMyMsDelay('name', 0)}">
                                <span v-for="char, index in encode('Aljoscha')" :key="index" v-html="char"></span>
                            </span>
                            <span id="comma" class="inline-block" :style="{'--animation-index': giveMeMyMsDelay('comma', 0)}">,</span>
                        </div>
                        <div class="children_inline-block">
                            <span v-for="char, index in encode('Software Entwickler')" :key="index" v-html="char" class="animate-pop-in-500" :style="{'--animation-index': giveMeMyMsDelay('job', index)}"></span>
                        </div>
                    </div>
                    <div class="fading-text" :style="{'--animation-index': giveMeMyMsDelay('fade-text', 0)}">");</div>
                </div>
                <div class="animate-left-slide-in-800" :style="{'--animation-index': giveMeMyMsDelay('full-job', 0)}">
                    <div class="fading-text" :style="{'--animation-index': giveMeMyMsDelay('fade-text', 0)}">System.out.println("</div>
                    <div class="w-auto res-mlr-5 text-base md:text-xl text-p-gray font-mono tracking-wider ">Backend / Web Fullstack
                        Entwickler</div>
                    <div class="fading-text" :style="{'--animation-index': giveMeMyMsDelay('fade-text', 0)}">");</div>
                </div>
                <div class="mt-5 flex flex-col animate-left-slide-in-800" :style="{'--animation-index': giveMeMyMsDelay('contact', 0)}">
                    <NuxtLink class="res-mlr-5 self-center sm:self-start big-button" to="/contact">
                        <div>Kontaktieren</div>
                    </NuxtLink>
                </div>
                <!-- <div class="mt-5">                    
                    <div class="flex gap-8 border border-p-hightlight rounded-lg justify-start pl-8 pr-8 pt-8 pb-8">
                        <input v-model="helloMessage" type="text"/>
                        <Send class="w-6 h-6 text-p-hightlight"></Send>
                    </div>
                </div> -->
            </div>
            <div>
                <div class="res-mlr-5 fading-text" :style="{'--animation-index': giveMeMyMsDelay('fade-text', 0)}">}</div>
                <div class="fading-text" :style="{'--animation-index': giveMeMyMsDelay('fade-text', 0)}">}</div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">

import { Send as Send } from '@vicons/ionicons5';

const { encode } = useHtmlEncoder();

const { giveMeMyMsDelay } = useCssStagger([
    { key: "hi", elements: 4, stagger: 70, delay: 500 },
    { key: "iam", elements: 8, stagger: 50, delay: 500 },
    { key: "job", elements: 19, stagger: 70, delay: 200 },
    { key: "name", elements: 1, delay: 400 },
    { key: "comma", elements: 1, delay: 500 },
    { key: "fade-text", elements: 1, delay: 1000},
    { key: "full-job", elements: 1, time: 1400 },
    { key: "contact", elements: 1, time: 1600 }
]);

const helloMessage = ref("");

</script>

<style scoped>

.animate-pop-in-700 {
    animation: elasticOut 700ms var(--animation-index);
    animation-fill-mode: backwards;
}
.animate-pop-in-500 {
    animation: elasticOut 500ms var(--animation-index);
    animation-fill-mode: backwards;
}

.animate-left-slide-in-800 {
    animation: slideIn-left 800ms ease-out var(--animation-index);
    animation-fill-mode: backwards;
}

.animate-right-slide-in-500 {
    animation: slidein 500ms var(--animation-index);
    animation-fill-mode: backwards;
}

.animate-rotate-in-500 {
    animation: rotate 500ms var(--animation-index);
    animation-fill-mode: backwards;
}

#comma {
    animation: comma-movement 1000ms ease-in-out var(--animation-index);
    animation-fill-mode: backwards;
}

@keyframes comma-movement {
    0% {
        transform: translateY(-500px);
        opacity: 0;
    }
    1% {
        opacity: 1;
    }
    70% {
        transform: rotate(-90deg);
    }
    100% {
        transform: rotate(0);
    }
}

@keyframes rotate {
    from {
        transform: rotate(-90deg);
        opacity: 0;
    }
}

@keyframes slideIn-left {
    from {
        transform: translateX(-200px);
        opacity: 0;
    }
}

@keyframes slideup {
    from {
        transform: translateY(200px);
        opacity: 0;
    }
}

@keyframes slidein {
    from {
        transform: translateX(200px);
        opacity: 0;
    }
}

@keyframes backout {
    0% {
        transform: scale(1);
    }
    60% {
        transform: scale(1.3);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes elasticOut {
    0% {
        transform: scale(0);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    20% {
        transform: scale(1.3);
    }
    40% {
        transform: scale(0.9);
    }
    55% {
        transform: scale(1.05);
    }
    70% {
        transform: scale(1.01);
    }
    100% {
        transform: scale(1);
    }
}

.big-button {
    border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
    border-image-slice: 1;
    border: 10px solid;
    border-width: 2px;
    border-color: #743ad5;
    @apply flex justify-center items-center bg-gradient-to-r from-p-hightlight-blue to-p-hightlight text-lg font-mono w-64 h-12 text-center bg-clip-text text-transparent hover:bg-clip-border hover:text-p-dark-black duration-100 drop-shadow-2xl hover:scale-105
}
.big-letters {
    @apply text-white font-['Arial'] text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tightest
}
</style>
