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
import { gsap } from 'gsap';

useHead({
  title: 'Aljoscha Domonell',
  meta: [{
    name: 'description',
    content: 'Aljoscha Domonells personal website'
  }]
})

const { encode } = useHtmlEncoder();

function animate() {
    gsap.timeline()
        .from(".ani-hi > *", { scale: 0, opacity: 0, ease: "elastic.out(0.5, 0.2)", stagger: 0.07, duration: 0.7, delay: 0.5 })
        .from(".ani-iam > *", { scale: 0, opacity: 0, ease: "elastic.out(0.5, 0.2)", stagger: 0.03, duration: 0.7 }, "-=.4")
        .add("st1", "-=0.8")
        .from(".ani-job-title > *", { scale: 0, opacity: 0, ease: "elastic.out(0.5, 0.2)", stagger: 0.07, duration: 0.7 }, "-=.55")
        .from(".ani-name", { x: 200, opacity: 0 }, "-=.5")
        .from(".ani-comma", { rotate: -90, opacity: 0 })
        .fromTo(".ani-name > *",
            { scale: 0.99 },
            { scale: 1, stagger: 0.06, duration: 0.4, ease: "back.out(180)" }
        )
        .from(".ani-full-job-title", { y: 50, opacity: 0, duration: 0.8 }, "st1")
        .from(".ani-contact", { y: 50, opacity: 0, duration: 0.8 }, "st1+=0.2");
}


onMounted(() => {
    animate();
});


</script>

<style scoped>

.big-button {
    @apply text-p-hightlight text-base font-mono p-3 border text-center hover:bg-p-hightlight hover:text-black border-p-hightlight transition ease-in-out duration-300
}
.big-letters {
    @apply text-white font-['Arial'] text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tightest
}
</style>
