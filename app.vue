<template>
  <div class="min-h-[100dvh] w-full flex flex-col">
    <NuxtPage
      class="max-w-[1440px] xl:max-h-[768px] mx-auto xl:m-auto xl:border xl:aspect-video xl:rounded-xl xl:overflow-clip xl:shadow-sm"
    />
  </div>
</template>
<style>
body {
  @apply bg-colorBackgroundLight dark:bg-colorBackgroundDark text-colorTextLight dark:text-colorTextDark  border-colorOutlineLight dark:border-colorOutlineDark;
}
</style>
