<template>
  <NConfigProvider class="h-full" :theme="darkTheme" :theme-overrides="themeOverrides" inline-theme-disabled>
    <NNotificationProvider placement="bottom-right">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </NNotificationProvider>
  </NConfigProvider>
</template>

<script setup lang="ts">
import { NConfigProvider, NNotificationProvider, GlobalThemeOverrides, darkTheme, } from 'naive-ui'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#08FDD8',
  },
  Button: {
    heightLarge: "45px",
    textColor: '#08FDD8',
    colorHover: '#08FDD8',
    textColorHover: "black",
    colorFocus: '#08FDD8',
    borderRadiusLarge: "0",
    border: 'solid 1px #08FDD8',
  }
}
</script>