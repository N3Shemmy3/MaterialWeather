<template>
  <div class="w-full min-h-screen">
    <!--Header -->
    <header
      class="fixed left-0 top-0 right-0 px-4 md:px-8 flex items-center shadow-sm bg-colorSurfaceLight dark:bg-colorSurfaceDark text-colorTextLight dark:text-colorTextDark"
    >
      <!-- Header clamp-->
      <div
        class="w-full md:max-w-6xl min-h-12 mx-auto flex items-center justify-between"
      ></div>
    </header>
    <div class="mt-16">
      <NuxtPage />
    </div>
  </div>
</template>
<style>
body {
  @apply min-h-full w-full flex flex-col;
  @apply bg-colorBackgroundLight dark:bg-colorBackgroundDark text-colorTextLight dark:text-colorTextDark;
}
</style>
