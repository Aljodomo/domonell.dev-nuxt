<template>
    <div class="bg-p-dark-black pl-8 pr-8 sm:pl-16 sm:pr-16 flex-row flex sm:flex-col h-full items-center justify-around sm:justify-center drop-shadow-2xl">
        <!-- <div class="hidden sm:block basis-16 flex-shrink-0"></div> -->
        <div class="hidden sm:flex flex-1 flex-row sm:flex-col justify-start items-center mt-16">
            <LogoGithub class="text-p-gray hover:text-p-hightlight-blue hover:scale-125 transition hover:cursor-pointer w-8 h-8" @click="openInNewTab(githubUrl)" />
        </div>
        <!-- <div class="hidden sm:block flex-1"></div> -->
        <div class="basis-3/4 flex flex-row items-center justify-between text-p-gray sm:basis-0 sm:flex-col sm:gap-6 sm:mt-10 sm:mb-10">
            <NuxtLink v-for="route in routes" :key="route.key"
                :class="{'text-p-hightlight': route.key === currentRoute.path}" class="nav-button" :to="route.key + ''">
                {{route.label}}
            </NuxtLink>
            <NDropdown trigger="click" size="large" :options="options" @select="handleSelect">
                <NButton class="sm:hidden translate-y-[1px]" size="large" text>
                    <template #icon>
                        <NIcon>
                            <MenuSharp />
                        </NIcon>
                    </template>
                </NButton>
            </NDropdown>
        </div>
        <div class="hidden sm:flex flex-1 flex-row sm:flex-col justify-end items-center gap-6 mb-16">
            <LogoInstagram  class="social-button" @click="openInNewTab(instaUrl)" />
            <LogoGithub class="social-button" @click="openInNewTab(githubUrl)" />
            <LogoLinkedin  class="social-button" @click="openInNewTab(linkedInUrl)" />
        </div>
        <!-- <div class="hidden sm:block basis-16 flex-shrink"></div> -->
    </div>
    <SourceCodeFooter/>
</template>

<script setup lang="ts">
import { LogoGithub, LogoInstagram, LogoLinkedin, MenuSharp } from '@vicons/ionicons5';
import { DropdownOption, DropdownDividerOption, DropdownGroupOption, DropdownRenderOption } from 'naive-ui'
import { NDropdown, NButton, NIcon } from 'naive-ui'

const instaUrl = "https://www.instagram.com/25past4/";
const githubUrl = "https://github.com/Aljodomo";
const linkedInUrl = "https://www.linkedin.com/in/adomonell/";

type DropdownMixedOption = DropdownOption | DropdownDividerOption | DropdownGroupOption | DropdownRenderOption;

const routes: DropdownOption[] = [
    {
        label: "Willkommen",
        key: "/"
    },
    {
        label: "Über mich",
        key: "/about"
    },
    {
        label: "Kontakt",
        key: "/contact"
    }
]

function openInNewTab(url: string) {
    window.open(url, '_blank')?.focus();
}

const options: DropdownMixedOption[] = [
    {
        label: 'Instagram',
        key: instaUrl,
    },
    {
        label: 'GitHub',
        key: githubUrl,
    },
    {
        label: 'LinkedIn',
        key: linkedInUrl,
        
    }
];

function handleSelect(key: string) {
    if (key.startsWith("/")) {
        navigateTo(key);
    } else {
        openInNewTab(key);
    }
}

const currentRoute = useRoute();

</script>

<style scoped>

.dropdown {
    position: relative;
}

.button {
    
}
.fill-screen {
    @apply absolute left-0 right-0 top-0 bottom-0 sm:left-auto sm:right-auto sm:top-auto sm:bottom-auto sm:static;
}

.nav-button {
    @apply text-base sm:hover:text-p-hightlight hover:scale-110 transition hover:cursor-pointer;
}

.social-button {
    @apply text-p-gray hover:scale-110 transition hover:cursor-pointer hover:text-p-hightlight w-6 h-6
}
</style>
