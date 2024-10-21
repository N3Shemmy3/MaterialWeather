<template>
  <div class="min-h-[100dvh] w-full flex flex-col">
    <NuxtPage
      class="w-full 2xl:max-w-[1440px] 2xl:max-h-[768px] mx-auto 2xl:m-auto 2xl:border 2xl:aspect-video 2xl:rounded-xl 2xl:overflow-clip 2xl:shadow-sm"
    />
  </div>
</template>
<style>
body {
  @apply bg-colorBackgroundLight dark:bg-colorBackgroundDark text-colorTextLight dark:text-colorTextDark  border-colorOutlineLight dark:border-colorOutlineDark;
}
</style>
