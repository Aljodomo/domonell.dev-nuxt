<template>
    <div class="h-full p-5">
        <div class="h-full flex flex-col justify-between">
            <div class="fading-text">
                <div>class Home {</div>
                <div class="res-mlr-5">public static void main(String args[]){</div>
            </div>
            <div id="welcome-message" class="res-mlr-5">
                <div>
                    <div class="fading-text">System.out.println("</div>
                    <div class="big-letters sm:ml-5">
                        <div class="mb-1 children_inline-block ani-hi">
                            <span v-for="char in encode('Hey,')" v-html="char"></span>
                        </div>
                        <div class="mb-1 children_inline-block">
                            <span class="children_inline-block ani-iam">
                                <span v-for="char in encode('ich bin ')" v-html="char"></span>
                            </span>
                            <span id="name" class="text-p-hightlight children_inline-block ani-name">
                                <span v-for="char in encode('Aljoscha')" v-html="char"></span>
                            </span>
                            <span class="ani-comma">,</span>
                        </div>
                        <div class="children_inline-block ani-job-title">
                            <span v-for="char in encode('Software Entwickler')" v-html="char"></span>
                        </div>
                    </div>
                    <div class="fading-text">");</div>
                </div>
                <div class="ani-full-job-title">
                    <div class="fading-text">System.out.println("</div>
                    <div class="w-auto res-mlr-5 text-base md:text-xl text-p-gray font-mono tracking-wider ">Backend / Web Fullstack
                        Entwickler</div>
                    <div class="fading-text">");</div>
                </div>
                <div class="mt-5 flex flex-col ani-contact">
                    <NuxtLink class="res-mlr-5 w-52 self-center sm:self-start big-button" to="/contact">
                        Kontaktieren
                    </NuxtLink>
                </div>
            </div>
            <div class="fading-text">
                <div class="res-mlr-5">}</div>
                <div>}</div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
const { encode } = useHtmlEncoder();
</script>

<style scoped>

.big-button {
    @apply text-p-hightlight text-base font-mono p-3 border text-center hover:bg-p-hightlight hover:text-black border-p-hightlight transition ease-in-out duration-300
}
.big-letters {
    @apply text-white font-['Arial'] text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tightest
}
</style>
