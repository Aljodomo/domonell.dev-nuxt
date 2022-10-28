<template>
    <div class="bg-p-dark-black flex-row flex sm:flex-col h-full items-center justify-around sm:justify-center drop-shadow-2xl">
        <div class="hidden sm:block basis-36 flex-shrink-0"></div>
        <div class="hidden sm:block flex-1"></div>
        <div class="basis-3/4 flex flex-row items-center justify-between text-p-gray sm:basis-0 sm:flex-col sm:gap-5 sm:m-10">
            <NuxtLink v-for="route in routes" :key="route.key"
                :class="{'text-p-hightlight': route.key === currentRoute.path}" class="nav-button" :to="(route.key! as string)">
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
        <div class="hidden flex-1 sm:flex flex-row sm:flex-col justify-end">
            <NButton class="text-p-gray" size="large" quaternary circle @click="openInNewTab(instaUrl)">
                <template #icon>
                    <NIcon>
                        <LogoInstagram />
                    </NIcon>
                </template>
            </NButton>
            <NButton class="text-p-gray" size="large" quaternary circle @click="openInNewTab(githubUrl)">
                <template #icon>
                    <NIcon>
                        <LogoGithub />
                    </NIcon>
                </template>
            </NButton>
            <NButton class="text-p-gray" size="large" quaternary circle @click="openInNewTab(linkedInUrl)">
                <template #icon>
                    <NIcon>
                        <LogoLinkedin />
                    </NIcon>
                </template>
            </NButton>
        </div>
        <div class="hidden sm:block basis-36 flex-shrink"></div>
    </div>
    <SourceCodeFooter />
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
        label: "Home",
        key: "/"
    },
    {
        label: "About",
        key: "/about"
    },
    {
        label: "Contact",
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
.fill-screen {
    @apply absolute left-0 right-0 top-0 bottom-0 sm:left-auto sm:right-auto sm:top-auto sm:bottom-auto sm:static
}

.nav-button {
    @apply text-base sm:hover:text-p-hightlight hover:cursor-pointer;
}
</style>
