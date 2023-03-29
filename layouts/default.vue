<template>
    <div class="flex sm:flex-row flex-col items-stretch h-full bg-green-700">
        <MyHeader class="order-2 sm:order-1"></MyHeader>

        <div class="bg-p-black flex-grow overflow-auto order-1 sm:order-2 overflow-x-hidden">
            <slot></slot>
        </div>
    </div>
</template>
